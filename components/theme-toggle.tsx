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
  const logoInvert = themes[theme].logoInvert;
  const color = themes[theme].color;

  const prevTheme = () =>
    setTheme(
      themeKeys[(currentIndex - 1 + themeKeys.length) % themeKeys.length]
    );
  const nextTheme = () =>
    setTheme(themeKeys[(currentIndex + 1) % themeKeys.length]);

  return (
    <div
      className="grid grid-cols-3 items-center gap-2"
      id="theme-toggle"
      title="Select Theme">
      <button
        className="flex justify-end mr-2"
        onClick={prevTheme}>
        <Image
          src="/images/design-elements/left-arrow.png"
          alt="left arrow"
          width={96}
          height={175}
          className={`w-8 md:w-10 lg:w-12 h-auto ${logoInvert}`}
        />
      </button>
       <div className="flex justify-center text-center items-center min-w-[8ch]">
        <h3 className={`font-bold text-xl xl:text-2xl text-${color}`}>
          {theme.toUpperCase()}
        </h3>
      </div>
      <button
        className="flex justify-start ml-2"
        onClick={nextTheme}>
        <Image
          src="/images/design-elements/right-arrow.png"
          alt="right arrow"
          width={96}
          height={175}
          className={`w-8 md:w-10 lg:w-12 h-auto ${logoInvert}`}
        />
      </button>
    </div>
  );
}
