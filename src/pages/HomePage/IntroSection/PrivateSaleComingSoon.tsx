import React from "react"
import SectionTitleSash2 from "../../../components/SectionTitleSash2"

/* ----------------------------------------------------------- */

export default function PrivateSaleComingSoon() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-black text-darkPrimary uppercase leading-snug">
        Limited <span className="text-secondary">private sale</span> coming soon
      </h2>

      <SectionTitleSash2 />
    </div>
  )
}