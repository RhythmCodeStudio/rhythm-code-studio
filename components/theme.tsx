"use client";
// import from next
import { usePathname } from "next/navigation";
// import context
import { useTheme } from "../context/theme-context";
// import themes
import { themes } from "../lib/themes";
// import CircularTexture from "./circular-texture";

export default function Theme() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme } = useTheme();
  const themeObj = themes[theme];

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen min-h-screen -z-10 bg-cover bg-center bg-black"
        style={{
          backgroundImage: isHome
            ? `url(${themeObj.webp})`
            : `
            url('/images/design-elements/circular-texture.png'),
            url(${themeObj.webp})
          `,
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-black opacity-50" />
    </>
  );
}
