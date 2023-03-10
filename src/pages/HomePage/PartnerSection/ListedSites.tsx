import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';

/* ----------------------------------------------------------- */

const DATA: Array<string> = [
  'gem-finder.png', 'cp.png', 'cn.png', 'logo-moon-1.png', 'coinsniper.png'
]

/* ----------------------------------------------------------- */

export default function ListedSites() {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-8">
      <h3 className="text-2xl lg:text-3xl font-black text-center text-white uppercase leading-snug">
        GAS WIZARD IS LISTED ON THESE SITES
      </h3>
      <div className="hidden lg:flex items-center justify-between">
        {DATA.map(dataItem => (
          <div key={dataItem}>
            <img src={`/assets/images/${dataItem}`} alt="" className="w-48" />
          </div>
        ))}
      </div>
      <div className="block lg:hidden px-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {DATA.map((dataItem: string) => (
            <SwiperSlide key={dataItem}>
              <div>
                <img src={`/assets/images/${dataItem}`} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}