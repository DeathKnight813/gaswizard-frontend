import React, { useEffect, useMemo, useState } from "react";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { useMediaQuery } from 'react-responsive';
import apiOfCoinLore from "../../../utils/apiOfCoinLore";
import { BUSDT_CONTRACT_ABI, BUSDT_CONTRACT_ADDRESS, COINLORE_ID_OF_BNB, COINLORE_ID_OF_USDT, CONTRACT_ADDRESS, TOKEN_CLAIM_APPROVED } from "../../../utils/constants";
import DialogWithBnb from "./DialogWithBnb";
import DialogWithBusdt from "./DialogWithBusdt";
import HowToBuy from "./HowToBuy";
import TokenSale from "./TokenSale";
import api from "../../../utils/api";
import DialogTokenClaim from "./DialogTokenClaim";

/* ----------------------------------------------------------- */

export default function TokenSaleSection() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });
  const { isConnected, address } = useAccount();

  const [dialogBnbOpened, setDialogBnbOpened] = useState(false);
  const [dialogBusdtOpened, setDialogBusdtOpened] = useState(false);
  const [dialogTokenClaimOpened, setDialogTokenClaimOpened] = useState(false);
  const [balance, setBalance] = useState({
    bnb: 0,
    busdt: 0
  });
  const [currenciesInUsd, setCurrenciesInUsd] = useState({
    bnb: 0,
    busdt: 0
  });
  const [balanceInUsd, setBalanceInUsd] = useState(0);
  const [tokenAmountInfo, setTokenAmountInfo] = useState({
    claimedTokenAmount: 0,
    totalTokenAmount: 0
  });
  const [tokenClaimStopped, setTokenClaimStopped] = useState(false);
  const [remainedTokenAmount, setRemainedTokenAmount] = useState(0);
  const [claimableTokenInfo, setClaimableTokenInfo] = useState({
    id: 0,
    investor: '',
    claimableTokenAmount: 0
  });
  /* ---------- Set the width of dialog by the screen size --------- */
  const sizeOfDialog = useMemo(() => {
    if (isMobile) {
      return 'xxl';
    }
    if (isTablet) {
      return 'xl';
    }
    if (isLaptop) {
      return 'md';
    }
    if (isDesktop) {
      return 'sm';
    }
    return 'xs';
  }, [isMobile, isTablet, isLaptop]);
  /* --------------------------------------------------------------- */

  /* -------------- Handle open and close of dialogs --------------- */
  const handleDialogBnbOpened = () => {
    setDialogBnbOpened(!dialogBnbOpened);
  };

  const handleDialogBusdtOpened = () => {
    setDialogBusdtOpened(!dialogBusdtOpened);
  };

  const handleDialogTokenClaimOpened = () => {
    setDialogTokenClaimOpened(!dialogTokenClaimOpened);
  };
  /* --------------------------------------------------------------- */

  /* ------------------ Get balance of contract --------------- */
  if (!TOKEN_CLAIM_APPROVED) {
    //  Get balance of busdt
    useContractRead({
      watch: true,
      address: BUSDT_CONTRACT_ADDRESS,
      abi: BUSDT_CONTRACT_ABI,
      functionName: 'balanceOf',
      args: [CONTRACT_ADDRESS],
      onSettled: (data, error) => {
        if (error) {
          return;
        }
        if (data) {
          setBalance({
            ...balance,
            busdt: parseInt(data._hex) / 10 ** 18
          });
        }
      },
    });

    //  Get balance of bnb
    useBalance({
      watch: true,
      address: CONTRACT_ADDRESS,
      onSettled: (data, error) => {
        if (error) {
          return;
        }
        if (data) {
          setBalance({
            ...balance,
            bnb: parseInt(data.value._hex) / 10 ** data.decimals
          });
        }
      }
    });
  }

  //  Get currencies of BNB and BUSDT hourly
  const getCurrenciesInUsd = () => {
    apiOfCoinLore.get(`/ticker/?id=${COINLORE_ID_OF_BNB},${COINLORE_ID_OF_USDT}`)
      .then(response => {
        setCurrenciesInUsd({
          bnb: response.data[1]['price_usd'],
          busdt: response.data[0]['price_usd']
        });
      })
      .catch(error => { });
  };

  useEffect(() => {
    if (!TOKEN_CLAIM_APPROVED) {
      getCurrenciesInUsd();
      const interval = setInterval(() => {
        getCurrenciesInUsd();
      }, 600000);
      return () => clearInterval(interval);
    }
  }, []);

  //  Balance in USD is updated whenever the balance of contract is changed or currencies in usd are changed
  useEffect(() => {
    if (!TOKEN_CLAIM_APPROVED) {
      const balanceOfBusdtInUsd = balance.busdt * currenciesInUsd.busdt;
      const balanceOfBnbInUsd = balance.bnb * currenciesInUsd.bnb;
      setBalanceInUsd(balanceOfBusdtInUsd + balanceOfBnbInUsd);
    }
  }, [balance]);
  /* ------------------------------------------------------------ */

  /* ----------------- Get token amount infos ------------------- */
  const getTokenAmountInfo = () => {
    api.get('/token-amount/get-token-amount-info')
      .then(response => {
        if (response.data) {
          setTokenAmountInfo({
            claimedTokenAmount: response.data.claimed_token_amount,
            totalTokenAmount: response.data.total_token_amount
          });
        }
      })
      .catch(error => { });
  };

  useEffect(() => {
    if (!TOKEN_CLAIM_APPROVED) {
      getTokenAmountInfo();
      const interval = setInterval(() => {
        getTokenAmountInfo();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, []);
  /* ------------------------------------------------------------ */

  useEffect(() => {
    if (!TOKEN_CLAIM_APPROVED) {
      const remainedTokenAmount = tokenAmountInfo.totalTokenAmount - tokenAmountInfo.claimedTokenAmount;
      if (remainedTokenAmount <= 0) {
        //  Update it to true in the real production
        setTokenClaimStopped(true);
      } else {
        setTokenClaimStopped(false);
      }
      setRemainedTokenAmount(remainedTokenAmount);
    }
  }, [tokenAmountInfo]);

  useEffect(() => {
    if (isConnected && TOKEN_CLAIM_APPROVED) {
      api.get(`/distribute/get-claimable-token-amount/${address}`)
        .then(response => {
          setClaimableTokenInfo({
            id: response.data.id,
            investor: address,
            claimableTokenAmount: response.data.claimable_token_amount
          });
        }).catch(error => { });
    }
  }, [isConnected]);

  return (
    <div>
      <TokenSale
        handleDialogBnbOpened={handleDialogBnbOpened}
        handleDialogBusdtOpened={handleDialogBusdtOpened}
        handleDialogTokenClaimOpened={handleDialogTokenClaimOpened}
        balanceInUsd={balanceInUsd}
        tokenAmountInfo={tokenAmountInfo}
        tokenClaimStopped={tokenClaimStopped}
        claimableTokenInfo={claimableTokenInfo}
      />
      <HowToBuy />
      {dialogBnbOpened && (
        <DialogWithBnb
          open={dialogBnbOpened}
          handler={handleDialogBnbOpened}
          sizeOfDialog={sizeOfDialog}
          remainedTokenAmount={remainedTokenAmount}
        />
      )}
      {dialogBusdtOpened && (
        <DialogWithBusdt
          open={dialogBusdtOpened}
          handler={handleDialogBusdtOpened}
          sizeOfDialog={sizeOfDialog}
          remainedTokenAmount={remainedTokenAmount}
        />
      )}
      {dialogTokenClaimOpened && (
        <DialogTokenClaim
          open={dialogTokenClaimOpened}
          handler={handleDialogTokenClaimOpened}
          sizeOfDialog={sizeOfDialog}
          claimableTokenInfo={claimableTokenInfo}
        />
      )}
    </div>
  );
}