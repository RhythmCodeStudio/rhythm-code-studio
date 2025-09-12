"use client";
// import from next
import Image from "next/image";
// import components
import ContactLinks from "./contact-links";
import ScheduleConsultation from "./schedule-consultation";

export default function Footer() {
  return (
    <footer className="text-center text-sm m-4">
      <div className="mb-12 md:mb-24">
        <ScheduleConsultation />
      </div>
      <div className="flex justify-center items-center mb-8 mt-0 md:my-12">
        <ContactLinks />
      </div>
      <span className="">© 2024 Rhythm Code Studio</span>
      <div className="flex flex-col items-center justify-center mt-2">
        <Image
          src="/images/logos/mark-only-light.png"
          width={796}
          height={816}
          alt=""
          className="h-auto max-w-8"
        />
      </div>
    </footer>
  );
};
