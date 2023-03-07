import React, { ChangeEvent, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useDebounce } from "use-debounce";
import { utils } from "ethers";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import CustomInput from "../../../components/CustomInput";
import { BUSDT_CONTRACT_ABI, BUSDT_CONTRACT_ADDRESS, CONTRACT_ADDRESS, CURRENCY_GWIZ_TO_BUSDT, REGEX_NUMBER_VALID } from "../../../utils/constants";
import useLoading from "../../../hooks/useLoading";

/* ----------------------------------------------------------- */

interface IProps {
  open: boolean;
  handler: Function;
}

/* ----------------------------------------------------------- */

export default function DialogWithBusdt({ open, handler }: IProps) {
  const { openLoading, closeLoading } = useLoading()

  const [sellAmount, setSellAmount] = useState<string>('0')
  const [buyAmount, setBuyAmount] = useState<string>('0')

  const [debounceSellAmount] = useDebounce(sellAmount, 1000)

  /* ------------------ Send BUSDT from the wallet to the contract --------------- */
  const { config } = usePrepareContractWrite({
    address: BUSDT_CONTRACT_ADDRESS,
    abi: BUSDT_CONTRACT_ABI,
    functionName: 'transfer',
    args: [CONTRACT_ADDRESS, utils.parseEther(debounceSellAmount || '0')],
  })

  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(transactionReceipt) {
      console.log('>>>>>> transactionReceipt => ', transactionReceipt)
      closeLoading()
    }
  })

  const handlePurchase = () => {
    write?.()
  }
  /* ------------------------------------------------------------------------------ */

  const handleSellAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.match(REGEX_NUMBER_VALID)) {
      setSellAmount(value)
      setBuyAmount(String(Number(value) / CURRENCY_GWIZ_TO_BUSDT))
    }
  }

  const handleBuyAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.match(REGEX_NUMBER_VALID)) {
      setBuyAmount(value)
      setSellAmount(String(Number(value) * CURRENCY_GWIZ_TO_BUSDT))
    }
  }

  useEffect(() => {
    if (isLoading) {
      openLoading()
    }
  }, [isLoading])

  // useEffect(() => {
  //   console.log('>>>> isSuccess => ', isSuccess)
  //   closeLoading()
  // }, [isSuccess])

  return (
    <Dialog open={open} handler={() => handler()} size="xs">
      <DialogHeader className="flex items-center justify-between">
        Buy with BUSDT
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
                  <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024" alt="BNB" className="w-6" />
                  <span className="">BUSDT</span>
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
          disabled={!write}
          onClick={handlePurchase}
        >
          Purchase
        </Button>
      </DialogFooter>
    </Dialog>
  )
}