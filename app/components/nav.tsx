"use client";
// import from react
import { useState } from "react";
//  import from next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import from headlessui
import { Dialog } from "@headlessui/react";
// import icons
import { MdDehaze } from "react-icons/md";
import { HiX } from "react-icons/hi";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: "",
  },
  {
    href: "/about",
    label: "About",
    icon: "",
  },
  {
    href: "/our_work",
    label: "Our Work",
    icon: "",
  },
  {
    href: "/blog",
    label: "Blog",
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
        <div className="fixed inset-0 bg-black" />
        <div className="fixed inset-0 z-10">
          <div className="flex justify-center items-center h-full">
            <div className="relative text-white bg:black w-full h-full flex flex-col justify-center items-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 mt-10 mr-7">
                <HiX size={28} />
              </button>
              <div className="mb-6 w-40 h-auto">
                <Image
                  src="/branding/mmm_logo_white.png"
                  width={294}
                  height={95}
                  alt="company logo"
                  priority
                />
              </div>
              {/* Nav Links */}
              <ul className="space-y-4 text-xl">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`font-bold text-center w-full p-2 ${
                      pathname === link.href ? "hidden" : ""
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
        <ul className="flex flex-row w-full space-x-10 justify-center gap-4">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`flex flex-col items-center justify-center  ${
                pathname === link.href ? "scale-125 text-gray-400" : "hover:scale-110"
              }`}>
              <Link href={link.href}>
                  <span className="text-lg lg:text-xl 3xl:text-2xl mt-2 hover:text-gray-400 hover:scale-110 hover:transform transition-transform cursor-pointer">
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