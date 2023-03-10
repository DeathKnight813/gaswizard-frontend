import React from "react";
import { Icon } from "@iconify/react";
import { IRoadmapData } from "../../../utils/interfaces";

/* ----------------------------------------------------------- */

interface IProps {
  roadmapData: Array<IRoadmapData>
}

/* ----------------------------------------------------------- */

export default function DP({ roadmapData }: IProps) {
  return (
    <div className="hidden lg:block">
      <div className="max-w-6xl mx-auto relative mt-16">
        <div className="flex flex-col">
          {roadmapData.map((dataItem: IRoadmapData, index: number) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className="grid grid-cols-2">
                  <div className="col-span-1 pb-16">
                    <div className="w-[92%] bg-primary px-4 py-8 relative text-white rounded-md">
                      <h3 className="text-center text-3xl font-extrabold">{dataItem.title}</h3>
                      <div className="flex flex-col items-center mt-6">
                        {dataItem.contents.map((contentItem: string, index: number) => (
                          <p key={index} className="text-center text-lg">{contentItem}</p>
                        ))}
                      </div>

                      <div className="absolute right-[-13.2%] top-[1%] flex items-center">
                        <Icon
                          icon="ic:sharp-arrow-right"
                          className="text-5xl text-primary"
                        />
                        <div className="bg-gray-100 shadow-md rounded-full p-2">
                          <div className="p-1 bg-primary rounded-full">
                            <Icon icon="ri:gas-station-fill" className="text-white text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`col-span-1 ${index + 1 !== roadmapData.length && 'border-l-4 border-gray-300'}`}>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={index} className="grid grid-cols-2">
                  <div className="col-span-1" />

                  <div className="col-span-1 flex justify-end pb-16 border-l-4 border-gray-300">
                    <div className="w-[92%] bg-primary px-4 py-8 text-white rounded-md relative">
                      <h3 className="text-center text-3xl font-extrabold">{dataItem.title}</h3>
                      <div className="flex flex-col items-center mt-6">
                        {dataItem.contents.map((contentItem: string, contentIndex: number) => (
                          <p key={contentIndex} className="text-center text-lg">{contentItem}</p>
                        ))}
                      </div>
                      <div className="absolute left-[-13.2%] top-[1%] flex items-center">
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
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}