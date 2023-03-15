import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useAccount } from "wagmi";
import useLoading from "../../../hooks/useLoading";
import useAlertMessage from "../../../hooks/useAlertMessage";
import CustomInput from "../../../components/CustomInput";
import { REGEX_NUMBER_VALID } from "../../../utils/constants";
import api from "../../../utils/api";

/* ----------------------------------------------------------- */

export default function DialogTokenClaim({ open, handler, sizeOfDialog, claimableTokenInfo, setClaimableTokenInfo }) {
  const { address } = useAccount();
  const { openAlert } = useAlertMessage();
  const { openLoading, closeLoading } = useLoading();

  const [amount, setAmount] = useState('0');

  const handleAmount = (e) => {
    const { value } = e.target;

    if (value.match(REGEX_NUMBER_VALID)) {
      setAmount(value);
    }
  };

  const handleClaim = () => {
    openLoading();
    api.put(`/distribute/distribute-token/${claimableTokenInfo.id}`, {
      investor: address,
      amount: Number(amount)
    }).then(response => {
      closeLoading();
      setClaimableTokenInfo({
        ...claimableTokenInfo,
        claimableTokenAmount: response.data
      });
      openAlert({
        color: 'green',
        message: 'Sent to your wallet'
      });
    }).catch(error => {
      closeLoading();

      if (error?.response?.status === 404) {
        return openAlert({
          color: 'red',
          message: "You didn't invest for GWIZ."
        });
      }
      return openAlert({
        color: 'red',
        message: 'Error occured. not sent.'
      });
    });
  };

  return (
    <Dialog open={open} handler={() => handler()} size={sizeOfDialog}>
      <DialogHeader className="flex items-center justify-between">
        Claim GWIZ
        <IconButton variant="text" onClick={() => handler()} className="text-2xl text-darkPrimary">
          <Icon icon="material-symbols:close-rounded" />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-4">
          {/* Selling */}
          <div className="flex flex-col gap-1">
            <label htmlFor="amount">Selling</label>
            <CustomInput
              id="amount"
              className="border border-gray-500"
              endAdornment={
                <div className="flex items-center gap-1">
                  <img src="/assets/images/main-logo.png" alt="GWIZ" className="w-6 h-fit" />
                  <span className="">GWIZ</span>
                </div>
              }
              placeholder="0"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="gap-2">
        <Button
          variant="text"
          className="rounded-none text-primary text-md capitalize border border-primary"
          disabled={claimableTokenInfo.claimableTokenAmount === Number(amount)}
          onClick={() => setAmount(claimableTokenInfo.claimableTokenAmount - Number(amount))}
        >
          Max
        </Button>
        <Button
          className="bg-primary hover:bg-primary rounded-none text-white text-md capitalize"
          disabled={claimableTokenInfo.claimableTokenAmount - Number(amount) < 0 || Number(amount) === 0}
          onClick={handleClaim}
        >
          Claim
        </Button>
      </DialogFooter>
    </Dialog>
  );
}