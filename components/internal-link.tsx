"use client";
// import from next
import Link from "next/link";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import clsx
import { clsx } from "clsx";

export default function InternalLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;

  return (
    <Link
      href={href}
      className={clsx(
        `tracking-wider font-semibold text-${color} ${textShadow} transition-all duration-700 ease-in-out`
      )}>
      <span
        className={clsx(
          `border-2 rounded-full shadow-md shadow-${color} lg:hover:shadow-lg px-6 py-1 transition-colors duration-150 ease-in-out text-lg 3xl:text-2xl`,
          {
            "lg:hover:bg-white ":
              theme === "funk" || theme === "rock",
            "shadow-white":
              theme === "blues" || theme === "jazz",
          }
        )}>
        {label.toUpperCase()}
      </span>
    </Link>
  );
}
