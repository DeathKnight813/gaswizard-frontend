import React from 'react'
import SectionTitleSash1 from '../../../components/SectionTitleSash1'

/* ----------------------------------------------------------- */

const DIFFERENCES: Array<string> = [
  'Decentralized',
  'No team tokens',
  'SAFU',
  'Available Worldwide'
]

/* ----------------------------------------------------------- */

export default function Bars() {
  return (
    <div>
      <div className="bg-primary">
        <div className="container mx-auto py-16">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center uppercase text-white text-4xl font-extrabold">
              What makes us different?
            </h2>

            <SectionTitleSash1 />
          </div>

          <div className="grid grid-cols-4 gap-y-8 md:gap-0 items-start mt-16">
            {DIFFERENCES.map((differenceItem: string) => (
              <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center gap-6" key={differenceItem}>
                <div>
                  <img src="/assets/images/check-white.png" alt="check-white" className="w-[90%] h-auto" />
                </div>
                <p className="uppercase text-white text-4xl font-extrabold text-center">
                  {differenceItem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-darkPrimary py-16">
        <div className="max-w-sm mx-auto flex flex-col items-center gap-6">
          <div>
            <img src="/assets/images/coinscope-metablaze.png" className="w-64 h-auto" alt="" />
          </div>

          <h3 className="text-2xl text-center text-white font-bold">
            Team Verified by Coinscope
          </h3>

          <p className="text-white text-lg text-center">
            Team fully verified by Coinscope to ensure anti-rug and complete project security.
          </p>
        </div>
      </div>
    </div>
  )
}