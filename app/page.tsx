"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import components
import SocialMediaLinks from "./components/socialMediaLinks";

export default function Home() {
  return (
    <section className="grid grid-cols-1">
      <div className=" hidden mt-24 md:mt-12 xl:mt-36">
        <h1 className=" text-xl md:text-4xl font-bold  text-center">
          Rhythm Code Studio
        </h1>
        <h2 className="text-sm  md:text-xl font-bold text-center">
          Custom web solutions to match your beat
        </h2>
      </div>
      <div className="text-md sm:text-lg lg:text-2xl font-bold text-center left-1/2 top-30 transform -translate-x-1/2 translate-y-1/2 absolute">
        <a
          href="https://calendly.com/kevin-jnxz/30min"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="underline hover:transform hover:scale-110 transition-transform">
            Click or tap to schedule a free consultation.
          </h3>
        </a>
      </div>
      <div
        className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  justify-center items-center absolute`}>
        <Image
          className="w-full h-auto "
          src="/images/logos/mark-only-full.png"
          width={1000}
          height={594}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>

      <div className="left-1/2 bottom-1 transform -translate-x-1/2 translate-y-1/2 justify-center items-center absolute mb-40">
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
            aria-label="email Rhythm Code Studio">
            <h4 className="text-xl lg:text-2xl underline hover:transform hover:scale-110 transition-transform">
              kevin@rhythmcodestudio.tech
            </h4>
          </a>
        </div>
        <div className="mt-16">
          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
}
