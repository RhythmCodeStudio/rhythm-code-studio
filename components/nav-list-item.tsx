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
    <li className="font-semibold tracking-wider">
      {label === "Contact" ? (
        isActive ? (
          <span
            className=" border border-2 rounded-full py-1 px-6"
            aria-current="page">
            <span>{label}</span>
          </span>
        ) : (
          <Link
            href="/contact"
            className=" hover:scale-105 transform-gpu will-change-transform transition-all duration-300 ease-in-out">
            <span className=" tracking-wider border-2 rounded-full px-6 py-1 hover:bg-white shadow-md shadow-black transition-all duration-700 ease-in-out"
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
          <Link href={href}>
            <span
              className="inline-block lg:hover:text-white transition-colors duration-500 ease-in-out hover:text-shadow-black-background-black"
              onClick={onClick}>
              {label}
            </span>
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
