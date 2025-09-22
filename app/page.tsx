// import from next
import { connection } from "next/server";
// import components
import HomePageContainer from "../components/home-page-container";
import LogoMarkOnlyFull from "@/components/logo-mark-only-full";

export default async function Home() {
  await connection();
  return (
    <section className="flex flex-col">
      <HomePageContainer />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center items-center">
        <div className="w-64 sm:w-72 md:w-80 lg:w-128 h-auto flex justify-center items-center lg:-mr-8">
          <Image
            className="w-full h-auto p-6 lg:p-0"
            src="/images/logos/mark-only-full.png"
            width={796}
            height={816}
            alt="Rhythm Code Studio logo"
            priority
            // sizes="(max-width: 768px) 480px, (max-width: 1280px) 480px"
          />
        </div>
        <div className="p-2 lg:p-0 lg:-ml-8 space-y-24 lg:space-y-0">
          <div className="relative">
            <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-blenny pb-2 px-2">
              Rhythm Code
              <br className="hidden lg:block" /> Studio
            </h1>
            <h2 className="font-bold text-center lg:text-left lg:text-xl">
              CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
            </h2>
          </div>
            <div className="flex justify-center lg:absolute lg:bottom-80 lg:ml-12">
              <ThemeToggle />
            </div>
        </div>
      </div> */}
    </section>
  );
}

{
  /* <div>
        <h1 className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-blenny pb-2">
          Rhythm Code Studio
        </h1>
        <h2 className="tracking-tight text-center xs:text-lg md:text-2xl lg:text-3xl 3xl:text-5xl ">
          CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center w-40 h-40 xl:w-48 xl:h-48 3xl:w-64 3xl:h-64 3xl:m-4">
        <Image
          className="w-full h-auto max-w-40 xl:max-w-48 3xl:max-w-64 3xl:m-4"
          src="/images/logos/mark-only-full-200x205.png"
          width={200}
          height={205}
          alt="Rhythm Code Studio logo"
          priority
          sizes="(max-width: 768px) 160px, (max-width: 1280px) 192px"
        />
      </div>
      <div className="px-8 lg:w-200 lg:text-lg xl:text-xl">
        <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-center text-balance">
          WE SPECIALIZE IN CREATING CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
        </h3>
        <p className="my-4">
          Rhythm Code Studio develops high-performing custom websites and web
          applications for small businesses, musicians, artists, creatives, and
          organizations in St. Louis, Missouri and beyond.
        </p>
        <p className="my-4">
          Our work is <strong>fast, secure, fully responsive, and fully accessible.</strong> We develop web solutions with a pulse, ones that match your personal rhythm and style and look great on any device.
        </p>
        <p className="mt-4">
          <strong>AND</strong>, we manage it all for you, so you can focus on
          doing what you love and sharing it with the world.
        </p>
      </div> */
}
