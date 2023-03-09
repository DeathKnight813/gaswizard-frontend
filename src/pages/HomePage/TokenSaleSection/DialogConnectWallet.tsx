import React from "react";
import { Button, Dialog, DialogBody, DialogHeader, IconButton } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { TSize } from "../../../utils/types";
import { useConnect } from "wagmi";

/* ----------------------------------------------------------- */

interface IProps {
  open: boolean;
  handler: Function;
  sizeOfDialog: TSize;
}

/* ----------------------------------------------------------- */

export default function DialogConnectWallet({ open, handler, sizeOfDialog }: IProps) {
  const { connectors, connect } = useConnect()

  return (
    <Dialog open={open} handler={() => handler()} size={sizeOfDialog} className="z-50">
      <DialogHeader className="flex items-center justify-between">
        Conenct wallet
        <IconButton variant="text" onClick={() => handler()} className="text-2xl text-darkPrimary">
          <Icon icon="material-symbols:close-rounded" />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-4">
          {connectors.map(connector => (
            <Button
              className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center justify-center gap-1"
              key={connector.id}
              onClick={async () => {
                connect({ connector })
                await handler()
              }}
            >
              {connector.name}
            </Button>
          ))}
          {/* <Button className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center justify-center gap-1">
            <img src="/assets/images/metamask.svg" alt="" className="w-8 h-auto" />
            Metamask
          </Button>
          <Button
            className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center justify-center gap-1"
            onClick={handleWeb3ModalOpen}
          >
            <img src="/assets/images/walletconnect.svg" alt="" className="w-12 h-auto" />
            WalletConnect
          </Button> */}
        </div>
      </DialogBody>
    </Dialog>
  )
}