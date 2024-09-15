"use client";
// import from react
import { useState } from "react";
//  import from next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import from headlessui
import { Dialog } from "@headlessui/react"
// import icons
import { MdDehaze } from "react-icons/md";
import { HiX } from "react-icons/hi";

const navLinks = [
  // {
  //   href: "/",
  //   label: "Home",
  //   icon: "",
  // },
  {
    href: "/about",
    label: "About",
    icon: "",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: "",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "",
  },

];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const openMenu = () => setMenuOpen(true);

  return (
    <nav className="flex p-4 z-40">
      {/* Mobile Nav Menu */}
      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="fixed inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
        <div className="fixed inset-0 z-10 overflow-auto max-w-screen max-h-screen">
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full h-full flex flex-col justify-center items-center space-y-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4">
                <HiX size={28} />
              </button>
              <h1 className="font-blenny text-3xl">Rhythm Code Studio</h1>
              {/* Logo */}
              <div className=" w-36 h-auto">
                <Link href="/"
                  onClick={() => setMenuOpen(false)}
                >
                <Image
                  src="/images/logos/mark-only-full.png"
                  width={294}
                  height={95}
                  alt="Rhythm Code Studio"
                  priority
                />
                </Link>
              </div>
              {/* Nav Links */}
              <ul className="space-y-4 text-xl">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`text-center w-full p-2 ${
                      pathname === link.href ? "font-bold" : ""
                    }`}>
                    <Link href={link.href}>
                      <div
                        className="flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => setMenuOpen(false)}>
                        {link.icon}
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
      {/* Mobile Menu Button*/}
      <div className=" mt-2 -mr-2 lg:hidden">
        <button onClick={openMenu}>
          <MdDehaze
            size={28}
            className="hover:text-slate-500"
            aria-label="Open menu"
          />
        </button>
      </div>
      {/* Desktop Nav Menu */}
      <div className={`flex ${menuOpen ? "" : "hidden lg:flex"} w-full`}>
        <ul className="flex flex-row w-full space-x-10 3xl:space-x-16 justify-center gap-4 ">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`flex flex-col items-center justify-center  ${
                pathname === link.href ? "font-bold" : "hover:scale-110"
              }`}>
              <Link href={link.href}>
                  <span className="text-lg lg:text-xl xl:text-2xl 3xl:text-3xl mt-2 hover:scale-110 hover:transform transition-transform cursor-pointer">
                    {link.label}
                  </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}