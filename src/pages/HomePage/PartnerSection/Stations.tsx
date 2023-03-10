import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import SectionTitleSash1 from "../../../components/SectionTitleSash1";

/* ----------------------------------------------------------- */

const STATIONS_1: Array<string> = ['tesla.png', 'chargep.png', 'chevron-logo.png', 'shell-logo.png']
const STATIONS_2: Array<string> = ['711logo.png', 'speedwaylogo.png', 'marathonlogo.png', 'mobil-logo.png', 'bp-logo.png']

/* ----------------------------------------------------------- */

export default function Stations() {
  return (
    <div className="container max-w-5xl mx-auto flex flex-col gap-16 items-center">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-black text-center text-white uppercase leading-snug">
          GAS STATIONS & EV CHARGING STATIONS
        </h2>
        <SectionTitleSash1 />
      </div>

      <div className="w-full px-6 lg:px-0">
        <div className="hidden lg:flex flex-col items-center gap-8">
          <div className="w-full flex items-center justify-between px-8">
            {STATIONS_1.map(item => (
              <div key={item}>
                <img src={`/assets/images/${item}`} alt="" className="w-40" />
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-between">
            {STATIONS_2.map(item => (
              <div key={item}>
                <img src={`/assets/images/${item}`} alt="" className="w-32" />
              </div>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {[...STATIONS_1, ...STATIONS_2].map((dataItem: string) => (
              <SwiperSlide key={dataItem}>
                <div>
                  <img src={`/assets/images/${dataItem}`} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}