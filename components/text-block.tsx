"use client";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

export default function TextBlock({ text, fontWeight }: { text: string; fontWeight?: string }) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;
  return (
    <div className={`text-${color} ${textShadow} ${fontWeight ? ` ${fontWeight}` : ""}`}>
      {text}
    </div>
  );
}
