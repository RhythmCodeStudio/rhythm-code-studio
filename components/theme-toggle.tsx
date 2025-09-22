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
      className="grid grid-cols-3 items-center"
      id="theme-toggle"
      title="Select Theme">
      <button
        className="flex flex-col justify-center items-center"
        onClick={prevTheme}>
        <Image
          src="/images/design-elements/left-arrow.png"
          alt="left arrow"
          width={96}
          height={175}
          className={`w-6 sm:w-8 md:w-12 lg:w-14 h-auto ${logoInvert}`}
        />
      </button>
      <div className="flex flex-col justify-center items-center w-18 md:w-24 lg:w-26">
        <p className={`text-xl md:text-2xl lg:text-3xl text-${color}`}>
          {theme.toUpperCase()}
        </p>
      </div>
      <button
        className="flex flex-col justify-center items-center"
        onClick={nextTheme}>
        <Image
          src="/images/design-elements/right-arrow.png"
          alt="right arrow"
          width={96}
          height={175}
          className={`w-6 sm:w-8 md:w-12 lg:w-14 h-auto ${logoInvert}`}
        />
      </button>
    </div>
  );
}
