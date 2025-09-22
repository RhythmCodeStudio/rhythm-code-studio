"use client";
// import from react
import { useState } from "react";
// import themes and context
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
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
import Heading from "./heading";

interface MobileMenuProps {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}

export default function MobileNav({ navListItems }: MobileMenuProps) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  const logoInvert = themeObj.logoInvert;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={`text-${color}`}
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
        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <DialogPanel
            className="h-[100vh] w-[100vw] relative border-2 border-black bg-neutral-800 text-black flex flex-col justify-center p-6"
            style={{
              backgroundImage: `url(${themeObj.avif}), url(${themeObj.webp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className={`absolute top-6 right-6 text-${color}`}
              aria-label="Close menu">
              <FiXCircle size={28} />
            </button>
            {/* Dialog Title */}
            <DialogTitle
              as="h1"
              className={`text-${color} flex items-center justify-center text-center  font-blenny text-2xl`}>
              Rhythm Code Studio
            </DialogTitle>
            <Heading 
              text="CUSTOM WEB SOLUTIONS TO MATCH YOUR BEAT"
              headingLevel={2}
              className={`text-${color} text-center mb-12`}
            />
            <Link href="/">
              <div className="flex justify-center mb-12" onClick={toggleMenu}>
                <Image
                  src="/images/logos/mark-only-full-128x131.png"
                  width={128}
                  height={131}
                  alt="Rhythm Code Studio"
                  priority
                  className={`${logoInvert}`}
                />
              </div>
            </Link>
            {/* Navigation */}
            <nav>
              <ul
                className={`flex flex-col gap-12 font-semibold text-${color} items-center text-lg`}>
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
