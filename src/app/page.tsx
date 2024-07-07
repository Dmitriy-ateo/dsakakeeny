"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegCalendarPlus,
} from "react-icons/fa6";

import {
  EXPERIENCE_ITEMS,
  HOW_CAN_I_SUPPORT_ITEMS,
  TESTIMONIALS,
} from "@/constants/homeConsts";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/homePage.scss";

const Home = () => (
  <article className="flex min-h-screen flex-col items-center">
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
      <div className="flex flex-col items-center gap-4 shrink-0 order-1 sm:order-2">
        <Image
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          width={410}
          height={455}
        />
        <div className="flex flex-row flex-nowrap justify-center gap-2">
          <a
            href="http://www.linkedin.com/in/denice"
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-gray-800 rounded-full"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:denice@dsakakeeny.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-gray-800 rounded-full"
          >
            <FaRegEnvelope size={24} />
          </a>
          <a
            href="https://calendly.com/denicesak"
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-gray-800 rounded-full"
          >
            <FaRegCalendarPlus size={24} />
          </a>
        </div>
      </div>
    </section>

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-start gap-16 sm:flex-row">
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
        <p className="text-3xl sm:text-5xl font-bold mt-4 mb-8">
          How I Can Support You
        </p>

        <Swiper
          className="max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] w-full mb-8"
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

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center">
      <p className="text-xs uppercase mb-2">Client Testimonials</p>
      <p className="text-5xl font-bold mb-4">Kudus, Denice</p>
      <p className="text-base mb-8"> A few kind words from my clients</p>

      <Swiper
        className="max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] w-full mb-8"
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
        {TESTIMONIALS.map((p, index) => {
          return (
            <SwiperSlide
              className="flex grow-0 shrink pb-10 min-h-[300px]"
              key={index}
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
    </section>
  </article>
);

export default Home;
