"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import components
import SocialMediaLinks from "./components/socialMediaLinks";
// import icons
import { FaCalendarDays } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-content space-y-16 3xl:space-y-36">
      <div className="hidden">
        <h1 className="text-center">Rhythm Code Studio</h1>
        <h2 className="text-center">
          Custom web solutions to match your beat
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-1/2 h-auto max-w-144"
          src="/images/logos/mark-only-full.png"
          width={796}
          height={816}
          alt="Rhythm Code Studio logo"
          priority
        />
      </div>

      <div 
        className="text-md lg:text-lg 3xl:text-xl font-bold  md:hover:transform hover:scale-110 transition-transform">
        <a
          href="https://calendly.com/kevin-jnxz/30min"
          target="_blank"
          rel="noopener noreferrer">
          <div className="mb-2 flex justify-center items-center">
            <FaCalendarDays size={36} />
          </div>
          <h3 className="underline">Schedule a free consultation.</h3>
        </a>
      </div>

      <div
        className="text-md lg:text-lg 3xl:text-xl font-bold hover:scale-110 transition-transform hover:transform hover:cursor-pointer"
        id="email-div"
        onClick={() => {
          track("Email link clicked");
        }}>
          <div className="mb-2 flex justify-center items-center">
            <FaEnvelope size={36} />
          </div>
        <a
          href="mailto:kevin@rhythmcodestudio.tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email Rhythm Code Studio">
          <h4 className="underline">
            kevin@rhythmcodestudio.tech
          </h4>
        </a>
      </div>
    </section>
  );
}
