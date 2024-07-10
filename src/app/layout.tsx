// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaRegCalendarPlus,
  FaRegEnvelope,
} from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denice Sakakeeny",
  description:
    "Denice Sakakeeny is a corporate finance consultant and outsourced CFO.",
  openGraph: {
    type: "website",
    url: "https://www.dsakakeeny.com/",
    title: "Denice Sakakeeny",
    description:
      "Denice Sakakeeny is a corporate finance consultant and outsourced CFO.",
    siteName: "Denice Sakakeeny",
    images: [{ url: "/assets/images/D_Image.png" }],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Denice Sakakeeny</title>
      <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
      <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
    </head>
    <body className={inter.className}>
      <main className="flex min-h-screen flex-col min-w-0 max-w-full">
        <header className="flex flex-row justify-center py-4 mb-4">
          <div className="flex flex-col sm:flex-row container px-4 w-full justify-between items-center gap-4">
            <div className="logo flex flex-row items-center gap-4">
              <a href="/">
                <Image
                  src="/assets/images/icons/chess_icon.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </a>
              <div className="logo__content uppercase leading-4">
                <p className="logo__title text-base">
                  Denice <b>Sakakeeny</b>
                </p>
                <p className="logo__subtitle text-xs">Always thinking ahead</p>
              </div>
            </div>
            <nav>
              <ul className="flex flex-row flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-xs uppercase">
                <li className="nav__item">
                  <a href="/">Hi, I&apos;m Denice</a>
                </li>
                <li className="nav__item">
                  <a href="/what-i-love">What-I-Love</a>
                </li>
                {/* <li className="nav__item"> */}
                {/*  <a href="/what-i-write">What-I-Write</a> */}
                {/* </li> */}
                <li className="nav__item">
                  <a
                    href="https://calendly.com/denicesak"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Let&apos;s chat
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="flex flex-col items-center p-4 mt-4 gap-4">
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
          <p className="text-base text-center">
            We are not lawyers. We are not tax experts.{" "}
            <b>We do not dispense investment advice.</b>
          </p>
          <p className="text-xs text-center">
            &copy; {new Date().getFullYear()} Denice Sakakeeny & Associates LLC,
            all rights reserved.
          </p>
        </footer>
      </main>
    </body>
  </html>
);

export default RootLayout;
