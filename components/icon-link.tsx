"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import clsx
import clsx from "clsx";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

export default function IconLink({
  href,
  icon: Icon,
  size,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  size: number;
}) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const isBlues = theme === "blues";
  const isJazz = theme === "jazz";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
      // title={label}
      aria-label={label}
      onClick={() => {
        track("contact icon link clicked", { name: `${label}` });
      }}>
      {/* Screen reader only text for accessibility */}
      <span
        className={clsx(
          `sr-only`,
          (isJazz || isBlues) && `text-shadow-black-background-black`,
        )}>
        {label}
      </span>
      <Icon className={`icon-link `} size={size} />
    </a>
  );
}
