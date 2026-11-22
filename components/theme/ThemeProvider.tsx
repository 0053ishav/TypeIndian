"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ThemePreference = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
};

const STORAGE_KEY = "typeindian-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);

  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

function getSnapshot(): string {
  const preference = getPreference();

  const systemDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const resolved =
    preference === "system"
      ? systemDark ? "dark" : "light"
      : preference;

  return `${preference}:${resolved}`;
}

function getServerSnapshot(): string {
  return "system:light";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  media.addEventListener("change", callback);
  window.addEventListener("storage", callback);

  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", callback);
    window.removeEventListener("storage", callback);
  };
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function applyTheme(theme: ThemePreference): ResolvedTheme {
  const systemDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const resolved: ResolvedTheme =
    theme === "system" ? (systemDark ? "dark" : "light") : theme;

  const root = document.documentElement;

  root.dataset.theme = resolved;
  root.dataset.themePreference = theme;
  root.style.colorScheme = resolved;

  return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const [theme, resolvedTheme] = snapshot.split(":") as [
    ThemePreference,
    ResolvedTheme,
  ];

  const setTheme = useCallback((nextTheme: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    notifyListeners();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
