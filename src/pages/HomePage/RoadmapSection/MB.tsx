import React from "react";
import { Icon } from "@iconify/react";
import { IRoadmapData } from "../../../utils/interfaces";

/* ----------------------------------------------------------- */

interface IProps {
  roadmapData: Array<IRoadmapData>
}

/* ----------------------------------------------------------- */

export default function MB({ roadmapData }: IProps) {
  return (
    <div className="block lg:hidden mt-16 pr-6 pl-6">
      {roadmapData.map((dataItem: IRoadmapData, index: number) => (
        <div key={index} className="flex justify-end pb-8 border-l-4 border-gray-300">
          <div className="w-[86%] bg-primary px-4 py-8 text-white rounded-md relative">
            <h3 className="text-center text-xl font-extrabold">{dataItem.title}</h3>
            <div className="flex flex-col items-center mt-6">
              {dataItem.contents.map((contentItem: string, contentIndex: number) => (
                <p key={contentIndex} className="text-center text-base">{contentItem}</p>
              ))}
            </div>
            <div className="absolute left-[-24%] top-[1%] flex items-center">
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
      ))}
    </div>
  )
}