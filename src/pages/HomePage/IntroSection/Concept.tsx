import React from "react";
import SectionTitleSash1 from "../../../components/SectionTitleSash1";
import { COLOR_DARK_PRIMARY, COLOR_PRIMARY } from "../../../utils/constants";

/* ----------------------------------------------------------- */

export default function Concept() {
  return (
    <div className="grid grid-cols-11 gap-16">
      <div className="col-span-5">
        <div>
          <img src="/assets/images/2nd-section-bg.png" alt="" className="w-full" />
        </div>
      </div>
      <div className="col-span-6 flex flex-col gap-8">
        <h1 className="text-4xl font-black text-darkPrimary">
          What is GAS WIZARD?
        </h1>

        <SectionTitleSash1 leftColor={COLOR_DARK_PRIMARY} rightColor={COLOR_PRIMARY} />

        <div className="flex flex-col gap-8 text-darkSecondary tracking-wider">
          <p>
            Our Mission is to change the world with blockchain technology GAS WIZARD FINANCE aims to democratize the gas and EV industry by enabling EV & GAS drivers the ability to earn rewards such as FREE gas and electric charges to token holders. GAS WIZARD FINANCE is a blockchain-powered network that is the first on-chain or off-chain platform that allows drivers to earn FREE credits.
          </p>

          <p>
            GAS WIZARD believes that the rapid price increase of gas and electricity is going to continue to rise and drivers will continue to suffer at the pump and charging stations. Our mission is to create a platform utilizing blockchain technology that will promote the movement of all vehicle owners. We endeavor to build the world’s leading EV & GAS saving crypto payment network by investing in, deploying, and partnering with world-class Oil, Gas and EV companies worldwide. GAS WIZARD FINANCE token holders will be automatically rewarded free BNB to their wallets to ease the blow of high prices at the pump and charging stations.
          </p>

          <p>
            By providing an effortless payment experience and the ability to earn free gas and charges for drivers, GAS WIZARD FINANCE is creating a new payment model that is good for the economy, good for society, and good for business.
          </p>

          <p>
            GAS WIZARD – Magically gives you free tanks of gas & EV charges
          </p>
        </div>
      </div>
    </div>
  )
}