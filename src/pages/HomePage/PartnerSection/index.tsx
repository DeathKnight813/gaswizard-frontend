import React from "react";
import ListedSites from "./ListedSites";
import Stations from "./Stations";

export default function PartnerSection() {
  return (
    <div className="bg-primary flex flex-col gap-16 py-16">
      <Stations />
      <ListedSites />
    </div>
  )
}