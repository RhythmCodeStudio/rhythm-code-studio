// import from next
import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
// import components
import Heading from "@/components/heading";
import TextBlock from "@/components/text-block";
import InternalLink from "@/components/internal-link";

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
      {/* <h1 className="mt-6 lg:mt-2 lg:mb-18 text-center text-3xl sm:text-4xl md:text-5xl font-blenny">
        Rhythm Code Studio
      </h1> */}
      {/* <Heading 
        headingLevel={1}
        text="Rhythm Code Studio"
        className="lg:mb-18 text-center text-3xl md:text-4xl lg:text-5xl font-blenny"
      /> */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-0">
        <div className="order-3 lg:order-1 row-span-4 flex justify-center lg:justify-end items-center lg:mx-10">
          <div className="w-[274px] h-auto md:w-[328px] lg:w-[356px] xl:w-[410px] flex justify-center items-center">
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
          {/* <h2 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">
            WHO'S BEHIND THE BEAT
          </h2> */}
          <Heading
            headingLevel={2}
            text="WHO'S BEHIND THE BEAT"
            className="font-bold text-2xl lg:text-3xl 2xl:text-4xl"
          />
        </div>
        <div className="order-2 lg:order-3 place-content-center max-w-lg">
          <TextBlock
            text="  Rhythm Code founder and lead developer, Kevin Long is attuned to the pulse of his hometown. He serves small businesses, musicians, creatives, and organizations in St. Louis and beyond."
            // className="p-6 lg:mr-36 lg:pl-0 lg:py-0"
            className="p-6 lg:p-0 lg:pr-6 lg:pr-6 xl:pr-0"
          />
        </div>
        <div className="order-4 place-content-center max-w-lg">
          <TextBlock
            text=" Kevin brings the passion and imagination of an artist, along with the patient persistence of an educator to every job he touches. His diverse background in arts and education and deep development knowledge make for a disciplined creativity like none other. Kevin and Rhythm Code Studio are dedicated to making your project sing in your own distinctive voice."
            // className="p-6 lg:mr-36 lg:pl-0 lg:py-0"
            className="p-6 lg:p-0 lg:pr-6 xl:pr-0"
          />
        </div>
        <div className="order-5 px-6 lg:px-0 flex justify-center lg:justify-start items-center">
          <InternalLink href="/contact" label="contact" />
        </div>
      </section>
    </div>
  );
}
