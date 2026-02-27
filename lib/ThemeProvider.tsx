"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themes, getThemeById, DEFAULT_THEME_ID, type Theme } from "./themes";

interface ThemeContextValue {
  currentTheme: Theme;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty("--primary", theme.colors.primary);
  root.style.setProperty("--secondary", theme.colors.secondary);
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--neutral", theme.colors.neutral);
  root.style.setProperty("--text-main", theme.colors.textMain);
  root.style.setProperty("--gray", theme.colors.gray);
  root.style.setProperty("--background", theme.colors.background);
  root.setAttribute("data-theme", theme.id);
  root.setAttribute("data-theme-style", theme.style);
  document.body.style.background = theme.colors.background;
  document.body.style.color = theme.colors.textMain;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    () => getThemeById(DEFAULT_THEME_ID) || themes[0]
  );

  useEffect(() => {
    const saved = localStorage.getItem("geo-young-theme");
    if (saved) {
      const theme = getThemeById(saved);
      if (theme) {
        setCurrentTheme(theme);
        applyTheme(theme);
        return;
      }
    }
    const defaultTheme = getThemeById(DEFAULT_THEME_ID) || themes[0];
    applyTheme(defaultTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = (id: string) => {
    const theme = getThemeById(id);
    if (!theme) return;
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("geo-young-theme", id);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
