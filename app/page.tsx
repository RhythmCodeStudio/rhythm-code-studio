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
      <div className="px-8 lg:w-200 lg:text-lg xl:text-xl">
        <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-center text-balance">
          WE SPECIALIZE IN CREATING CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
        </h3>
        <p className="my-4">
          Rhythm Code Studio develops high-performing custom websites and web
          applications for small businesses, musicians, artists, creatives, and
          organizations in St. Louis, Missouri and beyond.
        </p>
        {/* <p className="my-4">These days it&apos;s pretty easy to make a website. That doesn&apos;t mean it is easy to do right. Platforms like WordPress, Squarespace, Wix, and others make it possibile to get a new website online pretty quickly. The thing is, those platforms are designed and developed to accomodate everyone. As a result they lock you in to certain technologies that may or may not be the best for your unique situation. These platforms are designed to be one size fits all. A website from Rhythm Code Studio is developed for you and only you.</p> 
        <p>We craft your website to have everything you need and nothing you don&apos;t, using modern web technologies that these other platforms simply can&apos;t match. A Rhythm Code website is fast, secure, fully responsive so it looks great on any screen, and fully accessible so everyone can receive the unique message you are sending out into the world.</p> */}
        <p className="my-4">
          Our work is <strong>fast, secure, fully responsive, and fully accessible.</strong> We develop web solutions with a pulse, ones that match your personal rhythm and style and look great on any device.
        </p>
        <p className="mt-4">
          <strong>AND</strong>, we manage it all for you, so you can focus on
          doing what you love and sharing it with the world.
        </p>
      </div>
      {/* <div className="flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <li>Website Development</li>
        <li>Website Design</li>
        <li>Website Repair</li>
        <li>Application Development</li>
        <li>Application Design</li>
        <li>Web Maintenance</li>
        <li>Web Hosting</li>
        <li>Analytics</li>
        <li>Domain Registration</li>
      </ul>
      </div>  */}
    </section>
  );
}

// They were not designed or developed for you and your unique situation.
