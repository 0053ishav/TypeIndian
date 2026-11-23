"use client";

import { useState } from "react";
import { useTheme, type ThemePreference } from "@/components/theme/ThemeProvider";

const OPTIONS: { value: ThemePreference; label: string; description: string }[] = [
  { value: "light", label: "Light", description: "Use the light appearance" },
  { value: "dark", label: "Dark", description: "Use the dark appearance" },
  { value: "system", label: "System", description: "Follow your device setting" },
];

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="theme-toggle"
        aria-label={`Theme: ${theme}. Change appearance`}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Change appearance"
      >
        {resolvedTheme === "dark" ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
          </svg>
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            aria-label="Close appearance menu"
            onClick={() => setOpen(false)}
          />
          <div className="theme-menu" role="menu" aria-label="Appearance">
            <p className="theme-menu-heading">Appearance</p>
            {OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={theme === option.value}
                className="theme-menu-option"
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
              >
                <span>
                  <span className="theme-menu-label">{option.label}</span>
                  <span className="theme-menu-description">{option.description}</span>
                </span>
                {theme === option.value && (
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="m5 10 3.2 3.2L15 6.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
