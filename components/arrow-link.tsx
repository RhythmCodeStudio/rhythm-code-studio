"use client";
// import from next
import Link from "next/link";
import Image from "next/image";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

interface ArrowLinkProps {
  href: string;
  direction: string;
  className?: string;
}

export default function ArrowLink({ href, direction, className }: ArrowLinkProps) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const logoInvert = themeObj.logoInvert;

  return(
    <div className="">
        <Link href={`${href}`}>
          <Image
            src={`/images/design-elements/${direction}-arrow.png`}
            alt={`arrow ${direction}`}
            width={175}
            height={96}
            className={`${logoInvert} ${className} mx-auto mt-2 animate-pulse hover:animate-none hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}
          />
        </Link>
      </div>
  );
}