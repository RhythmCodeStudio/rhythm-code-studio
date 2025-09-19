"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
// import clsx
// import clsx from "clsx";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
// import Nav from "./nav";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="m-4 mb-12 lg:mb-6 lg:m-6 p-2 lg:p-6 ">
      <div className="flex justify-between items-center">
        <div className="w-full max-w-40 md:max-w-48 lg:max-w-50 2xl:max-w-64">
          {isHome ? (
            <Image
              className="w-full h-auto"
              src="/images/logos/horizontal-full-no-tag-256x138.png"
              width={256}
              height={138}
              alt="Rhythm Code Studio - Custom web solutions to match your beat"
              priority
              sizes="(max-width: 768px) 160px, (max-width: 1280px) 192px, (max-width: 1536px) 200px, 256px"
            />
          ) : (
            <Link href="/" className="block">
              <Image
                className="w-full h-auto"
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
        <div className="hidden lg:flex items-center">
          <DesktopNav navListItems={navListItems} />
        </div>
        <div className="flex lg:hidden items-center">
          <MobileNav navListItems={navListItems} />
        </div>
      </div>
    </header>
  );
}
