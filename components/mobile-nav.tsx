"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
//import icons
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
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
    <div className="flex flex-col gap-4 items-center justify-center">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-green-500 rounded-lg"
        value={isMenuOpen ? "Close menu" : "Open menu"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        <FiMenu size={16} className="text-black" />
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
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative  border-2 border-green-500 bg-neutral-800 text-black flex flex-col justify-center rounded-lg p-6">
            {/* Dialog Title */}
            <DialogTitle as="h2" className="">
              <div
                className="flex items-center justify-center text-center text-green-500 p-4 mt-"
                onClick={toggleMenu}>
                <Link href="/">
                  <span className="text-xl">Kevin Long</span>
                  <br />
                  <span className="text-sm">Full Stack Developer</span>
                </Link>
              </div>
            </DialogTitle>
            <div className=" flex justify-center">
              <ContactIconLinks orientation="horizontal" />
            </div>
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-black bg-green-500 rounded-full cursor-pointer"
              aria-label="Close menu">
              <RiCloseFill size={20} />
            </button>

            {/* Navigation */}
            <nav className="my-10">
              <ul className="flex flex-col gap-10 font-semibold text-black items-center">
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
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}