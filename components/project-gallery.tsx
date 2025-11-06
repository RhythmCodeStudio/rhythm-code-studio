"use client";
// import context
import { useTheme } from "../context/theme-context";
// import themes
import { themes } from "../lib/themes";
// import data
import { projects } from "../lib/project-data";
// import types
import { Project } from "../lib/definitions";
// import from next
import Image from "next/image";
// import components
import MobileCarousel from "./mobile-carousel";
import DesktopCarousel from "./desktop-carousel";
import Heading from "./heading";

export default function ProjectGallery() {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;
  const logoInvert = themeObj.logoInvert;

  return (
    <section>
      <Heading
        headingLevel={2}
        text="CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
        className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold"
      />
      <ul className={`grid grid-cols-1 xl:grid-cols-2 md:p-2 xl:p-6 gap-2`}>
        {projects.map((project: Project) => (
          <li
            key={project.client}
            className={`flex flex-col shadow-xl shadow-${color} m-4 max-w-200 border-2 border-${color} rounded-2xl`}>
            <h3
              className={`text-${color} ${textShadow} text-center font-bold text-lg sm:text-xl md:text-2xl mt-4 font-blenny`}>
              {project.client}
            </h3>
            <div className="flex items-center justify-center my-4">
              <figure className={`text-${color} ${textShadow} w-full h-auto`}>
                <figcaption className="text-center font-bold text-xs lg:text-sm">
                  Mobile View
                </figcaption>
                <MobileCarousel slides={project.mobile_images} />
              </figure>
            </div>
            <div className="flex items-center justify-center my-8">
              <figure
                className={`text-${color} ${textShadow} w-full h-auto px-4`}>
                <figcaption className="text-center font-bold text-xs lg:text-sm">
                  Desktop View
                </figcaption>
                <DesktopCarousel slides={project.desktop_image} />
              </figure>
            </div>
            <div className="flex-grow mx-6 mb-6 p-4 border-2 border-zinc-900 rounded-2xl shadow-2xl description-container bg-white/50 text-black">
              <div className="flex justify-center">
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out will-change-transform">
                  <h4 className="mx-auto font-semibold sm:text-lg md:text-xl mb-2 border-b-2 border-black">
                    {project.url}
                  </h4>
                </a>
              </div>
              <p className="md:text-lg 2xl:text-xl">{project.description}</p>
            </div>
            <section className="feature-container">
              <h5
                className={`text-${color} ${textShadow} font-bold text-lg md:text-xl text-center mb-2`}>
                Features
              </h5>
              <div className="flex justify-center mb-4">
                <ul className="grid grid-cols-3 sm:grid-cols-4 px-1 gap-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="bg-zinc-900 text-white p-2 rounded-2xl text-xs xl:text-sm text-center shadow-xl">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <div className="flex justify-center">
              <Image
                src="/images/logos/mark-only-full.png"
                alt="Rhythm Code Studio Logo"
                width={75}
                height={75}
                className={`m-4 ${logoInvert}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
