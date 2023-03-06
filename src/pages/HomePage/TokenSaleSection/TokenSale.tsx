import React, { useState } from "react";
import { Button, Progress } from "@material-tailwind/react";
import { useWeb3Modal, Web3NetworkSwitch } from "@web3modal/react";
import SectionTitleSash1 from "../../../components/SectionTitleSash1";
import { useAccount } from "wagmi";
import { Icon } from "@iconify/react";

/* ----------------------------------------------------------- */

export default function TokenSale() {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()

  const handleConnectWallet = () => {
    open()
  }

  return (
    <div className="bg-primary py-16 px-6 lg:px-0">
      <div className="container max-w-xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl lg:text-4xl font-black text-center text-white uppercase leading-snug">
          Presale Stage 1
        </h2>
        <SectionTitleSash1 />
        <p className="text-center text-base lg:text-xl text-white capitalize tracking-wider">
          <span className="font-black text-xl lg:text-2xl">0</span> Days <span className="font-black text-xl lg:text-2xl">9</span> hours <span className="font-black text-xl lg:text-2xl">40</span> minutes <span className="font-black text-xl lg:text-2xl">50</span> seconds remaining until presale phase 3 ends
        </p>
        <div className="border-white border-2 rounded-xl py-2 px-6 text-white">
          <p>First CEX Launch Will Go Live On Friday 31st March 2023</p>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p className="text-center">1 CCHG = 0.017 USDT</p>
          <p className="text-center">USDT Raised $1,742,679.85</p>
        </div>
        <Progress
          value={75}
          className="h-3 rounded-lg"
          barProps={{
            className: 'bg-secondary h-3 rounded-lg'
          }}
        />
        <div className="flex flex-col gap-2 text-white">
          <p className="text-center">
            46,076,381 Tokens Remaining Until<br />
            1 CCHG = 0.018 USDT
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex items-center justify-center gap-8">
          {isConnected ? (
            <>
              <Button
                variant="text"
                className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center gap-2"
              >
                <img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024" alt="BNB" className="w-6" />
                Buy with BNB
              </Button>
              <Button
                variant="text"
                className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize flex items-center gap-2"
              >
                <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024" alt="BUSDT" className="w-6" />
                Buy with BUSDT
              </Button>
              <Button
                variant="text"
                className="bg-secondary hover:bg-secondary rounded-none text-white text-lg capitalize flex items-center gap-2"
              >
                <Icon icon="wpf:disconnected" className="text-xl text-white" />
                Disconnect
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="text"
                className="bg-secondary hover:bg-secondary rounded-none text-white text-lg capitalize"
                onClick={handleConnectWallet}
              >
                Buy Now
              </Button>
              <Button variant="text" className="bg-darkPrimary hover:bg-darkPrimary rounded-none text-white text-lg capitalize">
                Whitepaper
              </Button>
            </>
          )}

        </div>
      </div>

    </div>
  )
}