"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
import Image from "next/image";
//import icons
import { FiMenu } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
// import from headless ui
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import components
import NavListItem from "./nav-list-item";
import ContactIconLinks from "./contact-icon-links";

interface MobileMenuProps {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}

export default function MobileNav({ navListItems }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className=""
        value={isMenuOpen ? "Close menu" : "Open menu"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        <FiMenu size={28} />
      </button>

      {/* Dialog */}
      <Dialog
        open={isMenuOpen}
        as="div"
        className="relative z-50"
        onClose={toggleMenu}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel
            className="h-[100vh] w-[100vw] relative border-2 border-black bg-neutral-800 text-black flex flex-col justify-center p-6"
            style={{
              backgroundImage:
                "url(/images/backgrounds/funk.avif), url(/images/backgrounds/funk.webp), url(/images/backgrounds/funk.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-12 right-5 text-black"
              aria-label="Close menu">
              <FiXCircle  size={28} />
            </button>
            {/* <div className="absolute inset-0 bg-black/30 rounded-lg"></div> */}
            {/* Dialog Title */}
            <DialogTitle as="h2" className="">
              <div
                className="flex items-center justify-center text-center p-4 mb-8"
                onClick={toggleMenu}>
                <Link href="/">
                  <span className="font-blenny text-2xl">
                    Rhythm Code Studio
                  </span>
                  <br />
                  <span className="text-sm">
                    Custom Web Solutions To Match Your Beat
                  </span>
                  <div className="flex justify-center mt-2">
                    <Image
                      src="/images/logos/mark-only-full-128x131.png"
                      width={128}
                      height={131}
                      alt="Rhythm Code Studio"
                      priority
                    />
                  </div>
                </Link>
              </div>
            </DialogTitle>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-col gap-12 font-semibold text-black items-center text-lg">
                {navListItems.map((item) => (
                  <NavListItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    htmlElement={item.htmlElement}
                    onClick={toggleMenu}
                  />
                ))}
              </ul>
            </nav>
            <div className="flex justify-center absolute bottom-12 left-0 w-full">
              <ContactIconLinks orientation="horizontal" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}