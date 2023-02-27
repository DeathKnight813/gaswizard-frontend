import React from "react";
import SectionTitleSash1 from "../../../components/SectionTitleSash1";

export default function HowToBuy() {
  return (
    <div className="bg-darkPrimary py-16">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-4xl font-black text-center text-white uppercase leading-snug">
          How To Buy
        </h2>

        <SectionTitleSash1 />

        <div className="flex flex-col gap-2">
          <p className="text-center text-white text-lg">
            If you have BNB (Bep20) in your wallet, you can use the “Purchase GWIZ with BNB” (Bep20) option in order to swap the BUSD(Bep20) in your wallet for GWIZ.
          </p>
          <p className="text-center text-white text-lg">
            Type in the amount of  GWIZ you wish to purchase and then click “Convert BNB”.
          </p>
          <p className="text-center text-white text-lg">
            Your wallet provider will ask you to authorize GWIZ to access the BNB, then will ask you to confirm the transaction and will also show you the cost of gas.
          </p>
        </div>

        <h3 className="uppercase text-white text-2xl text-center font-bold">
          Buy GWIZ With Card
        </h3>

        <div>
          <a href="https://transak.com">
            <img src="/assets/images/transak-logo.png" alt="transak-logo" />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-center text-white text-lg">
            You can use the Transak widget in order to purchase BNB (Bep20) using your card, which you can then swap for GWIZ.
          </p>
          <p className="text-center text-white text-lg">
            We recommend buying at least $20 of BNB (Bep20) in order to ensure you have enough to buy GWIZ and cover the gas fees.
          </p>
        </div>
      </div>
    </div>
  )
}