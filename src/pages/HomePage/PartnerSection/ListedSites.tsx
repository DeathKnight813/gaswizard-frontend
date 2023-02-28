import React from "react"

const DATA: Array<string> = [
  'gem-finder.png', 'cp.png', 'cn.png', 'logo-moon-1.png', 'coinsniper.png'
]

export default function ListedSites() {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-8">
      <h3 className="text-3xl font-black text-center text-white uppercase leading-snug">
        GAS WIZARD IS LISTED ON THESE SITES
      </h3>
      <div className="flex items-center justify-between">
        {DATA.map(dataItem => (
          <div key={dataItem}>
            <img src={`/assets/images/${dataItem}`} alt="" className="w-48" />
          </div>
        ))}
      </div>
    </div>
  )
}