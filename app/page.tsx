"use client";
// import from next
import Image from "next/image";
// import from vercel
import { track } from "@vercel/analytics";
// import icons
import { FaCalendarDays } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-content space-y-16 mb-12">
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
      
      <div className="px-8 lg:w-200 lg:text-lg">
        <h4 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">WE SPECIALIZE IN CREATING CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT</h4>
        <p className="my-4">Rhythm Code Studio develops high-performing custom websites and web applications for small businesses, musicinas, artists, creatives, and organizations in St. Louis, Missouri and beyond.</p>
        <p className="my-4">These days it's pretty easy to make a website. That doesn't mean it is easy to do right. Platforms like WordPres, Squarespace, Wix, and others make it possibile to get a new website online pretty quickly. The thing is, those platforms are designed and developed to accomodate everyone. As a result they lock you in to certain technologies that may or may not be the best for your unique situation. These platforms are designed to be one size fits all. A website from Rhythm Code Studio is developed for you and only you.</p> 
        <p>We craft your website to have everything you need and nothing you don't, using modern web technologies that these other platforms simply can't match. A Rhythm Code website is fast, secure, fully responsive so it looks great on any screen, and fully accessible so everyone can receive the unique message you are sending out into the world.</p>
        <p className="mt-4">AND, we manage it all for you, so you can focus on doing what you love and sharing it with the world.</p>
      </div>
      <div className="text-md lg:text-lg 3xl:text-xl font-bold ">
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


// THey were not designed aor developed for you and your unique situation. 