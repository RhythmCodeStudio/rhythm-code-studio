"use client";
// import from next
import Image from "next/image";
// import context
import { useTheme } from "../context/theme-context";
// import themes
import { themes } from "../lib/themes";

const themeKeys = Object.keys(themes) as (keyof typeof themes)[];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const currentIndex = themeKeys.indexOf(theme);

  const prevTheme = () => setTheme(themeKeys[(currentIndex - 1 + themeKeys.length) % themeKeys.length]);
  const nextTheme = () => setTheme(themeKeys[(currentIndex + 1) % themeKeys.length]);

  return (
    <div className="grid grid-cols-3" id="theme-toggle">
      <button className="flex flex-col justify-center items-end -mr-4" onClick={prevTheme}>
        <Image
          src="/images/design-elements/left-arrow.png"
          alt="left arrow"
          width={96}
          height={175}
          className="w-8 lg:w-18 h-auto"
        />
      </button>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl lg:text-3xl">{theme.toUpperCase()}</p>
      </div>
      <button className="flex flex-col justify-center items-start -ml-4" onClick={nextTheme}>
        <Image
          src="/images/design-elements/right-arrow.png"
          alt="right arrow"
          width={96}
          height={175}
          className="w-8 lg:w-18 h-auto"
        />
      </button>
    </div>
  );
}
