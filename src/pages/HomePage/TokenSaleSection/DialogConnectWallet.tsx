import React from "react";
import { Button, Dialog, DialogBody, DialogHeader, IconButton } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useConnect } from "wagmi";
import { TSize } from "../../../utils/types";

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
          {connectors.map((connector, index) => (
            <Button
              className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center justify-center gap-1"
              key={index}
              onClick={async () => {
                connect({ connector })
                handler()
              }}
            >
              {connector.name}
            </Button>
          ))}
        </div>
      </DialogBody>
    </Dialog>
  )
}