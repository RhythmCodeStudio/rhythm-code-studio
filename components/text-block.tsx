"use client";

import type { ReactNode } from "react";
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

export default function TextBlock({
  text,
  className,
}: {
  text: ReactNode;
  className?: string;
}) {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;

  return (
    <p className={`text-${color} ${textShadow} ${className ? ` ${className}` : ""}`}>
      {text}
    </p>
  );
}
