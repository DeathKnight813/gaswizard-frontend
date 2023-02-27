import React from "react";
import { COLOR_SECONDARY } from "../utils/constants";

/* ----------------------------------------------------------- */

interface IProps {
  leftColor?: string;
  rightColor?: string;
}

/* ----------------------------------------------------------- */

export default function SectionTitleSash1({ leftColor = 'secondary', rightColor = 'white' }: IProps) {
  return (
    <div className="h-1 w-24 flex">
      <div className={`w-1/4 h-full bg-${leftColor}`}></div>
      <div className={`flex-1 h-full bg-${rightColor}`}></div>
    </div>
  )
}