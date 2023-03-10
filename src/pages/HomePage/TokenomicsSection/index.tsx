import React from "react";
import Diagram from "./Diagram";
import Supply from "./Supply";

/* ----------------------------------------------------------- */

export default function TokenomicsSection() {
  return (
    <div className="flex flex-col gap-8">
      <Supply />
      <Diagram />
    </div>
  )
}