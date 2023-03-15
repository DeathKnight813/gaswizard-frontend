import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import SectionTitleSash1 from "../../components/SectionTitleSash1"

/* ----------------------------------------------------------- */

const DATA: Array<string> = [
  'yf.png',
  'NASDAQ.png',
  'mw.png',
  'forbes.png',
  'dj.png',
  'bloomberg.png',
  'BENZINGA-1.png'
]

/* ----------------------------------------------------------- */

export default function NewsSection() {
  return (
    <div className="bg-primary px-6 lg:px-0">
      <div className="container max-w-6xl mx-auto flex flex-col gap-8 lg:gap-16 py-8 lg:py-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl lg:text-4xl font-black text-center text-white uppercase leading-snug">
            IN THE NEWS
          </h2>
          <SectionTitleSash1 />
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
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