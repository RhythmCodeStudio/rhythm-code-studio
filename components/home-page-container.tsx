"use client";
// import from next
import Image from "next/image";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import components
import ThemeToggle from "./theme-toggle";

export default function HomePageContainer() {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;
  const textColor = themeObj.textColor;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center items-center">
        <div className="w-64 sm:w-72 md:w-80 lg:w-128 h-auto flex justify-center items-center lg:-mr-8">
          <Image
            src="/images/logos/mark-only-full.png"
            width={796}
            height={816}
            alt="Rhythm Code Studio logo"
            priority
            // sizes="(max-width: 768px) 480px, (max-width: 1280px) 480px"
            className={`${logoInvert} w-full h-auto p-6 lg:p-0`}
          />
        </div>
        <div className="p-2 lg:p-0 lg:-ml-8 space-y-24 lg:space-y-0">
          <div className={`relative ${textColor}`}>
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
      </div>
  );
}