// import from next
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-rows-4 xl:grid-cols-4 xl:gap-4">
        <div className="row-span-4 col-span-2 flex justify-center xl:justify-end place-content-center p-4">
          <div className="w-[199px] h-[204px] xl:w-[597px] xl:h-[612px] flex justify-center items-center">
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
        <h1 className="text-center xl:text-left xl:px-4 col-span-2 place-content-center text-2xl xl:text-6xl font-bold">
          ABOUT RHYTHM CODE STUDIO
        </h1>
        <div className="px-4 col-span-2 place-content-center mr-52 3xl:mr-96 text-3xl">
          <p className="my-2">
          Rhythm Code founder and lead developer, Kevin Long is attuned to the pulse of his hometown. He is immersed in the arts scene and serves small business, musicinas, creatives, and organizations in St. Louis and beyond.
          </p>
        </div>
        <div className="px-4 col-span-2 place-content-center mr-52 3xl:mr-96 text-3xl">
          <p className="my-2">
          Kevin brings the passion and imagination of an artist, along with the patient persistence of an educator to every job he touches. His diverse background in arts and education nd deep development knowledge make for a disciplined creativity like none other. Kevin and Rhythm Code Studio are dedicated to making your project sing in your own distinctive voice.
          </p>
        </div>
        
          <Link href="/contact" className="mt-6 px-4">
          <span className="p-4 tracking-wider border-2 border-white text-white rounded-full text-4xl px-4 py-1 hover:bg-white hover:text-black hover:font-bold">
            SYNC UP TODAY
            </span>
          </Link>
       
      </div>
    </section>
    // <section className="grid grid-cols-1 xl:grid-cols-2 gap-16">

    //   <div className="flex justify-center xl:justify-end ">

    //     <Image
    //       priority
    //       className=""
    //       src="/images/logos/mark-only-full.png"
    //       alt="Rhythm Code Studio"
    //       width={398}
    //       height={408}
    //     />
    //   </div>

    //   <div className="place-content-center text-2xl ">
    //     <h1 className="m-4 font-bold text-start text-4xl">ABOUT RHYTHM CODE STUDIO</h1>
    //     <p className="m-4">
    //       Rhythm Code founder and lead developer, Kevin Long is attuned to the pulse of his hometown. He is immersed in the arts scene and serves small business, musicinas, creatives, and organizations in St. Louis and beyond.
    //     </p>
    //     <p className="m-4 mb-12">
    //       Kevin brings the passion and imagination of an artist, along with the patient persistence of an educator to every job he touches. His diverse background in arts and education nd deep development knowledge make for a disciplined creativity like none other. Kevin and Rhythm Code Studio are dedicated to making your project sing in your own distinctive voice.
    //     </p>
    //     <span className="tracking-wider px-2 py-1 m-4 border border-white  border-2 text-white rounded-full text-3xl">
    //       <Link href="/contact"
    //       className="mx-2">
    //         SYNC UP TODAY
    //       </Link>
    //     </span>

    //   </div>
    // </section>
  );
}
