"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HOW_CAN_I_SUPPORT_ITEMS } from "@/constants/homeConsts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => (
  <article className="flex min-h-screen flex-col items-center justify-between">
    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center gap-8 sm:flex-row">
      <div className="flex flex-col order-2 sm:order-1">
        <p className="uppercase text-xs">Chef Problem Solver</p>
        <p className="text-5xl font-bold my-4">I&apos;m Denice Sakakeeny.</p>
        <p className="text-base mb-4">
          With 25+ years in corporate finance, I help founders and executives
          solve complex business problems. I prioritize people, processes, and
          technology to drive sustainable growth.
        </p>
        <p className="text-base mb-4">
          Since 2011, I&apos;ve been an independent consultant and serve as an
          Interim or Fractional CFO for select clients.
        </p>
        <Image
          src="/assets/images/signature.jpg"
          alt="Signature"
          width={190}
          height={73}
        />
      </div>
      <div className="shrink-0 order-1 sm:order-2">
        <Image
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          width={410}
          height={455}
        />
      </div>
    </section>

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center gap-8 sm:flex-row">
      <div className="shrink-0 grow">
        <Image
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          width={410}
          height={455}
        />
      </div>

      <div className="flex flex-col">
        <p className="uppercase text-xs">Chef Problem Solver</p>
        <p className="text-5xl font-bold my-4">How I Can Support You</p>

        <div className="flex max-w-[600px] w-full">
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            loop
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoHeight
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {HOW_CAN_I_SUPPORT_ITEMS.map((p, index) => {
              return (
                <SwiperSlide className="pb-8" key={index}>
                  <p className="font-bold mb-2">{p.header}</p>
                  <p className="text-base mb-2">{p.info}</p>
                  <p className="text-base mb-2">{p.additional}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="flex flex-row" />
      </div>
    </section>
  </article>
);

export default Home;
