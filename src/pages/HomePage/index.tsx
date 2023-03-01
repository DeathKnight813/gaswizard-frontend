import React from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import PartnerSection from './PartnerSection'
import RoadmapSection from './RoadmapSection'
import TokenomicsSection from './TokenomicsSection'
import TokenSaleSection from './TokenSaleSection'

/* ----------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32">
      <HeroSection />
      <IntroSection />
      <TokenSaleSection />
      <TokenomicsSection />
      <PartnerSection />
      <RoadmapSection />
    </div>
  )
}