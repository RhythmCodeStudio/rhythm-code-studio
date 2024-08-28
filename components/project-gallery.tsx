"use client";
// import data
import { projects } from "../app/lib/project-data";
// import types
import { Project } from "../app/lib/definitions";
// import from next
import Image from "next/image";
// import components
import MobileCarousel from "./mobile-carousel";
import DesktopCarousel from "./desktop-carousel";

export default function ProjectGallery() {
  return (
    <>
      <h2 className="font-semibold tracking-tight text-center xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 3xl:text-5xl ">
        CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-">
        {projects.map((project: Project) => (
          <li
            key={project.client}
            className="shadow-2xl m-6 max-w-200 border-2 border-zinc-900 rounded-2xl">
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl mt-4 font-blenny">
                {project.client}
              </h3>
            <div className="flex items-center justify-center m-2">
              <figure className="w-full h-auto">
                <figcaption className="text-center font-bold text-xs lg:text-sm">
                  Mobile View
                </figcaption>
                <MobileCarousel slides={project.mobile_images} />
              </figure>
            </div>
            <div className="flex items-center justify-center m-2">
              <figure className="w-full h-auto px-4">
                <figcaption className="text-center font-bold text-xs lg:text-sm">
                  Desktop View
                </figcaption>
                <DesktopCarousel slides={project.desktop_image} />
              </figure>
            </div>
            <div className="mx-6 p-4 border border-zinc-900 rounded-2xl shadow-2xl">
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer">
                <h4 className="text-center font-semibold sm:text-lg md:text-xl mb-2 underline">
                  {project.url}
                </h4>
              </a>
              <p className=" md:text-lg xl:text-xl">{project.description}</p>
            </div>
            <h5 className="font-bold text-lg text-center">Features</h5>
            <div className="flex justify-center mb-4">
              <ul className="grid grid-cols-3 lg:grid-cols-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="bg-zinc-900 text-white m-1 p-2 rounded-2xl text-xs md:text-base text-center shadow-xl">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logos/mark-only-full.png"
                alt="Rhythm Code Studio Logo"
                width={75}
                height={75}
                className="m-4"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

// // import data
// import { projects } from "../app/lib/project-data";
// // import tyoes
// import { Project } from "../app/lib/definitions";
// // import from next
// import Image from "next/image";

// export default function ProjectGallery() {
//   return (
//     <>
//       <h2 className="tracking-tight text-center xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 3xl:text-5xl ">
//         CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
//       </h2>

//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-">
//         {projects.map((project: Project) => (
//           <li key={project.client} className="shadow-2xl m-6 max-w-200 border-2 border-zinc-900 rounded-2xl">
//             <a
//               href={`https://${project.url}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//             <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl mt-4 font-blenny">
//               {project.client}
//             </h3>
//             <h4 className="text-center font-bold sm:text-lg md:text-xl mb-2 underline">
//               {project.url}
//             </h4>
//             </a>
//             <div className="flex items-center justify-center m-2">
//                 <figure className="w-32 lg:w-40 xl:w-52 h-auto">
//                   <Image
//                     src={project.mobile_images[0]}
//                     alt={project.client}
//                     width={1080}
//                     height={1920}
//                     className="rounded-2xl border-4 border-zinc-900"
//                   />
//                   <figcaption className="text-center font-bold text-xs lg:text-sm">
//                     Mobile View
//                   </figcaption>
//                 </figure>
//             </div>

//             <div className="flex items-center justify-center m-2">
//               <figure className="w-96 md:w-144 lg:w-300 h-auto px-4">
//                 <Image
//                   src={project.desktop_image}
//                   alt={project.client}
//                   width={1920}
//                   height={1080}
//                   className="rounded-2xl shadow-xl border-4 border-zinc-900"
//                 />
//                 <figcaption className="text-center font-bold text-xs lg:text-sm">
//                   Desktop View
//                 </figcaption>
//               </figure>
//             </div>
//             <div className="">
//               <p className="p-4 md:text-lg xl:text-xl">{project.description}</p>
//             </div>
//             <h5 className="font-bold text-lg text-center">Features</h5>
//             <div className="flex justify-center mb-4">

//               <ul className="grid grid-cols-3 lg:grid-cols-4">
//               {project.features.map((feature) => (
//                 <li
//                   key={feature}
//                   className="bg-zinc-900 text-white m-1 p-2 rounded-2xl text-xs md:text-base text-center shadow-xl"
//                 >
//                   {feature}
//                 </li>
//               ))}
//               </ul>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
