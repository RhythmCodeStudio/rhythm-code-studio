"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { themes } from "../lib/themes";

type ThemeKey = keyof typeof themes;

const ThemeContext = createContext<{
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}>({
  theme: "funk",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>("funk");
  const [hasMounted, setHasMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored && themes[stored as ThemeKey]) {
      setThemeState(stored as ThemeKey);
    }
    setHasMounted(true);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (hasMounted) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme, hasMounted]);

  const setTheme = (t: ThemeKey) => setThemeState(t);

  if (!hasMounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
