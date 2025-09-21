"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { Button } from "@headlessui/react";

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="tracking-wider font-semibold">
      {label === "Contact" ? (
        isActive ? (
          <span
            aria-current="page">
            <span className="border border-2 rounded-full py-1 px-6">{label}</span>
          </span>
        ) : (
          <Link
            href="/contact"
            className="transition-all duration-300 ease-in-out">
            <span className="text-black/60 lg:hover:text-black lg:hover:font-bold border-2 rounded-full shadow-md shadow-black px-6 py-1 hover:bg-white transition-all duration-700 ease-in-out"
            onClick={onClick}
          >
              {label}
            </span>
          </Link>
        )
      ) : htmlElement === "button" ? (
        <Button
          className="px-6 py-1 border-2 rounded-full hover:bg-white font-bold shadow-md shadow-black transition-all duration-300 ease-in-out"
          onClick={onClick}>
          <span>{label}</span>
        </Button>
      ) : htmlElement === "internalLink" ? (
        isActive ? (
          <span
            className="transition-colors duration-700 ease-in-out"
            aria-current="page">
            <span className="">{label}</span>
          </span>
        ) : (
           <Link href={href} className="flex items-center relative group">
            <span
              className={clsx(
                "text-black/60 lg:group-hover:text-black lg:group-hover:font-bold transition-colors duration-700 ease-in-out",
                // "text-shadow-white-background-black",
                // "hover:text-shadow-black-background-black"
              )}
              onClick={onClick}>
              {label}
            </span>
            <span className="absolute bottom-[-.25rem] left-0 w-0 h-[2px] bg-black transition-all ease-in-out duration-700 group-hover:w-full"></span>
          </Link>
        )
      ) : htmlElement === "externalLink" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <span>{label}</span>
        </a>
      ) : null}
    </li>
  );
}
