"use client";
// import from next
import Image from "next/image";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import components
import Heading from "./heading";
import LogoMarkOnlyFull from "./logo-mark-only-full";
import ThemeToggle from "./theme-toggle";

export default function HomePageContainer() {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;
  const color = themeObj.color;

  return (
    <section className="flex flex-col justify-center items-center space-y-16">
      <div className="flex flex-col justify-center items-center">
        <Heading
          headingLevel={1}
          text="Rhythm Code Studio"
          className={`font-blenny text-3xl text-${color}`}
        />
        <Heading
          headingLevel={2}
          text="CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
          className={`font-bold text-${color} px-2`}
        />
      </div>
      <div className="w-42 lg:w-full">
        <LogoMarkOnlyFull logoInvert={logoInvert} />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </section>
  );
}

// <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center items-center">
//   <div className="w-52 lg:w-full">
//     <LogoMarkOnlyFull logoInvert={logoInvert} />
//   </div>

//   <div className="p-2 lg:p-0 space-y-24 lg:space-y-0">
//     <div className={`relative text-${color}`}>
//       <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-blenny mb-2">
//         Rhythm Code
//         <br className="hidden lg:block" /> Studio
//       </h1>
//       <h2 className="font-bold text-center lg:text-left ">
//         CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT
//       </h2>
//     </div>
//     <div className="flex justify-center lg:absolute lg:bottom-50 lg:ml-12">
//       <ThemeToggle />
//     </div>
//   </div>
// </div>
