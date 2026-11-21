import Link from "next/link";

import LanguageTagline from "@/components/LanguageTagline";
import LanguageSelector from "@/components/LanguageSelector";
import FAQ from "@/components/common/FAQ";
import { COMMON_FAQ } from "@/data/common/faq";

import {
  LightningIcon,
  DocumentIcon,
  DeviceIcon,
  CopyIcon,
  UploadIcon,
  SparkIcon,
} from "@/components/icons/FeatureIcons";

import { getLanguages } from "@/lib/languages/loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Language Typing Tool | TypeIndian",
  description:
    "Type Indian languages naturally using your English keyboard. TypeIndian provides fast, browser-based phonetic typing and transliteration tools for Indian languages.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Indian Language Typing Tool | TypeIndian",
    description:
      "Type Indian languages naturally using your English keyboard with TypeIndian's browser-based typing and transliteration tools.",
    url: "/",
    siteName: "TypeIndian",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Indian Language Typing Tool | TypeIndian",
    description:
      "Type Indian languages naturally using your English keyboard with TypeIndian.",
  },
};

const features = [
  {
    color: "orange",
    title: "Instant conversion",
    desc: "Words transform as you type. No submit button, no waiting.",
    icon: LightningIcon,
  },
  {
    color: "green",
    title: "Session board",
    desc: "Save phrases and organize your writing while you work.",
    icon: DocumentIcon,
  },
  {
    color: "blue",
    title: "Works everywhere",
    desc: "Use TypeIndian on desktop, tablet, or mobile.",
    icon: DeviceIcon,
  },
  {
    color: "purple",
    title: "Copy anywhere",
    desc: "Take your finished text to WhatsApp, documents, social media, and more.",
    icon: CopyIcon,
  },
  {
    color: "pink",
    title: "Paste & convert",
    desc: "Convert existing text without typing it all again.",
    icon: UploadIcon,
  },
  {
    color: "yellow",
    title: "Smart suggestions",
    desc: "Choose from suggestions as you type for faster, more accurate writing.",
    icon: SparkIcon,
  },
];

const steps = [
  {
    number: "01",
    title: "Type naturally",
    description:
      "Use your normal English keyboard and type words the way they sound.",
  },
  {
    number: "02",
    title: "Press space",
    description:
      "TypeIndian recognizes the word and converts it into the native script.",
  },
  {
    number: "03",
    title: "Keep writing",
    description:
      "Continue typing naturally. Your sentence builds itself in your language.",
  },
];

const useCases = [
  {
    icon: "💬",
    title: "Messages",
    description: "Chat naturally with family and friends.",
  },
  {
    icon: "🎵",
    title: "Lyrics",
    description: "Write and preserve lyrics in their original script.",
  },
  {
    icon: "📱",
    title: "Social media",
    description: "Create captions and posts in your language.",
  },
  {
    icon: "✍️",
    title: "Writing",
    description: "Write notes, stories, poetry, and more.",
  },
  {
    icon: "💼",
    title: "Work",
    description: "Create bilingual documents and communication.",
  },
  {
    icon: "📚",
    title: "Learning",
    description: "Practice writing your native language.",
  },
];

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={`mt-32 md:mt-40 ${className}`}>{children}</section>;

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-3xl mb-12 md:mb-16">
    {eyebrow && (
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-text-muted)">
        {eyebrow}
      </p>
    )}

    <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-(--color-text-heading)">
      {title}
    </h2>

    {description && (
      <p className="mt-5 text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
        {description}
      </p>
    )}
  </div>
);

export default function Home() {
  const languages = getLanguages();

  const typingLanguages = languages.filter(
    (language) => language.capabilities.typing,
  );

  /*
   * Homepage intentionally shows only a small selection.
   * The complete language catalog lives on /typing.
   */
  const featuredLanguages = typingLanguages.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-mesh">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-125 h-125 bg-gradient-radial-orange opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-gradient-radial-green opacity-50" />
      </div>

      <main className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <LanguageTagline />

            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] font-bold tracking-[-0.04em] text-(--color-text-heading)">
              Your language.
              <br />
              <span className="text-gradient">Your keyboard.</span>
            </h1>

            <div className="mt-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm text-sm text-(--color-text-muted) shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Free · No account required
              </span>
            </div>

            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed text-(--color-text-muted)">
              Type Indian languages naturally using the English keyboard you
              already know.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {featuredLanguages[0] && (
                <Link
                  href={`/typing/${featuredLanguages[0].slug}`}
                  className="btn-primary text-base md:text-lg px-9 py-4 min-w-52"
                >
                  Start typing →
                </Link>
              )}

              <Link
                href="/typing"
                className="btn-secondary text-base md:text-lg px-9 py-4 min-w-52"
              >
                Explore languages
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-(--color-text-muted)">
              <span>✓ Real-time</span>
              <span>✓ Third-party processing disclosed</span>
              <span>✓ No installation</span>
              <span>✓ Works in your browser</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            LANGUAGE SELECTOR
        ========================================================= */}

        <section>
          <div className="rounded-3xl border border-gray-200/80 bg-white/70 backdrop-blur-sm p-7 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-text-muted)">
                  Choose a language
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-heading)">
                  Start writing in your language
                </h2>
              </div>

              <Link
                href="/typing"
                className="text-sm font-semibold text-(--color-text-heading) hover:underline"
              >
                View all typing tools →
              </Link>
            </div>

            <LanguageSelector />
          </div>
        </section>

        {/* =========================================================
            LIVE DEMO
        ========================================================= */}

        <Section>
          <div className="text-center mb-12">
            <span className="badge badge-gradient">See the difference</span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-heading)">
              Type the way you speak
            </h2>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-300" />
                <span className="w-3 h-3 rounded-full bg-yellow-300" />
                <span className="w-3 h-3 rounded-full bg-green-300" />
              </div>

              <span className="text-xs font-medium text-(--color-text-muted)">
                TypeIndian
              </span>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--color-text-muted)">
                  English input
                </p>

                <div className="mt-5 text-2xl md:text-3xl font-mono text-(--color-text-heading)">
                  sat sri akaal
                  <span className="animate-pulse">|</span>
                </div>

                <p className="mt-8 text-sm text-(--color-text-muted)">
                  Type naturally. No special keyboard required.
                </p>
              </div>

              <div className="p-8 md:p-12 bg-linear-to-br from-orange-50 to-green-50">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--color-text-muted)">
                  Native script
                </p>

                <div className="mt-5 text-4xl md:text-5xl font-bold text-(--color-text-heading)">
                  ਸਤ ਸ੍ਰੀ ਅਕਾਲ
                </div>

                <p className="mt-8 text-sm text-(--color-text-muted)">
                  Press space and keep going.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================= */}

        <Section>
          <SectionHeading
            eyebrow="How it works"
            title="Nothing complicated."
            description="TypeIndian stays out of your way. You already know how to use a keyboard-we simply make it work for your language."
          />

          <div className="grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-gray-200 bg-gray-200">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white p-8 md:p-10 min-h-64 relative"
              >
                <span className="text-sm font-bold text-(--color-text-muted)">
                  {step.number}
                </span>

                <div
                  className={`mt-8 icon-box ${
                    index === 0
                      ? "icon-box-orange"
                      : index === 1
                        ? "icon-box-green"
                        : "icon-box-blue"
                  } w-12 h-12 text-lg font-bold`}
                >
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-(--color-text-heading)">
                  {step.title}
                </h3>

                <p className="mt-3 text-(--color-text-muted) leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================
            USE CASES
        ========================================================= */}

        <Section>
          <SectionHeading
            eyebrow="Built for everyday writing"
            title="Whatever you're writing, use your own language."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">
                  {useCase.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold text-(--color-text-heading)">
                  {useCase.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================
    ABOUT
========================================================= */}

        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="card-gradient-orange overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Content */}
                <div className="p-8 md:p-12 lg:p-14">
                  <div className="badge badge-gradient">Why TypeIndian</div>

                  <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-heading)">
                    Your language shouldn&apos;t require
                    <span className="text-gradient"> a new keyboard.</span>
                  </h2>

                  <div className="mt-7 space-y-5 text-lg leading-relaxed text-(--color-text-body)">
                    <p>
                      TypeIndian makes writing Indian languages as natural as
                      speaking them. Instead of learning a complicated keyboard
                      layout, simply type the words the way they sound using the
                      English keyboard you already know.
                    </p>

                    <p>
                      TypeIndian handles the transliteration and gives you the
                      native script instantly - so you can focus on what you
                      want to say, not how to type it.
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <span className="badge badge-success">No installation</span>

                    <span className="badge badge-success">No account</span>

                    <span className="badge badge-success">Browser based</span>

                    <span className="badge badge-success">Third-party disclosure</span>
                  </div>
                </div>

                {/* Visual side */}
                <div className="relative border-t lg:border-t-0 lg:border-l border-orange-200/70 bg-white/60 p-8 md:p-12 flex items-center">
                  <div className="w-full">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-text-muted)">
                      The idea
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="card p-5 hover-lift">
                        <p className="text-xs font-semibold uppercase tracking-wider text-(--color-text-muted)">
                          You type
                        </p>

                        <p className="mt-2 text-xl md:text-2xl font-mono font-semibold text-(--color-text-heading)">
                          namaste duniya
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <div className="icon-box icon-box-orange w-10 h-10 font-bold">
                          ↓
                        </div>
                      </div>

                      <div className="card-gradient-green p-5 rounded-2xl">
                        <p className="text-xs font-semibold uppercase tracking-wider text-(--color-text-muted)">
                          You get
                        </p>

                        <p className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
                          नमस्ते दुनिया
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-center text-(--color-text-muted)">
                      Same thought. Same pronunciation. Native script.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================
            FEATURES
        ========================================================= */}

        <Section>
          <SectionHeading
            eyebrow="The typing experience"
            title="Simple on the surface. Powerful underneath."
            description="Everything you need for fast, comfortable typing without unnecessary complexity."
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map(({ color, title, desc, icon: Icon }) => (
              <div key={title} className="flex gap-5">
                <div
                  className={`icon-box icon-box-${color} w-12 h-12 p-3 shrink-0`}
                >
                  <Icon />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-(--color-text-heading)">
                    {title}
                  </h3>

                  <p className="mt-2 text-(--color-text-muted) leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================
            TRANSLITERATION
        ========================================================= */}

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-text-muted)">
                One important distinction
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-heading)">
                Transliteration ≠ translation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-green-200 bg-green-50/60 p-7">
                <div className="flex items-center gap-3">
                  <div className="icon-box icon-box-green w-11 h-11">✓</div>

                  <h3 className="text-xl font-bold">Transliteration</h3>
                </div>

                <p className="mt-5 text-(--color-text-body) leading-relaxed">
                  Changes the writing system while preserving the word and its
                  pronunciation.
                </p>

                <div className="mt-6 rounded-xl bg-white border border-green-100 p-5">
                  <p className="font-mono">namaste</p>
                  <p className="mt-2 text-3xl font-bold">नमस्ते</p>
                  <p className="mt-2 text-xs text-(--color-text-muted)">
                    Same word · different script
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="flex items-center gap-3">
                  <div className="icon-box w-11 h-11 bg-gray-100 text-gray-500">
                    ×
                  </div>

                  <h3 className="text-xl font-bold">Translation</h3>
                </div>

                <p className="mt-5 text-(--color-text-body) leading-relaxed">
                  Changes the language and therefore changes the words and their
                  meaning.
                </p>

                <div className="mt-6 rounded-xl bg-gray-50 border border-gray-100 p-5">
                  <p className="font-mono">hello</p>
                  <p className="mt-2 text-3xl font-bold">नमस्ते</p>
                  <p className="mt-2 text-xs text-(--color-text-muted)">
                    Different word · translated meaning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================
            FAQ
        ========================================================= */}

        <Section>
          <div className="max-w-4xl mx-auto">
            <FAQ items={COMMON_FAQ} />
          </div>
        </Section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="mt-32 md:mt-40 pb-24 md:pb-32">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-orange-500 via-orange-400 to-green-500 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Start writing
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Your language is already in you.
                <br />
                Your keyboard should catch up.
              </h2>

              <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
                Choose a language and start typing naturally in seconds.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/typing"
                  className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Explore typing tools →
                </Link>

                <Link
                  href="/learn"
                  className="px-8 py-4 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Learn how it works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
