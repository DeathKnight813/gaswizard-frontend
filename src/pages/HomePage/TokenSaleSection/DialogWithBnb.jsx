import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useDebounce } from "use-debounce";
import { useAccount, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi";
import { utils } from "ethers";
import useLoading from "../../../hooks/useLoading";
import useAlertMessage from "../../../hooks/useAlertMessage";
import CustomInput from "../../../components/CustomInput";
import { CONTRACT_ADDRESS, CURRENCY_GWIZ_TO_BNB, REGEX_NUMBER_VALID } from "../../../utils/constants";
import api from "../../../utils/api";
// import { TSize } from "../../../utils/types";

/* ----------------------------------------------------------- */

// interface IProps {
//   open: boolean;
//   handler: Function;
//   sizeOfDialog: TSize;
// }

/* ----------------------------------------------------------- */

export default function DialogWithBnb({ open, handler, sizeOfDialog, remainedTokenAmount }) {
  const { address } = useAccount();
  const { openLoading, closeLoading } = useLoading();
  const { openAlert } = useAlertMessage();

  const [sellAmount, setSellAmount] = useState('0');
  const [buyAmount, setBuyAmount] = useState('0');
  const [debouncedSellAmount] = useDebounce(sellAmount, 500);

  const claimStopped = useMemo(() => {
    const _buyAmount = Number(buyAmount || '0');
    if (remainedTokenAmount >= _buyAmount) {
      return false;
    }
    return true;
  }, [buyAmount, remainedTokenAmount]);

  /* ----------------- Send BNB from the wallet to the contract ------------------ */
  const { config } = usePrepareSendTransaction({
    request: {
      to: CONTRACT_ADDRESS,
      value: utils.parseEther(debouncedSellAmount || '0')
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: (transactionReceipt) => {
      api.post('invest/invest', {
        investor: address,
        fundTypeId: 1,
        fundAmount: Number(debouncedSellAmount),
        tokenAmount: Number(buyAmount)
      }).then(response => {
        closeLoading();
        openAlert({
          color: 'green',
          message: 'Claimed.'
        });
      }).catch(error => {
        console.log('>>>>>>>>> error => ', error);
        closeLoading();
        openAlert({
          color: 'red',
          message: 'Error occured. not claimed.'
        });
      });
    }
  });

  const handlePurchase = () => {
    sendTransaction?.();
  };

  /* ----------------------------------------------------------------------------- */

  //  Input sell amount
  const handleSellAmount = (e) => {
    const { value } = e.target;

    if (value.match(REGEX_NUMBER_VALID)) {
      setSellAmount(value);
      setBuyAmount(String(Number(value) / CURRENCY_GWIZ_TO_BNB));
    }
  };

  //  Input buy amount
  const handleBuyAmount = (e) => {
    const { value } = e.target;

    if (value.match(REGEX_NUMBER_VALID)) {
      setBuyAmount(value);
      setSellAmount(String(Number(value) * CURRENCY_GWIZ_TO_BNB));
    }
  };

  useEffect(() => {
    if (isLoading) {
      openLoading();
    }
  }, [isLoading]);

  return (
    <Dialog open={open} handler={() => handler()} size={sizeOfDialog}>
      <DialogHeader className="flex items-center justify-between">
        Buy with BNB
        <IconButton variant="text" onClick={() => handler()} className="text-2xl text-darkPrimary">
          <Icon icon="material-symbols:close-rounded" />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-4">
          {/* Selling */}
          <div className="flex flex-col gap-1">
            <label htmlFor="sellAmount">Selling</label>
            <CustomInput
              id="sellAmount"
              className="border border-gray-500"
              endAdornment={
                <div className="flex items-center gap-1">
                  <img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024" alt="BNB" className="w-6" />
                  <span className="">BNB</span>
                </div>
              }
              placeholder="0"
              value={sellAmount}
              onChange={handleSellAmount}
            />
          </div>

          {/* Buying */}
          <div className="flex flex-col gap-1">
            <label htmlFor="buyAmount">Buying</label>
            <CustomInput
              id="buyAmount"
              className="border border-gray-500"
              endAdornment={
                <div className="flex items-center gap-1">
                  <img src="favicon.png" alt="GWIZ" className="w-6" />
                  <span className="">$GWIZ</span>
                </div>
              }
              placeholder="0"
              value={buyAmount}
              onChange={handleBuyAmount}
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          className="bg-primary hover:bg-primary rounded-none text-white text-md capitalize"
          disabled={!sendTransaction || claimStopped}
          onClick={handlePurchase}
        >
          Purchase
        </Button>
      </DialogFooter>
    </Dialog>
  );
}