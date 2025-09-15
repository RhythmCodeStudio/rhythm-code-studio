"use client";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import NavListItem from "./nav-list-item";

export default function DesktopNav({
  navItems,
}: {
  navItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}) {
  return (
    <nav className="">
      <ul className="w-full flex gap-12 md:gap-16 lg:gap-24 justify-between 2xl:text-lg ">
        {navItems.map((item) => (
          <NavListItem 
            key={item.label}
            label={item.label}
            href={item.href}
            htmlElement={item.htmlElement}
          />
        ))}
      </ul>
    </nav>
  );
}