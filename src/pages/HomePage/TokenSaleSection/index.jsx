import React, { useEffect, useMemo, useState } from "react";
import { useBalance, useContractRead } from "wagmi";
import { useMediaQuery } from 'react-responsive';
import apiOfCoinLore from "../../../utils/apiOfCoinLore";
import { BUSDT_CONTRACT_ABI, BUSDT_CONTRACT_ADDRESS, COINLORE_ID_OF_BNB, COINLORE_ID_OF_USDT, CONTRACT_ADDRESS } from "../../../utils/constants";
import DialogWithBnb from "./DialogWithBnb";
import DialogWithBusdt from "./DialogWithBusdt";
import HowToBuy from "./HowToBuy";
import TokenSale from "./TokenSale";
import DialogConnectWallet from "./DialogConnectWallet";
import api from "../../../utils/api";
// import { ITokenAmountInfo } from "../../../utils/interfaces";

/* ----------------------------------------------------------- */

// interface IBalance {
//   bnb: number;
//   busdt: number;
// }

// interface ICurrenciesInUsd {
//   bnb: number;
//   busdt: number;
// }

/* ----------------------------------------------------------- */

export default function TokenSaleSection() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });

  const [dialogBnbOpened, setDialogBnbOpened] = useState(false);
  const [dialogBusdtOpened, setDialogBusdtOpened] = useState(false);
  const [dialogConnectWalletOpened, setDialogConnectWalletOpened] = useState(false);
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

  const handleDialogConnectWalletOpened = () => {
    setDialogConnectWalletOpened(!dialogConnectWalletOpened);
  };
  /* --------------------------------------------------------------- */

  /* ------------------ Get balance of contract --------------- */
  //  Get balance of busdt
  useContractRead({
    watch: true,
    address: BUSDT_CONTRACT_ADDRESS,
    abi: BUSDT_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [CONTRACT_ADDRESS],
    onSettled: (data, error) => {
      if (error) {
        return console.log('>>>>>>> error of balance in busdt => ', error);
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
        return console.log('>>>>>>> error of balance in bnb => ', error);
      }
      if (data) {
        setBalance({
          ...balance,
          bnb: parseInt(data.value._hex) / 10 ** data.decimals
        });
      }
    }
  });

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
    getCurrenciesInUsd();
    const interval = setInterval(() => {
      getCurrenciesInUsd();
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  //  Balance in USD is updated whenever the balance of contract is changed or currencies in usd are changed
  useEffect(() => {
    const balanceOfBusdtInUsd = balance.busdt * currenciesInUsd.busdt;
    const balanceOfBnbInUsd = balance.bnb * currenciesInUsd.busdt;
    setBalanceInUsd(balanceOfBusdtInUsd + balanceOfBnbInUsd);
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
    getTokenAmountInfo();
    const interval = setInterval(() => {
      getTokenAmountInfo();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  /* ------------------------------------------------------------ */

  useEffect(() => {
    const remainedTokenAmount = tokenAmountInfo.totalTokenAmount - tokenAmountInfo.claimedTokenAmount;
    if (remainedTokenAmount <= 0) {
      setTokenClaimStopped(true);
    } else {
      setTokenClaimStopped(false);
    }
    setRemainedTokenAmount(remainedTokenAmount);
  }, [tokenAmountInfo]);

  return (
    <div>
      <TokenSale
        handleDialogBnbOpened={handleDialogBnbOpened}
        handleDialogBusdtOpened={handleDialogBusdtOpened}
        handleDialogConnectWalletOpened={handleDialogConnectWalletOpened}
        balanceInUsd={balanceInUsd}
        tokenAmountInfo={tokenAmountInfo}
        tokenClaimStopped={tokenClaimStopped}
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
      {dialogConnectWalletOpened && (
        <DialogConnectWallet
          open={dialogConnectWalletOpened}
          handler={handleDialogConnectWalletOpened}
          sizeOfDialog={sizeOfDialog}
        />
      )}
    </div>
  );
}