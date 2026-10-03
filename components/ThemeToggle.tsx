"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Icon } from "./icons";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "xl-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

function getStoredTheme(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "light"
    ? "light"
    : "dark";
}

function subscribeToTheme(onThemeChange: () => void) {
  window.addEventListener("storage", onThemeChange);
  window.addEventListener("xl-theme-change", onThemeChange);

  return () => {
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener("xl-theme-change", onThemeChange);
  };
}

function getServerTheme(): Theme {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getStoredTheme,
    getServerTheme,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event("xl-theme-change"));
  }

  const isLightMode = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLightMode ? "فعال کردن حالت تیره" : "فعال کردن حالت روشن"}
      title={isLightMode ? "حالت تیره" : "حالت روشن"}
      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/60 px-4 py-2.5 [font-size:var(--font-body)] tracking-editorial text-text-primary backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary hover:text-text-primary"
    >
      <Icon name={isLightMode ? "moon" : "sun"} size={15} />
      <span>{isLightMode ? "حالت تیره" : "حالت روشن"}</span>
    </button>
  );
}
