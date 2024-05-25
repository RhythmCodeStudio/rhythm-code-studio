"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import components
import SocialMediaLinks from "./components/socialMediaLinks";
// import icons
import { FaCalendarDays } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="3xl:mt-0 flex flex-col items-center justify-content">
      {/* <div className="hidden">
        <h1 className="text-center">Rhythm Code Studio</h1>
        <h2 className="text-sm md:text-xl font-bold text-center">
          Custom web solutions to match your beat
        </h2>
      </div> */}

      <div className="flex justify-center items-center">
        <Image
          className="w-1/2 h-auto max-w-128"
          src="/images/logos/mark-only-full.png"
          width={796}
          height={816}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>

      <div className="mt-12 mb-12 p-4 text-md lg:text-lg xl:text-xl font-bold text-center md:hover:transform hover:scale-110 transition-transform">
        <a
          href="https://calendly.com/kevin-jnxz/30min"
          target="_blank"
          rel="noopener noreferrer">
          <div className="mb-2 flex justify-center items-center">
            <FaCalendarDays size={36} />
          </div>
          <h3 className="underline">
            Schedule a free consultation.
          </h3>
        </a>
      </div>

      {/* <div className="mt-6 md:mt-0 md:mb-4  font-bold flex justify-center items-center"> */}
        <div
          id="email-div"
          className="text-center items-center"
          onClick={() => {
            track("Email link clicked");
          }}>
          <a
            href="mailto:kevin@rhythmcodestudio.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email Rhythm Code Studio">
            <h4 className="font-bold text-lg md:text-xl lg:text-lg xl:text-2xl underline sm:hover:transform hover:scale-110 transition-transform">
              kevin@rhythmcodestudio.tech
            </h4>
          </a>
        </div>
        
      {/* </div> */}
      {/* <div className="flex justify-center items-center">
        <SocialMediaLinks />
      </div> */}
    </section>
  );
}
