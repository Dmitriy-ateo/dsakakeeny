"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { TESTIMONIALS } from "@/constants/homeConsts";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => (
  <section className="flex flex-col flex-nowrap container px-4 py-8 items-center">
    <p className="text-xs uppercase mb-2">Client Testimonials</p>
    <p className="text-5xl font-bold mb-4">Kudus, Denice</p>
    <p className="text-base mb-8"> A few kind words from my clients</p>

    <div className="block min-w-0 max-w-full">
      <Swiper
        className="w-full mb-8"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        loop
        pagination={{ clickable: true }}
        autoHeight
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {TESTIMONIALS.map((p) => {
          return (
            <SwiperSlide
              className="flex grow-0 shrink pb-10 min-h-[300px]"
              key={`slide_${p.id}`}
            >
              <p className="text-base mb-2">{p.testimonial}</p>
              <a className="text-xs font-bold mb-1" href={p.companyLink}>
                {p.company}
              </a>
              <p className="text-xs">{p.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </section>
);

export default TestimonialSection;
