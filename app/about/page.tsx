// import from next
import Services from "@/components/services";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-1 lg:grid-rows-4 lg:grid-cols-2 ">
        <div className="order-3 lg:order-1 row-span-4 flex justify-center lg:justify-end items-center lg:mx-12">
          <div className="w-[279px] h-[286px] xl:w-[318px] xl:h-[326px] 2xl:w-[398px] 2xl:h-[408px] 3xl:w-[597px] 3xl:h-[612px] flex justify-center items-center ">
            <Image
              priority
              className=""
              src="/images/logos/mark-only-full.png"
              alt="Rhythm Code Studio"
              width={597}
              height={612}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center lg:text-start place-content-end">
          <h1 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl">
            ABOUT RHYTHM CODE STUDIO
          </h1>
        </div>
        <div className="order-2 lg:order-3 place-content-center max-w-400">
          <p className="p-6 xl:mr-36 3xl:mr-96 lg:p-0 lg:text-lg 3xl:text-xl">
            Rhythm Code founder and lead developer, Kevin Long is attuned to the
            pulse of his hometown. He is immersed in the arts scene and serves
            small business, musicians, creatives, and organizations in St. Louis
            and beyond.
          </p>
        </div>
        <div className="order-4 place-content-center max-w-400">
          <p className="p-6 xl:mr-36 3xl:mr-96 lg:p-0 lg:text-lg 3xl:text-xl">
            Kevin brings the passion and imagination of an artist, along with
            the patient persistence of an educator to every job he touches. His
            diverse background in arts and education and deep development
            knowledge make for a disciplined creativity like none other. Kevin
            and Rhythm Code Studio are dedicated to making your project sing in
            your own distinctive voice.
          </p>
        </div>
        <div className="order-5 px-6 lg:px-0 flex justify-center lg:justify-start mb-4 lg:mt-8 ">
          <Link href="/contact">
            <span className="tracking-wider border-2 border-white text-white rounded-full text-xl px-4 py-1 hover:bg-white hover:text-black hover:font-bold">
              SYNC UP TODAY
            </span>
          </Link>
        </div>
      </section>

      {/* <section className="grid grid-cols-1 lg:grid-rows-4 lg:grid-cols-2 ">
    <div className="order-3 lg:order-2 row-span-4 flex justify-center lg:justify-start items-center lg:mx-12">
      <div className="w-[279px] h-[286px] xl:w-[318px] xl:h-[326px] 2xl:w-[398px] 2xl:h-[408px] 3xl:w-[597px] 3xl:h-[612px] flex justify-center items-center ">
        <Image
          priority
          className=""
          src="/images/logos/mark-only-full.png"
          alt="Rhythm Code Studio"
          width={597}
          height={612}
        />
      </div>
    </div>
    <div className="order-1 lg:order-1 text-center lg:text-start place-content-end">
      <h1 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl xl:ml-36 3xl:ml-96">
        ABOUT RHYTHM CODE STUDIO
      </h1>
    </div>
    <div className="order-2 lg:order-3 place-content-center max-w-400">
      <p className="p-6 xl:ml-36 3xl:ml-96 lg:p-0 lg:text-lg 3xl:text-xl">
        Rhythm Code founder and lead developer, Kevin Long is attuned to the
        pulse of his hometown. He is immersed in the arts scene and serves
        small business, musicians, creatives, and organizations in St. Louis
        and beyond.
      </p>
    </div>
    <div className="order-4 lg:order-4 place-content-center max-w-400">
      <p className="p-6 xl:ml-36 3xl:ml-96 lg:p-0 lg:text-lg 3xl:text-xl">
        Kevin brings the passion and imagination of an artist, along with the
        patient persistence of an educator to every job he touches. His
        diverse background in arts and education and deep development
        knowledge make for a disciplined creativity like none other. Kevin and
        Rhythm Code Studio are dedicated to making your project sing in your
        own distinctive voice.
      </p>
    </div>
    <div className="order-5 px-6 lg:px-0 flex justify-center lg:justify-start mb-4 lg:mt-8 xl:ml-36 3xl:ml-96">
      <Link href="/contact">
        <span className="tracking-wider border-2 border-white text-white rounded-full text-xl px-4 py-1 hover:bg-white hover:text-black hover:font-bold">
          SYNC UP TODAY
        </span>
      </Link>
    </div>
  </section> */}
      <div className="flex justify-center">
        <Services
          headingLevel="h2"
          headingText="CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
          subHeadingLevel="h3"
          subHeadingText="Services Offered"
          headingClassName={"font-bold text-lg md:text-2xl xl:text-3xl mt-4"}
          subHeadingClassName={"font-bold text-lg md:text-xl xl:text-2xl mt-6 md:mt-12 mb-2"}
        />
      </div>
    </div>
  );
}
