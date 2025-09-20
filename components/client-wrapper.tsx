"use client";
import { ThemeProvider } from "@/context/theme-context";
import Theme from "./theme";
// import ThemeToggle from "./theme-toggle";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Theme />
      {/* <ThemeToggle /> */}
      {children}
    </ThemeProvider>
  );
}
  