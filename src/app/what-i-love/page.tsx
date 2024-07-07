import Image from "next/image";
import {
  FaLinkedinIn,
  FaRegCalendarPlus,
  FaRegEnvelope,
} from "react-icons/fa6";
import TestimonialSection from "@/components/modules/testimonials";

const WhatILovePage = () => (
  <article className="flex min-h-screen flex-col items-center justify-between">
    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center gap-8 sm:flex-row">
      <div className="flex flex-col order-2 sm:order-1">
        <p className="text-3xl font-bold my-4">
          I love to meet smart people with diverse backgrounds.
        </p>
        <p className="text-base mb-4">
          As either a corporate finance consultant or an outsourced CFO, I spend
          my days with people I respect and solve problems that not anyone
          can—or would—solve. It is a simple business model for me. I pick
          challenging problems and really smart, interesting people and get
          right down to work.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 shrink lg:shrink-0 min-w-[250px] order-1 sm:order-2">
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

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center sm:items-start gap-16 sm:flex-row">
      <div className="shrink lg:shrink-0 min-w-[250px]">
        <Image
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          width={410}
          height={455}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-3xl my-4 uppercase">
          I LOVE TO SOLVE <b>DIFFICULT PROBLEMS</b>
        </p>
        <p className="text-base mb-4">
          With decades of deep corporate finance experience, I love to solve the
          big problems that others shy away from. In business, people matter.
          And in my experience, when things have changed or are about to change
          in an organization, people matter more.
        </p>
        <p className="text-base mb-4">
          Companies are often communities of founders, investors, sometimes
          family, sometimes neighbors, and best friends. I am acutely attuned to
          how these relationships are intertwined with the operation and
          performance of the business.
        </p>
        <p className="text-base mb-4">
          My role, frequently, is to make the best recommendations under
          suboptimal circumstances, frequently with incomplete data. With a
          solid working relationship to fall back on, these difficult decisions
          become easier to discuss with candor when the time is right.
        </p>
      </div>
    </section>

    <section className="flex flex-col flex-nowrap container px-4 py-8 items-center sm:items-start gap-8 sm:flex-row">
      <div className="flex flex-col order-2 sm:order-1">
        <p className="text-3xl my-4 uppercase">
          I LOVE TO <b>BE PART OF THE TEAM</b>
        </p>
        <p className="text-base mb-4">
          Often, I am my client’s outsourced CFO. Sometimes, I report to the
          CFO. Other times, I report to the CEO and mentor the CFO, to help them
          build the kind of department not otherwise allowed by time or
          expertise.
        </p>
        <p className="text-base mb-4">
          Regardless of what role I play, I am an extension of your team, your
          brand, and your goals. If I am not accepted as part of the team, I
          will never accomplish the difficult tasks I was brought in to tackle.
        </p>
        <p className="text-base mb-4">
          The work is challenging. But the relationships don’t have to be. Over
          the years, I’ve become part of a community shared with my clients,
          which has become the basis of many long-term relationships built on
          mutual respect and admiration.
        </p>
        <p className="text-base mb-4">
          Being part of a team is not just sorting through the data and making
          the (very) tough calls. Being part of a team—my clients’ teams—means
          that I send flowers to an intern for her first sale; exchange pictures
          of my child for pictures of others’; solicit nominations for the best
          ice cream on Cape Cod; and attend weddings, birthday parties, and
          let’s-have-fun parties.
        </p>
        <p className="text-base mb-4">
          I am mindful of the impact my work has on the lives—and livelihoods—of
          those I work with.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 shrink lg:shrink-0 min-w-[250px] order-1 sm:order-2">
        <Image
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          width={410}
          height={455}
        />
      </div>
    </section>

    <TestimonialSection />
  </article>
);

export default WhatILovePage;
