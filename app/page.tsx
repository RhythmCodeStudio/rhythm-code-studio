'use client';
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
      <div className="text-lg lg:text-2xl font-bold  text-center mt-48 lg:mt-16">
        <a href="https://calendly.com/kevin-jnxz/30min" target="_blank" rel="noopener noreferrer">
        <h3 className="underline hover:transform hover:scale-110 transition-transform">Schedule your free consultation today.</h3>
        </a>
      </div>
      {/* <div className="w-72 md:w-200 mb-6 mt-52 md:mt-6"> */}
      <div
        className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-100 lg:w-128 2xl:w-200 3xl:w-300 justify-center items-center absolute`}>
        <Image
          src="/images/logos/horizontal-full.png"
          width={1000}
          height={594}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
      </div>
      <div className="left-1/2 bottom-1 transform -translate-x-1/2 translate-y-1/2 justify-center items-center absolute mb-32 md:mb-16">
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
            <h4 className="md:text-xl underline hover:transform hover:scale-110 transition-transform">
              kevin@rhythmcodestudio.tech
            </h4>
          </a>
        </div>
        <div className="mt-4 mb-10">
          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
}
