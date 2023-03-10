import React, { useMemo } from "react";
import { Button, Dialog, DialogBody, DialogHeader, IconButton } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Connector, useConnect } from "wagmi";
import { TSize } from "../../../utils/types";

/* ----------------------------------------------------------- */

interface IProps {
  open: boolean;
  handler: Function;
  sizeOfDialog: TSize;
}

interface ICustomizedConnectors {
  connector: Connector;
  image: string;
  label: string;
}

/* ----------------------------------------------------------- */

export default function DialogConnectWallet({ open, handler, sizeOfDialog }: IProps) {
  const { connectors, connect } = useConnect()

  // const customizedConnectors: Array<ICustomizedConnectors> = useMemo(() => {
  //   if (connectors.length > 0) {
  //     return connectors.map((connector, index) => {
  //       if (index === 0) {
  //         return {
  //           connector,
  //           image: '/assets/images/metamask.svg',
  //           label: 'Metamask (v1)'
  //         }
  //       }
  //       return {
  //         connector,
  //         image: '/assets/images/walletconnect.svg',
  //         label: 'WalletConnect'
  //       }
  //     })
  //   } else {
  //     return []
  //   }
  // }, [connectors])

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
                console.log('>>>>> connector => ', connector)
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