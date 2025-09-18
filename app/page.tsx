// import from next
import { connection } from "next/server";
import Image from "next/image";

export default async function Home() {
  await connection();
  return (
    <section className="flex flex-col items-center justify-content space-y-8 mb-6">
      <div>
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
          src="/images/logos/mark-only-full.png"
          width={796}
          height={816}
          alt="Rhythm Code Studio logo"
          priority
        />
      </div>
      {/* <div className="px-8 lg:w-200 lg:text-lg xl:text-xl">
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
      </div> */}
    </section>
  );
}