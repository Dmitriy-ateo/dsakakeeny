import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <main className="flex min-h-screen flex-col">
        <header className="flex flex-row justify-center py-4 mb-4">
          <div className="flex flex-row container px-4 w-full justify-between items-center">
            <div className="logo flex flex-row items-center gap-4">
              <Image
                src="/assets/images/icons/chess_icon.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <div className="logo__content uppercase leading-4">
                <p className="logo__title text-base">
                  Denice <b>Sakakeeny</b>
                </p>
                <p className="logo__subtitle text-xs">Always thinking ahead</p>
              </div>
            </div>
            <nav>
              <ul className="flex flex-row flex-wrap justify-end gap-8 text-xs uppercase">
                <li className="nav__item">
                  <a href="/">Hi, I&apos;m Denice</a>
                </li>
                <li className="nav__item">
                  <a href="/what-i-love">What-I-Love</a>
                </li>
                <li className="nav__item">
                  <a href="/what-i-write">What-I-Write</a>
                </li>
                <li className="nav__item">
                  <a href="/what-i-write">Let&apos;s chat</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
