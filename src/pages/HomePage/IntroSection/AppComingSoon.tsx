import React from "react"
import SectionTitleSash2 from "../../../components/SectionTitleSash2"

/* ----------------------------------------------------------- */

const DATA: Array<string> = [
  'Lowest Gas Price Locator',
  'Buy & Sell Gas Wizard On The Go',
  'Find Nearest Gas Wizard Supported Station / EV Charger',
  'Available on iOS & Android'
]

/* ----------------------------------------------------------- */

export default function AppComingSoon() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:gap-32">
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-8 px-6 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-black text-darkPrimary uppercase leading-snug">
          Gas <span className="text-secondary">wizard app</span> coming soon
        </h2>

        <SectionTitleSash2 />

        <ul className="ml-10 list-disc">
          {DATA.map((dataItem: string) => (
            <li
              key={dataItem}
              className="text-lg tracking-wider text-secondary"

            >
              <span className="text-darkSecondary">
                {dataItem}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 lg:col-span-1 flex justify-center">
        <img src="/assets/images/gas.png" alt="gas" className="w-1/3 lg:w-1/2" />
      </div>
    </div>
  )
}