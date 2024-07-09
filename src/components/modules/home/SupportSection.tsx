"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  EXPERIENCE_ITEMS,
  HOW_CAN_I_SUPPORT_ITEMS,
} from "@/constants/homeConsts";

const SupportSection = () => (
  <section className="flex flex-col flex-nowrap container px-4 py-8 items-center sm:items-start gap-16 sm:flex-row">
    <div className="shrink">
      <Image
        src="/assets/images/chess.png"
        alt="Chef Problem Solver"
        width={410}
        height={455}
      />
    </div>

    <div className="flex flex-col">
      <p className="uppercase text-xs">Chef Problem Solver</p>
      <p className="text-3xl sm:text-5xl font-bold mt-4 mb-8">
        How I Can Support You
      </p>

      <Swiper
        className="max-w-[380px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] w-full mb-8"
        slidesPerView={1}
        modules={[Pagination]}
        loop
        pagination={{ clickable: true }}
        autoHeight
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {HOW_CAN_I_SUPPORT_ITEMS.map((p, index) => {
          return (
            <SwiperSlide
              className="flex grow-0 shrink pb-8 min-h-[300px] sm:min-h-[200px]"
              key={index}
            >
              <p className="font-bold mb-2">{p.header}</p>
              <p className="text-base mb-2">{p.info}</p>
              <p className="text-base mb-2">{p.additional}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="experience_wrapper">
        {EXPERIENCE_ITEMS.map((p) => {
          return (
            <div
              key={`exp_${p.id}`}
              className="border-t-2 border-t-gray-800 py-4"
            >
              <p className="text-5xl font-bold mb-2">{p.value} +</p>
              <p className="text-base font-bold">{p.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SupportSection;
