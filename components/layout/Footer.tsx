import Link from "next/link";

import { getLanguages } from "@/lib/languages/loader";
import Image from "next/image";

export default function Footer() {
  const languages = getLanguages();

  const typingLanguages = languages.filter(
    (language) => language.capabilities.typing,
  );

  const learnLanguages = languages.filter(
    (language) => language.capabilities.learn,
  );

  return (
    <footer className="relative mt-32 border-t border-(--color-border) bg-mesh overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-gradient-radial-orange opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-gradient-radial-green opacity-70" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Brand / positioning */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="TypeIndian home"
            >
              <Image
                src="/images/typeindian-logo.svg"
                alt="TypeIndian"
                width={200}
                height={60}
                className="h-15 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-md text-base leading-relaxed text-(--color-text-body)">
              Type in English. Write in your language.
              <br />A simple, fast, browser-based typing platform for Indian
              languages.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-success">Free</span>
              <span className="badge badge-gradient">No account required</span>
              <Link href="/privacy" className="badge badge-success hover:underline">Third-party processing disclosed</Link>
            </div>
          </div>

          {/* Typing */}
          <div>
            <h3 className="font-semibold text-(--color-text-heading) mb-5">
              Typing Tools
            </h3>

            <ul className="space-y-3">
              {typingLanguages.map((language) => (
                <li key={language.id}>
                  <Link
                    href={`/typing/${language.slug}`}
                    className="group inline-flex items-center gap-2 text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
                  >
                    <span>{language.nativeName}</span>
                    <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/typing"
              className="inline-block mt-5 text-sm font-medium text-(--color-primary) hover:underline"
            >
              Explore all typing tools →
            </Link>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-(--color-text-heading) mb-5">
              Learn
            </h3>

            <ul className="space-y-3">
              {learnLanguages.map((language) => (
                <li key={language.id}>
                  <Link
                    href={`/learn/${language.slug}`}
                    className="group inline-flex items-center gap-2 text-(--color-text-muted) transition-colors hover:text-(--color-secondary)"
                  >
                    <span>Learn {language.name}</span>
                    <span className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/learn"
              className="inline-block mt-5 text-sm font-medium text-(--color-secondary) hover:underline"
            >
              Explore learning guides →
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-(--color-text-heading) mb-5">
              TypeIndian
            </h3>

            <ul className="space-y-3 text-(--color-text-muted)">
              <li>
                <Link href="/" className="hover:text-(--color-text-heading)">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/typing"
                  className="hover:text-(--color-text-heading)"
                >
                  Typing Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/learn"
                  className="hover:text-(--color-text-heading)"
                >
                  Learn
                </Link>
              </li>

              <li>
                <a href="/about" className="hover:text-(--color-text-heading)">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-(--color-text-heading)"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-(--color-text-heading)">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-(--color-text-heading)"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language strip */}
        <div className="mt-16 card-gradient-orange rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <Link
                href="/"
                className="inline-block"
                aria-label="TypeIndian home"
              >
                <Image
                  src="/images/typeindian-logo.svg"
                  alt="TypeIndian"
                  width={200}
                  height={60}
                  className="h-15 w-auto"
                />
              </Link>
              <p className="text-sm font-semibold text-(--color-text-heading)">
                Indian languages, one typing platform
              </p>

              <p className="mt-1 text-sm text-(--color-text-muted)">
                Explore typing tools across 14 supported Indian languages.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {typingLanguages.map((language) => (
                <Link
                  key={language.id}
                  href={`/typing/${language.slug}`}
                  className="badge bg-white border border-(--color-border) hover:border-(--color-primary) hover:text-(--color-primary) transition-all"
                >
                  {language.nativeName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-(--color-border) flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-(--color-text-muted)">
          <p>© {new Date().getFullYear()} TypeIndian. All rights reserved.</p>

          <p className="text-center">
            Built for people who think in one language and type in another.
          </p>

          <p>
            Type in English.
            <span className="font-medium text-(--color-primary)">
              Write in your language.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
