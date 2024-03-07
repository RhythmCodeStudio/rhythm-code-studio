'use client';
import Image from "next/image";
import SocialMediaLinks from "./components/socialMediaLinks";

import { track } from "@vercel/analytics";


export default function Home() {
  return (
    <section className="grid grid-cols-1">
      <h1 className=" hidden text-2xl md:text-4xl font-bold  text-center">
        Rhythm Code Studio
      </h1>
      <h2 className=" hidden text-xl md:text-xl font-bold text-center">
        Custom web solutions to match your beat
      </h2>
      {/* <div className="w-72 md:w-200 mb-6 mt-52 md:mt-6"> */}
      <div
        className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-200 justify-center items-center absolute`}>
        <Image
          src="/images/logos/horizontal-full.png"
          width={1000}
          height={594}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>
      <div className="left-1/2 bottom-1 transform -translate-x-1/2 translate-y-1/2 justify-center items-center absolute mb-72 md:mb-16">
        <div
          id="email-div"
          className="text-center"
          onClick={() => {
            track("Email link clicked");
          }}>
          <a
            href="mailto:kevin@rhythmcodestudio.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email Mike Martin Media">
            <h4 className="md:text-xl underline hover:transform hover:scale-110 transition-transform">
              kevin@rhythmcodestudio.tech
            </h4>
          </a>
        </div>
        <div className="mt-6">
          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
}
