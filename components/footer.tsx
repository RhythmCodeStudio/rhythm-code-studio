"use client";
// import from next
import Image from "next/image";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import components
import ContactIconLinks from "./contact-icon-links";
import ScheduleConsultation from "./schedule-consultation";

export default function Footer() {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;

  return (
    <footer className={`h-32 lg:h-36 flex flex-col justify-end items-center text-center text-sm mb-1 text-${color} ${textShadow}`}>
      {/* <div className="my-6 lg:my-0">
        <ScheduleConsultation />
      </div> */}
      {/* <div className="flex justify-center items-center m-8">
        <ContactIconLinks
          orientation="horizontal"
          include={["GitHub", "LinkedIn", "Email", "Phone"]}
          size={32}
        />
      </div> */}

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logos/mark-only-light-200x205.png"
          width={32}
          height={33}
          alt=""
          className={`${logoInvert} w-8 h-auto`}
          // sizes="32px"
        />
      </div>
      <span className="mt-2">© 2025 Rhythm Code Studio</span>
    </footer>
  );
}
