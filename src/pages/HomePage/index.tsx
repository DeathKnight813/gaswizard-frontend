import React from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'

/* ----------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32">
      <HeroSection />
      <IntroSection />
    </div>
  )
}