import Image from "next/image";
import {
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegCalendarPlus,
} from "react-icons/fa6";

import "../styles/homePage.scss";
import TestimonialSection from "@/components/modules/testimonials";
import SupportSection from "@/components/modules/home/SupportSection";

const Home = () => (
  <article className="flex min-h-screen flex-col items-center">
    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center gap-8 sm:flex-row">
      <div className="flex flex-col order-2 sm:order-1">
        <p className="uppercase text-xs">Chef Problem Solver</p>
        <p className="text-5xl font-bold my-4">I&apos;m Denice Sakakeeny.</p>
        <p className="text-base mb-4">
          With 20+ years in corporate finance, I help founders and executives
          solve complex business problems. I prioritize people, processes, and
          technology to drive sustainable growth.
        </p>
        <p className="text-base mb-4">
          Since 2011, I&apos;ve been an independent consultant and serve as an
          Interim or Fractional CFO for select clients.
        </p>
        <Image
          src="/assets/images/signature.png"
          alt="Signature"
          width={190}
          height={73}
        />
      </div>
      <div className="flex flex-col items-center gap-4 shrink lg:shrink-0 grow min-w-[350px] order-1 sm:order-2">
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

    <SupportSection />
    <TestimonialSection />
  </article>
);

export default Home;
