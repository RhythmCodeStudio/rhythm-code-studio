"use client";
// import context
import { useTheme } from "../context/theme-context";
// import themes
import { themes } from "../lib/themes";

export default function Theme() {
  const { theme } = useTheme();
  const themeObj = themes[theme];

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen min-h-screen -z-10 bg-cover bg-center bg-black"
         style={{
          backgroundImage: `url(${themeObj.avif}), url(${themeObj.webp})`,
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-black opacity-50" />
    </>
  );
}
