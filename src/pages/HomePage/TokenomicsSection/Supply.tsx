import React from "react";
import SectionTitleSash1 from "../../../components/SectionTitleSash1";

/* ----------------------------------------------------------- */

export default function Supply() {
  return (
    <div className="container max-w-4xl mx-auto flex flex-col items-center gap-8 px-6 lg:px-0">
      <h2 className="text-3xl lg:text-4xl font-black text-center uppercase leading-snug">
        Tokenomics
      </h2>

      <SectionTitleSash1 leftColor="darkPrimary" rightColor="primary" />

      <h3 className="uppercase text-primary text-2xl text-center font-black">
        No Team Tokens
      </h3>

      <p className="uppercase text-darkPrimary text-center text-lg font-bold">
        11% BUY/SELL TRANSACTION TAX
      </p>

      <div className="w-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1 bg-secondary py-8 flex flex-col items-center gap-6 lg:gap-12">
            <p className="uppercase text-white text-xl font-bold text-center">
              Total Supply:<br />
              <span className="font-extrabold text-xl">
                5,000,000,000
              </span>
            </p>

            <p className="uppercase text-white text-xl font-bold text-center">
              SYMBOL:<br />
              <span className="font-extrabold text-xl">
                $GWIZ
              </span>
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 bg-secondary py-8 flex flex-col items-center gap-6 lg:gap-12">
            <p className="uppercase text-white text-xl font-bold text-center">
              Burn Supply:<br />
              <span className="font-extrabold text-xl normal-case">
                Will burn all excess tokens
              </span>
            </p>

            <p className="uppercase text-white text-xl font-bold text-center">
              Decimals:<br />
              <span className="font-extrabold text-xl">
                18
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-darkSecondary text-center text-lg">
          * Buy & Sell tax will be dropped to 5% at 1.5M marketcap
        </p>

        <p className="text-darkSecondary text-center text-lg">
          * 2% Buy & Sell tax at 3M marketcap. And 0% when applying for T2 Exchange
        </p>
      </div>
    </div>
  )
}