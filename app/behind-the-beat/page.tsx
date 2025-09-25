// import from next
import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
// import components
import Heading from "@/components/heading";
import TextBlock from "@/components/text-block";

export const metadata = {
  title: "About Rhythm Code Studio",
  description:
    "Rhythm Code Studio develops high-performing custom websites and web applications for small businesses, musicians, artists, creatives, and organizations in St. Louis, Missouri and beyond. Rhythm Code Studio. Custom web solutions to match your beat.",
  alternates: {
    canonical: "/about",
  },
};

export default async function Page() {
  await connection();
  return (
     <div className="flex flex-col my-6">

      <h1 className="mt-6 lg:mt-2 lg:mb-18 text-center text-3xl sm:text-4xl md:text-5xl font-blenny">
        Rhythm Code Studio
      </h1>
      <section className="grid grid-cols-1  lg:grid-cols-2 gap-y-2">
        <div className="order-3 lg:order-1 row-span-4 flex justify-center lg:justify-end items-center lg:mx-10">
          <div className="w-[274px] h-auto md:w-[328px]  xl:w-[410px]  2xl:w-[457px] flex justify-center items-center">
            <Image
              priority
              src="/images/kevin/kevin.png"
              alt="Rhythm Code Studio"
              width={547}
              height={547}
              // sizes="(max-width: 768px) 209px, (max-width: 1280px) 279px, (max-width: 1536px) 318px, 398px"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center lg:text-start place-content-end">
          <h2 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">
            WHO'S BEHIND THE BEAT
          </h2>
        </div>
        <div className="order-2 lg:order-3 place-content-center max-w-2xl">
          <p className="p-6 lg:mr-36 lg:pl-0 lg:py-0 ">
            Rhythm Code founder and lead developer, Kevin Long is attuned to the pulse of his hometown. He serves small businesses, musicians,
            creatives, and organizations in St. Louis and beyond.
          </p>
        </div>
        <div className="order-4 place-content-center max-w-2xl">
          <p className="p-6 lg:mr-36 lg:pl-0 lg:py-0 ">
            Kevin brings the passion and imagination of an artist, along with
            the patient persistence of an educator to every job he touches. His diverse background in arts and education and deep development
            knowledge make for a disciplined creativity like none other. Kevin
            and Rhythm Code Studio are dedicated to making your project sing in your own distinctive voice.
          </p>
        </div>
        <div className="order-5 px-6 lg:px-0 flex justify-center lg:justify-start items-center mt-4 ">
          <Link
            href="/contact"
          >
            <span className="font-bold text-lg xl:text-xl 2xl:text-2xl border-2 rounded-full shadow-md shadow-black px-6 py-1 hover:bg-white transition-all duration-700 ease-in-out"
          >
              CONTACT
            </span>
          </Link>
        </div>
      </section>
      {/* <div className="flex justify-center 3xl:mt-24">
        <Services
          headingLevel="h3"
          headingText="CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
          subHeadingLevel="h3"
          subHeadingText="Services Offered"
          headingClassName={
            "font-bold text-center md:text-lg lg:text-xl xl:text-2xl mt-4"
          }
          subHeadingClassName={
            "font-bold text-lg md:text-xl xl:text-2xl mt-6 md:mt-12 mb-2"
          }
        />
      </div> */}
    </div>
  );
}
