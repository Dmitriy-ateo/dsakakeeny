"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HOW_CAN_I_SUPPORT_ITEMS } from "@/constants/homeConsts";

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

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center gap-16 sm:flex-row">
      <div className="shrink-0">
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

        <Swiper
          className="max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] w-full"
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
              <SwiperSlide className="flex grow-0 shrink pb-8" key={index}>
                <p className="font-bold mb-2">{p.header}</p>
                <p className="text-base mb-2">{p.info}</p>
                <p className="text-base mb-2">{p.additional}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  </article>
);

export default Home;
