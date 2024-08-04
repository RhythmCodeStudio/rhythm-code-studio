"use client";
// import from next
import Image from "next/image";
// import components
import ContactLinks from "./contact-links";

export const Footer = () => {
  return (
    <footer className="text-center text-sm m-4  pb-0">
      <div className="flex justify-center items-center mb-8 mt-0 md:mb-12">
        <ContactLinks />
      </div>
      <span className="m-6 p-2">© 2024 Rhythm Code Studio</span>
      <div
        className="flex justify-center">
        <Image
         src="/images/logos/mark-only-light.png"
         width={24}
         height={24}
         alt=""
        />
      </div>
    </footer>
  );
}
  
