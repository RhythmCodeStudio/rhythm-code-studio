"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
// import clsx
// import clsx from "clsx";
// import navList items
// import { navListItems } from "@/lib/nav-list-items";
// import components
import Nav from "./nav";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <header className="m-4 p-4">
      <div className="flex justify-between items-center">
        {isHome ? (
          <Image
          className="w-full h-auto max-w-40 xl:max-w-48 3xl:max-w-64 3xl:m-4"
          src="/images/logos/horizontal-full-no-tag.png"
          width={1000}
          height={54}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
        ) : (
        <Link href="/"> 
        <Image
          className="w-full h-auto max-w-40 xl:max-w-48 3xl:max-w-64 3xl:m-4"
          src="/images/logos/horizontal-full-no-tag.png"
          width={1000}
          height={54}
          alt="Rhythm Code Studio - Custom web solutions to match your beat"
          priority
        />
        </Link>
        )}
        <div className="3xl:mr-12">
        <Nav />
        </div>
      </div>
    </header>
  );
};