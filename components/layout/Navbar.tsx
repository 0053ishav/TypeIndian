"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLanguages } from "@/lib/languages/loader";
import Image from "next/image";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);

  const pathname = usePathname();
  const languages = getLanguages();

  const isLearn = pathname.startsWith("/learn");
  const isTyping = pathname.startsWith("/typing");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-(--color-bg-card)/95 backdrop-blur-md
        transition-all duration-300
        border-b border-(--color-border)
        ${scrolled ? "shadow-lg" : "shadow-none"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex flex-col leading-tight shrink-0"
          aria-label="TypeIndian home"
        >
          <Image
            src="/images/typeindian-logo.svg"
            alt="TypeIndian"
            width={180}
            height={40}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />

          <span className="text-[10px] text-(--color-text-muted)">
            English → Indian languages
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <NavLink href="/" active={!isLearn && !isTyping}>
            Home
          </NavLink>

          <NavLink href="/typing" active={isTyping}>
            Typing
          </NavLink>

          <NavLink href="/learn" active={isLearn}>
            Learn
          </NavLink>

          <div className="h-6 w-px bg-(--color-border) mx-3" />

          {/* Languages dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguagesOpen((open) => !open)}
              className={`
                inline-flex items-center gap-1.5
                px-3 py-2 rounded-lg
                font-medium
                transition-all duration-200 cursor-pointer
                ${
                  languagesOpen
                    ? "bg-orange-50 text-(--color-primary)"
                    : "text-(--color-text-muted) hover:text-(--color-text-heading) hover:bg-gray-50"
                }
              `}
              aria-expanded={languagesOpen}
              aria-haspopup="menu"
            >
              Languages
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  languagesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {languagesOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close language menu"
                  className="fixed inset-0 cursor-default z-40"
                  onClick={() => setLanguagesOpen(false)}
                />

                <div
                  className="
                    absolute right-0 top-full mt-3
                    z-50
                    w-80
                    rounded-2xl
                    border border-(--color-border)
                    bg-(--color-bg-card)
                    shadow-2xl
                    p-3
                    animate-scale-in
                  "
                  role="menu"
                >
                  <div className="px-3 py-2 mb-1">
                    <p className="font-semibold text-(--color-text-heading)">
                      Indian Languages
                    </p>

                    <p className="text-xs text-(--color-text-muted) mt-1">
                      Choose a language to start typing or learning.
                    </p>
                  </div>

                  <div className="max-h-80 overflow-y-auto pr-1">
                    <div className="grid grid-cols-2 gap-1">
                      {languages.map((language) => (
                        <LanguageMenuItem
                          key={language.id}
                          language={language}
                          pathname={pathname}
                          onSelect={() => setLanguagesOpen(false)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-(--color-border) grid grid-cols-2 gap-2">
                    <Link
                      href="/typing"
                      className="btn-primary text-center text-sm"
                      onClick={() => setLanguagesOpen(false)}
                    >
                      All Typing Tools
                    </Link>

                    <Link
                      href="/learn"
                      className="btn-secondary text-center text-sm"
                      onClick={() => setLanguagesOpen(false)}
                    >
                      All Guides
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/typing" className="btn-primary text-sm">
            Start Typing →
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="btn-secondary text-sm"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-(--color-border) bg-(--color-bg-card) animate-slide-up">
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-5">
              {/* Primary Navigation */}
              <div className="grid grid-cols-3 gap-2">
                <MobileNavLink
                  href="/"
                  active={!isLearn && !isTyping}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </MobileNavLink>

                <MobileNavLink
                  href="/typing"
                  active={isTyping}
                  onClick={() => setMobileOpen(false)}
                >
                  Typing
                </MobileNavLink>

                <MobileNavLink
                  href="/learn"
                  active={isLearn}
                  onClick={() => setMobileOpen(false)}
                >
                  Learn
                </MobileNavLink>
              </div>

              <div className="my-5 h-px bg-(--color-border)" />

              {/* Languages */}
              <section>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <h2 className="text-base font-bold text-(--color-text-heading)">
                      Choose a language
                    </h2>

                    <p className="text-xs text-(--color-text-muted) mt-1">
                      Type or learn in your language
                    </p>
                  </div>

                  <span className="text-xs text-(--color-text-muted)">
                    {languages.length} languages
                  </span>
                </div>

                <div className="space-y-3 pr-1">
                  {languages.map((language) => {
                    const isCurrentLanguage =
                      pathname === `/typing/${language.slug}` ||
                      pathname === `/learn/${language.slug}`;

                    return (
                      <div
                        key={language.id}
                        className={`
          overflow-hidden
          rounded-2xl
          border
          bg-(--color-bg-card)
          shadow-sm
          transition-all duration-200
          ${
            isCurrentLanguage
              ? "border-(--color-primary) ring-1 ring-orange-200"
              : "border-(--color-border) hover:border-(--color-primary)"
          }
        `}
                      >
                        {/* Language */}
                        <div className="flex items-center gap-3 px-4 py-4">
                          <div
                            dir={language.direction}
                            className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-orange-50
                    border border-orange-100
                    text-xl
                  "
                          >
                            {language.nativeName}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-(--color-text-heading)">
                              {language.name}
                            </h3>

                            <p className="text-xs text-(--color-text-muted) mt-0.5">
                              {language.script}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        {(language.capabilities.typing ||
                          language.capabilities.learn) && (
                          <div className="grid grid-cols-2 gap-px bg-(--color-border)">
                            {language.capabilities.typing ? (
                              <Link
                                href={`/typing/${language.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="
                        flex items-center justify-center gap-2
                        bg-(--color-bg-card)
                        px-4 py-3
                        text-sm font-semibold
                        text-(--color-primary)
                        transition
                        hover:bg-orange-50
                        active:bg-orange-100
                      "
                              >
                                <span>⌨</span>
                                <span>Type</span>
                                <span className="text-xs">→</span>
                              </Link>
                            ) : (
                              <div />
                            )}

                            {language.capabilities.learn ? (
                              <Link
                                href={`/learn/${language.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="
                        flex items-center justify-center gap-2
                        bg-(--color-bg-card)
                        px-4 py-3
                        text-sm font-semibold
                        text-(--color-secondary)
                        transition
                        hover:bg-green-50
                        active:bg-green-100
                      "
                              >
                                <span>📖</span>
                                <span>Learn</span>
                                <span className="text-xs">→</span>
                              </Link>
                            ) : (
                              <div />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* All Tools */}
              <div className="mt-5 pt-5 border-t border-(--color-border)">
                <Link
                  href="/typing"
                  onClick={() => setMobileOpen(false)}
                  className="
            flex items-center justify-center
            w-full
            rounded-xl
            px-4 py-3
            text-sm font-semibold
            border border-(--color-border)
            text-(--color-text-heading)
            hover:bg-gray-50
            transition
          "
                >
                  View all typing tools →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================
   Desktop Navigation Link
========================= */

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        relative px-3 py-2 rounded-lg
        font-medium
        transition-all duration-200
        ${
          active
            ? "text-(--color-primary) bg-orange-50"
            : "text-(--color-text-muted) hover:text-(--color-text-heading) hover:bg-gray-50"
        }
      `}
    >
      {children}

      {active && (
        <span
          className="
            absolute left-1/2 -bottom-1
            w-1 h-1
            -translate-x-1/2
            rounded-full
            bg-(--color-primary)
          "
        />
      )}
    </Link>
  );
}

/* =========================
   Language Menu Item
========================= */

function LanguageMenuItem({
  language,
  pathname,
  onSelect,
}: {
  language: ReturnType<typeof getLanguages>[number];
  pathname: string;
  onSelect: () => void;
}) {
  const isTyping = pathname === `/typing/${language.slug}`;
  const isLearn = pathname === `/learn/${language.slug}`;
  const isActive = isTyping || isLearn;

  return (
    <div
      className={`
        group rounded-xl p-2
        transition-all duration-200
        ${
          isActive
            ? "bg-orange-50 ring-1 ring-orange-200"
            : "hover:bg-orange-50"
        }
      `}
      role="none"
    >
      <div className="flex items-center gap-2 mb-1 px-1 min-w-0">
        <span dir={language.direction} className="text-xl shrink-0">
          {language.nativeName}
        </span>

        <span className="text-sm font-medium text-(--color-text-heading) truncate">
          {language.name}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1">
        {language.capabilities.typing && (
          <Link
            href={`/typing/${language.slug}`}
            onClick={onSelect}
            className={`
              rounded-lg px-2 py-1.5 text-xs
              ${
                isTyping
                  ? "bg-orange-100 text-(--color-primary) font-semibold"
                  : "text-(--color-text-muted) hover:bg-white hover:text-(--color-primary)"
              }
            `}
            role="menuitem"
          >
            Type
          </Link>
        )}

        {language.capabilities.learn && (
          <Link
            href={`/learn/${language.slug}`}
            onClick={onSelect}
            className={`
              rounded-lg px-2 py-1.5 text-xs
              ${
                isLearn
                  ? "bg-green-100 text-(--color-secondary) font-semibold"
                  : "text-(--color-text-muted) hover:bg-white hover:text-(--color-secondary)"
              }
            `}
            role="menuitem"
          >
            Learn
          </Link>
        )}
      </div>
    </div>
  );
}

/* =========================
   Mobile Navigation Link
========================= */

function MobileNavLink({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        rounded-xl
        px-3 py-3
        text-center
        font-medium
        transition-all duration-200
        cursor-pointer
        ${
          active
            ? "bg-orange-50 text-(--color-primary)"
            : "border border-(--color-border) text-(--color-text-muted) hover:bg-gray-50"
        }
      `}
    >
      {children}
    </Link>
  );
}
