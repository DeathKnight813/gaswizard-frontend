import React from "react";
import { COLOR_SECONDARY } from "../utils/constants";

/* ----------------------------------------------------------- */

interface IProps {
  leftColor?: string;
  rightColor?: string;
}

/* ----------------------------------------------------------- */

export default function SectionTitleSash1({ leftColor = COLOR_SECONDARY, rightColor }: IProps) {
  return (
    <div className="h-1 w-24 flex">
      <div className={`w-1/4 h-full bg-[${leftColor}]`}></div>
      <div className={`flex-1 h-full ${rightColor ? `bg-[${rightColor}]` : 'bg-white'} `}></div>
    </div>
  )
}