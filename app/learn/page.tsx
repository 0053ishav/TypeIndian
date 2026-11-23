import Link from "next/link";
import type { Metadata } from "next";

import { getLanguages } from "@/lib/languages/loader";
import PageSchema from "@/components/common/PageSchema";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title:
    "Learn Indian Languages: Scripts, Alphabets & Pronunciation | TypeIndian",
  description:
    "Learn Indian language typing with beginner-friendly guides covering scripts, alphabets, vowels, consonants, numerals, pronunciation, and phonetic typing.",
  alternates: {
    canonical: `${SITE_URL}/learn`,
  },
};

export default function LearnIndexPage() {
  const languages = getLanguages();

  const learningLanguages = languages.filter(
    (language) => language.capabilities.learn,
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <PageSchema
        name="Learn Indian Languages"
        description="Learn Indian language typing with beginner-friendly guides covering scripts, alphabets, vowels, consonants, numerals, pronunciation, and phonetic typing."
        path="/learn"
        type="CollectionPage"
      />
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative text-center max-w-4xl mx-auto">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-radial-orange opacity-20 blur-2xl pointer-events-none" />

        <div className="relative">
          <span className="badge badge-gradient inline-block mb-6">
            📖 TypeIndian Learning Hub
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-text-heading) leading-tight">
            Learn the script.
            <br />
            <span className="text-gradient">Then type with confidence.</span>
          </h1>

          <p className="mt-7 text-xl text-(--color-text-body) max-w-3xl mx-auto leading-relaxed">
            Beginner-friendly guides for learning Indian language scripts,
            alphabets, pronunciation, and phonetic typing using an English
            keyboard.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="badge badge-success">🔤 Alphabets</span>

            <span className="badge badge-success">🔊 Pronunciation</span>

            <span className="badge badge-success">⌨️ Typing</span>

            <span className="badge badge-success">📚 Beginner Friendly</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGE GUIDES
      ========================================================= */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-(--color-text-muted)">
              Language guides
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Choose what you want to learn
            </h2>

            <p className="mt-3 text-(--color-text-muted) max-w-2xl">
              Explore a language from its script and alphabet all the way to
              practical typing.
            </p>
          </div>

          <div className="text-sm text-(--color-text-muted)">
            {learningLanguages.length}{" "}
            {learningLanguages.length === 1 ? "guide" : "guides"} available
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {learningLanguages.map((language, index) => (
            <article
              key={language.id}
              className="
                card
                p-7
                md:p-7
                relative
                overflow-hidden
                group
                hover-lift
              "
            >
              {/* Decorative script background */}
              <div
                aria-hidden="true"
                className="script-watermark absolute -right-8 -top-8 text-[7rem] leading-none font-bold select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
              >
                {language.nativeName}
              </div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">
                      <span>{String(index + 1).padStart(2, "0")}</span>

                      <span className="h-px w-6 bg-gray-300" />

                      <span>{language.script}</span>
                    </div>

                    <h3 className="mt-3 text-3xl font-bold text-(--color-text-heading)">
                      {language.name}
                    </h3>

                    <p className="mt-1 text-3xl">{language.nativeName}</p>
                  </div>

                  <span className="badge badge-success shrink-0">Guide</span>
                </div>

                {/* Script preview */}
                <div className="mt-7 rounded-2xl border border-gray-200 bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">
                    What you&apos;ll explore
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-2xl font-bold">
                      {language.alphabet.vowels
                        .slice(0, 4)
                        .map((item) => item.letter)
                        .join(" ")}
                    </span>

                    <span className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-2xl font-bold">
                      {language.alphabet.consonants
                        .slice(0, 4)
                        .map((item) => item.letter)
                        .join(" ")}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-(--color-text-muted)">
                    {language.script} script · alphabet · pronunciation ·
                    phonetic typing
                  </p>
                </div>

                {/* Guide description */}
                {/* <p className="mt-6 text-(--color-text-body) leading-relaxed">
                  {language.learn.meta.description}
                </p> */}

                {/* Topics */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="badge badge-gradient">🔤 Alphabet</span>

                  <span className="badge badge-gradient">🗣️ Sounds</span>

                  <span className="badge badge-gradient">✍️ Script</span>

                  <span className="badge badge-gradient">⌨️ Typing</span>

                  <span className="badge badge-gradient">🔢 Numerals</span>
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/learn/${language.slug}`}
                    className="btn-primary flex-1 text-center text-lg"
                  >
                    Start Learning →
                  </Link>

                  {language.capabilities.typing && (
                    <Link
                      href={`/typing/${language.slug}`}
                      className="btn-secondary flex-1 text-center"
                    >
                      Try Typing
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          LEARNING PATH
      ========================================================= */}
      <section className="mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge badge-gradient inline-block mb-5">
            Your learning path
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            From first letter to fluent typing
          </h2>

          <p className="mt-4 text-lg text-(--color-text-muted)">
            You don&apos;t need to memorize everything at once. Learn the
            pieces, understand how they work, and practice them immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-12">
          <div className="card p-6 hover-lift">
            <div className="icon-box icon-box-orange w-14 h-14 text-2xl font-bold mb-5">
              1
            </div>

            <h3 className="font-bold text-lg mb-2">Understand the script</h3>

            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              Learn how the writing system works and how it differs from the
              language itself.
            </p>
          </div>

          <div className="card p-6 hover-lift">
            <div className="icon-box icon-box-green w-14 h-14 text-2xl font-bold mb-5">
              2
            </div>

            <h3 className="font-bold text-lg mb-2">Learn the alphabet</h3>

            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              Explore vowels, consonants, vowel signs, extensions, and other
              important characters.
            </p>
          </div>

          <div className="card p-6 hover-lift">
            <div className="icon-box icon-box-blue w-14 h-14 text-2xl font-bold mb-5">
              3
            </div>

            <h3 className="font-bold text-lg mb-2">Learn the sounds</h3>

            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              Connect native characters with their pronunciation and English
              phonetic equivalents.
            </p>
          </div>

          <div className="card p-6 hover-lift">
            <div className="icon-box icon-box-purple w-14 h-14 text-2xl font-bold mb-5">
              4
            </div>

            <h3 className="font-bold text-lg mb-2">Start typing</h3>

            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              Take what you learned directly into the TypeIndian typing tool and
              start practicing.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY LEARN?
      ========================================================= */}
      <section className="mt-28">
        <div className="card-gradient-orange rounded-3xl p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-5">Learn by doing</span>

              <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
                Don&apos;t just memorize characters.
                <br />
                <span className="text-gradient">Understand them.</span>
              </h2>

              <p className="mt-5 text-lg text-(--color-text-body) leading-relaxed">
                The goal isn&apos;t to turn you into a keyboard expert.
                It&apos;s to help you understand enough of the script that
                typing becomes natural.
              </p>

              <p className="mt-4 text-(--color-text-muted) leading-relaxed">
                Learn a character, hear its sound, recognize it on the screen,
                and then use it while typing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6">
                <div className="text-3xl mb-3">🔤</div>

                <h3 className="font-bold">Recognize</h3>

                <p className="mt-1 text-sm text-(--color-text-muted)">
                  Identify native characters
                </p>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">🔊</div>

                <h3 className="font-bold">Pronounce</h3>

                <p className="mt-1 text-sm text-(--color-text-muted)">
                  Connect letters with sounds
                </p>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">⌨️</div>

                <h3 className="font-bold">Type</h3>

                <p className="mt-1 text-sm text-(--color-text-muted)">
                  Use English phonetics
                </p>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">🚀</div>

                <h3 className="font-bold">Practice</h3>

                <p className="mt-1 text-sm text-(--color-text-muted)">
                  Build real typing confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mt-24">
        <div className="card-gradient-orange p-10 md:p-14 text-center rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            Learn a script. Then use it.
          </h2>

          <p className="mt-4 text-lg text-(--color-text-body) max-w-2xl mx-auto">
            Choose a language and start exploring its alphabet, sounds, and
            typing system.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {learningLanguages.map((language) => (
              <Link
                key={language.id}
                href={`/learn/${language.slug}`}
                className="btn-primary text-lg px-8 py-4"
              >
                Learn {language.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
