import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from '@material-tailwind/react';
import SectionTitleSash1 from '../../../components/SectionTitleSash1'

interface IRoadmapData {
  title: string;
  contents: Array<string>;
}

const DATA: Array<IRoadmapData> = [
  {
    title: 'Project Formation Phase',
    contents: [
      'Concept Generation',
      'Team Formation',
      'Retain Marketing Firm',
      'Website Development',
      'Smart Contract Development',
      'Formulate Marketing Campaign'
    ]
  },
  {
    title: 'Starting Phase',
    contents: [
      'Initial Marketing Rollout',
      'Press Release & Media Drop',
      'Awareness on Coin Listing Sites',
      'Telegram 1000+ Members',
      'NFT Development',
      'KYC',
      'Seed Round Sale'
    ]
  },
  {
    title: 'Pre-Sale Phase',
    contents: [
      'List Presale on Pinksale',
      'Deploy Smart Contract',
      'Aggressive Marketing Campaign',
      'Press Release & Media Drop',
      'Top 10 on Coin Listing Sites',
      'Trend on Reddit',
      'Trend on Twitter',
      'Telegram Members 4000+',
      'AMAs & Call Groups',
      '500+ Holders',
      'Gas & EV partner Acquistions'
    ]
  },
  {
    title: 'Public Launch Phase',
    contents: [
      'Public Token Listing on Pancake Swap',
      'Staking starts',
      'Press Release & Media Drop',
      'YouTube Influencer Campaign',
      'Top 5 on Coin Listing Sites',
      'Rewards Campaign',
      'Trend on Reddit',
      'Trend on Twitter',
      'Telegram Members 8000+',
      'Digital Events',
      'AMAs & Call Groups',
      'Crypto Influencers',
      '1000+ Holders',
      'Gas & EV partners',
      'App Demo',
      'Aggressive Marketing',
      'Official NFTs Release'
    ]
  },
  {
    title: 'Rocket Phase',
    contents: [
      'Press Release & Media Drop',
      'Youtube Influencer Campaign',
      'Top 3 on Coin Listing Sites',
      'Trend on Reddit',
      'Trend on Twitter',
      'Telegram Members 5000+',
      'Digital/Physical Events',
      'AMAs & Call Groups',
      '5000+ Holders',
      'FREE GAS Lottery',
      'Development',
      'Gas & EV partners & Store Acquistions',
      'Coin Market Cap & Coin Gecko Listing',
      'Extensive Marketing',
      'Exchange Listing Requests',
      'And More To Come...'
    ]
  }
]

export default function RoadmapSection() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl lg:text-4xl font-black text-center uppercase leading-snug">
          Roadmap
        </h2>
        <SectionTitleSash1 leftColor="darkPrimary" rightColor="primary" />
      </div>

      <div className="max-w-6xl mx-auto relative mt-16">
        <div className="flex flex-col">
          {DATA.map((dataItem: IRoadmapData, index: number) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className="grid grid-cols-2">
                  <div className="col-span-1 pb-16">
                    <div className="w-[92%] bg-primary px-4 py-8 relative text-white rounded-md">
                      <h3 className="text-center text-3xl font-extrabold">{dataItem.title}</h3>
                      <div className="flex flex-col items-center mt-6">
                        {dataItem.contents.map((contentItem: string, index: number) => (
                          <p key={index} className="text-center text-lg">{contentItem}</p>
                        ))}
                      </div>

                      <div className="absolute right-[-13.2%] top-[1%] flex items-center">
                        <Icon
                          icon="ic:sharp-arrow-right"
                          className="text-5xl text-primary"
                        />
                        <div className="bg-gray-100 shadow-md rounded-full p-2">
                          <div className="p-1 bg-primary rounded-full">
                            <Icon icon="ri:gas-station-fill" className="text-white text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`col-span-1 ${index + 1 !== DATA.length && 'border-l-4 border-gray-300'}`}>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={index} className="grid grid-cols-2">
                  <div className="col-span-1" />

                  <div className="col-span-1 flex justify-end pb-16 border-l-4 border-gray-300">
                    <div className="w-[92%] bg-primary px-4 py-8 text-white rounded-md relative">
                      <h3 className="text-center text-3xl font-extrabold">{dataItem.title}</h3>
                      <div className="flex flex-col items-center mt-6">
                        {dataItem.contents.map((contentItem: string, contentIndex: number) => (
                          <p key={contentIndex} className="text-center text-lg">{contentItem}</p>
                        ))}
                      </div>
                      <div className="absolute left-[-13.2%] top-[1%] flex items-center">
                        <div className="bg-gray-100 shadow-md rounded-full p-2">
                          <div className="p-1 bg-primary rounded-full">
                            <Icon icon="ri:gas-station-fill" className="text-white text-xl" />
                          </div>
                        </div>
                        <Icon
                          icon="ic:sharp-arrow-left"
                          className="text-5xl text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <Button variant="text" className="bg-secondary hover:bg-secondary rounded-none text-white text-lg capitalize">
          How To Buy
        </Button>

        <p className="uppercase text-darSecondary text-lg font-semibold text-center">
          Smart contract address: <span className="text-primary">XXXXXXXXXXXXXXXXX</span>
        </p>
      </div>
    </div>
  )
}