import React from 'react'
import { Button } from '@material-tailwind/react';
import SectionTitleSash1 from '../../../components/SectionTitleSash1';
import { IRoadmapData } from '../../../utils/interfaces';
import DP from './DP';
import MB from './MB';

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
      <DP roadmapData={DATA} />
      <MB roadmapData={DATA} />
      <div className="flex flex-col items-center gap-8 mt-8">
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