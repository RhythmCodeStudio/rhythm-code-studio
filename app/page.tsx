"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import icons
import { FaCalendarDays } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-content space-y-16 ">
      <div>
        <h1 className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-blenny pb-2">
          Rhythm Code Studio
        </h1>
        <h2 className="tracking-tight text-center xs:text-lg md:text-2xl lg:text-3xl 3xl:text-5xl ">
          CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center expand-on-load">
        <Image
          className="w-2/5 h-auto max-w-180"
          src="/images/logos/mark-only-full.png"
          width={796}
          height={816}
          alt="Rhythm Code Studio logo"
          priority
        />
      </div>
      <div className="text-md lg:text-lg 3xl:text-xl font-bold  md:">
        <a
          href="https://calendly.com/kevin-jnxz/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            track(`Calendar link clicked`);
          }}>
          <div className="mb-2 flex justify-center items-center hover:transform hover:scale-110 transition-transform">
            <FaCalendarDays size={36} />
          </div>
          <h3>Schedule a free consultation.</h3>
        </a>
      </div>
    </section>
  );
}
