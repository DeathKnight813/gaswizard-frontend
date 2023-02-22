import React from "react";
import AppComingSoon from "./AppComingSoon";
import Concept from "./Concept";
import PrivateSaleComingSoon from "./PrivateSaleComingSoon";
import Videos from "./Videos";

/* ----------------------------------------------------------- */

export default function IntroSection() {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-16">
      <Concept />
      <Videos />
      <AppComingSoon />
      <PrivateSaleComingSoon />
    </div>
  )
}