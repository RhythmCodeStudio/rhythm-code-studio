"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;

  return (
    <header className={`m-4 p-2 lg:p-4 lg:mb-0 h-18 lg:h-28`}>
      <div className="flex justify-between items-center">
        <div className="h-auto w-34 lg:w-36 xl:w-42 2xl:w-48 aspect-[256/138]">
          {isHome ? (
            // don't show the logo on home page
            <div className="hidden"></div>
          ) : (
            <Link href="/" className="block">
              <Image
                className={`${logoInvert} w-full h-auto`}
                src="/images/logos/horizontal-full-no-tag-256x138.png"
                width={256}
                height={138}
                alt="Rhythm Code Studio - Custom web solutions to match your beat"
                priority
                sizes="(max-width: 768px) 160px, (max-width: 1280px) 192px, (max-width: 1536px) 200px, 256px"
              />
            </Link>
          )}
        </div>
        <div className="hidden lg:flex items-center mr-2">
          <DesktopNav navListItems={navListItems} />
        </div>
        <div className="flex lg:hidden items-center">
          <MobileNav navListItems={navListItems} />
        </div>
      </div>
    </header>
  );
}