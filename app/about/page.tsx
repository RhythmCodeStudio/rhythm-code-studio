// import from next
import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
// import components
import Heading from "@/components/heading";
import TextBlock from "@/components/text-block";
import ArrowLinkOrButton from "@/components/arrow-link-or-button";
import InternalLink from "@/components/internal-link";

export const metadata = {
  title: "About Rhythm Code Studio",
  description:
    "Rhythm Code Studio develops high-performing custom websites and web applications for small businesses, musicians, artists, creatives, and organizations in St. Louis, Missouri and beyond. Rhythm Code Studio. Custom web solutions to match your beat.",
  alternates: {
    canonical: "/about",
  },
};

export default async function About() {
  await connection();
  return (
    <section className="px-4 lg:px-0">
      <div className="flex flex-col max-w-xl mx-auto px-6 lg:px-0 space-y-4 3xl:space-y-6">
        <Heading
          headingLevel={1}
          text="Rhythm Code Studio"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-blenny mb-6 3xl:mb-12"
        />
        <div className="flex flex-col justify-center ">
          <Heading
            headingLevel={2}
            text="WE SPECIALIZE IN CREATING CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
            className="font-bold lg:text-2xl xl:text-4xl"
          />
        </div>
        <div>
          <TextBlock
            text="Rhythm Code Studio develops high-performing custom websites and web applications for small businesses, musicians, artists, creatives, and organizations in St. Louis, Missouri and beyond."
            className="2xl:text-lg"
          />
        </div>
        <div>
          <TextBlock
            text="We develop web solutions with a pulse - ones that match your personal rhythm and style. Our work is fast and secure. Always fully responsive so your website looks great on any device. Always fully accessible so everyone can receive your message."
            className="2xl:text-lg"
          />
        </div>
        <div>
          <TextBlock
            text="We manage it all for you so you can focus on doing what you love and sharing it with the world."
            className="2xl:text-lg"
          />
        </div>
        <div className="w-16 lg:w-20 h-auto mx-auto ">
          <ArrowLinkOrButton 
            href="/behind-the-beat" 
            direction="down" 
            title="See who's behind the beat."
          />
        </div>
      </div>
    </section>
  );
}
