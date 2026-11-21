import Link from "next/link";
import type { Metadata } from "next";

import ScriptPreview from "@/components/ui/ScriptPreview";
import { getLanguages } from "@/lib/languages/loader";
import PageSchema from "@/components/common/PageSchema";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Indian Language Typing Tools | TypeIndian",
  description:
    "Free online typing tools for Indian languages. Type naturally in English and instantly write in Hindi, Panjabi, and more native scripts.",
  alternates: {
    canonical: `${SITE_URL}/typing`,
  },
};

export default function TypingIndexPage() {
  const languages = getLanguages();

  const typingLanguages = languages.filter(
    (language) => language.capabilities.typing,
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <PageSchema
        name="Indian Language Typing Tools"
        description="Free online typing tools for Indian languages. Type naturally in English and instantly write in Hindi, Panjabi, and more native scripts."
        path="/typing"
        type="CollectionPage"
      />
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative text-center max-w-4xl mx-auto">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-radial-orange opacity-20 blur-2xl pointer-events-none" />

        <div className="relative">
          <span className="badge badge-gradient inline-block mb-6">
            ⌨️ TypeIndian Typing Tools
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-text-heading) leading-tight">
            Type in English.
            <br />
            <span className="text-gradient">Write in your language.</span>
          </h1>

          <p className="mt-7 text-xl text-(--color-text-body) max-w-3xl mx-auto leading-relaxed">
            Choose a language, type naturally using your English keyboard, and
            instantly write in its native script.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="badge badge-success">⚡ Real-time</span>

            <span className="badge badge-success">🌐 Browser-based typing</span>

            <span className="badge badge-success">🔒 No account required</span>

            <span className="badge badge-success">✨ Free</span>

            <Link href="/privacy" className="badge badge-success hover:underline">Third-party processing disclosed</Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCRIPT GALLERY
      ========================================================= */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-(--color-text-muted)">
              Explore the scripts
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
              Choose your language
            </h2>

            <p className="mt-3 text-(--color-text-muted) max-w-2xl">
              Each language has its own script, alphabet, pronunciation, and
              typing experience.
            </p>
          </div>

          <div className="text-sm text-(--color-text-muted)">
            {typingLanguages.length}{" "}
            {typingLanguages.length === 1 ? "language" : "languages"} available
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {typingLanguages.map((language, index) => (
            <article
              key={language.id}
              className="
                card
                p-6
                md:p-7
                group
                relative
                overflow-hidden
                hover-lift
              "
            >
              {/* Decorative script background */}
              <div className="absolute -right-8 -top-8 text-[7rem] leading-none font-bold opacity-[0.035] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
                {language.nativeName}
              </div>
              <div className="relative">
                {/* Card heading */}
                <div className="flex items-start justify-between gap-5 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-(--color-text-muted)">
                      <span>{String(index + 1).padStart(2, "0")}</span>

                      <span className="h-px w-6 bg-gray-300" />

                      <span>{language.script}</span>
                    </div>

                    <h3 className="mt-3 text-3xl font-bold text-(--color-text-heading)">
                      {language.name}
                    </h3>

                    <p className="mt-1 text-2xl">{language.nativeName}</p>
                  </div>

                  <span className="badge badge-success shrink-0">Ready</span>
                </div>

                {/* Animated script */}
                <ScriptPreview
                  letters={language.alphabet.consonants}
                  nativeName={language.nativeName}
                  script={language.script}
                />

                {/* Product description */}
                {/* <div className="mt-6">
                  <p className="text-(--color-text-muted) leading-relaxed">
                    Type {language.name} naturally using English letters and
                    convert your input into {language.nativeName} in real
                    time.
                  </p>
                </div> */}

                {/* Capabilities */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="badge badge-gradient">⌨️ Typing</span>

                  <span className="badge badge-gradient">⚡ Real-time</span>

                  <span className="badge badge-gradient">
                    {language.script}
                  </span>

                  {language.capabilities.learn && (
                    <span className="badge badge-gradient">📖 Learn</span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/typing/${language.slug}`}
                    className="btn-primary flex-1 text-center text-lg"
                  >
                    Start Typing →
                  </Link>

                  {language.capabilities.learn && (
                    <Link
                      href={`/learn/${language.slug}`}
                      className="btn-secondary flex-1 text-center"
                    >
                      Learn {language.name}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge badge-gradient inline-block mb-5">
            Simple by design
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            You already know how to type.
          </h2>

          <p className="mt-4 text-lg text-(--color-text-muted)">
            There is no new keyboard to memorize. Type the way your language
            sounds and TypeIndian handles the script.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card p-8 hover-lift">
            <div className="icon-box icon-box-orange w-14 h-14 text-2xl font-bold mb-6">
              1
            </div>

            <h3 className="text-xl font-bold mb-3">Think in your language</h3>

            <p className="text-(--color-text-muted) leading-relaxed">
              Think about what you want to say exactly as you normally would.
            </p>
          </div>

          <div className="card p-8 hover-lift">
            <div className="icon-box icon-box-green w-14 h-14 text-2xl font-bold mb-6">
              2
            </div>

            <h3 className="text-xl font-bold mb-3">Type phonetically</h3>

            <p className="text-(--color-text-muted) leading-relaxed">
              Use your regular English keyboard and type the pronunciation.
            </p>
          </div>

          <div className="card p-8 hover-lift">
            <div className="icon-box icon-box-blue w-14 h-14 text-2xl font-bold mb-6">
              3
            </div>

            <h3 className="text-xl font-bold mb-3">Get native script</h3>

            <p className="text-(--color-text-muted) leading-relaxed">
              Suggestions help you select the correct native-script word as you
              type.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================= */}
      <section className="mt-28">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-(--color-text-muted)">
            Built for real life
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            Type anything. Anywhere.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card card-gradient-orange p-7">
            <div className="text-3xl mb-4">💬</div>

            <h3 className="font-bold text-lg mb-2">Messages</h3>

            <p className="text-sm text-(--color-text-muted)">
              Write WhatsApp messages, family conversations, and personal notes
              in your native script.
            </p>
          </div>

          <div className="card card-gradient-green p-7">
            <div className="text-3xl mb-4">📱</div>

            <h3 className="font-bold text-lg mb-2">Social Media</h3>

            <p className="text-sm text-(--color-text-muted)">
              Create captions, posts, comments, and status updates without
              switching keyboards.
            </p>
          </div>

          <div className="card card-gradient-blue p-7">
            <div className="text-3xl mb-4">🎵</div>

            <h3 className="font-bold text-lg mb-2">Lyrics & Poetry</h3>

            <p className="text-sm text-(--color-text-muted)">
              Write lyrics, poems, quotes, and creative work using the script
              your language deserves.
            </p>
          </div>

          <div className="card p-7">
            <div className="text-3xl mb-4">💼</div>

            <h3 className="font-bold text-lg mb-2">Work</h3>

            <p className="text-sm text-(--color-text-muted)">
              Prepare bilingual documents, emails, presentations, and notes.
            </p>
          </div>

          <div className="card p-7">
            <div className="text-3xl mb-4">📚</div>

            <h3 className="font-bold text-lg mb-2">Learning</h3>

            <p className="text-sm text-(--color-text-muted)">
              Practice alphabets, sounds, and native scripts while learning how
              the typing system works.
            </p>
          </div>

          <div className="card p-7">
            <div className="text-3xl mb-4">🌏</div>

            <h3 className="font-bold text-lg mb-2">Your Language</h3>

            <p className="text-sm text-(--color-text-muted)">
              Type naturally in the language you grew up speaking, even if you
              never learned its keyboard layout.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING CTA
      ========================================================= */}
      <section className="mt-28">
        <div className="card-gradient-orange rounded-3xl p-10 md:p-14 text-center">
          <span className="badge badge-primary mb-5">📖 Learn the script</span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
            Want to understand what you&apos;re typing?
          </h2>

          <p className="mt-4 text-lg text-(--color-text-body) max-w-2xl mx-auto">
            Explore the alphabet, vowels, consonants, numerals, pronunciation,
            and phonetic typing rules for your language.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {typingLanguages
              .filter((language) => language.capabilities.learn)
              .map((language) => (
                <Link
                  key={language.id}
                  href={`/learn/${language.slug}`}
                  className="btn-secondary"
                >
                  Learn {language.name} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-heading)">
          Pick a script. Start typing.
        </h2>

        <p className="mt-4 text-lg text-(--color-text-muted)">
          No installation. No keyboard layouts. Just type.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {typingLanguages.map((language) => (
            <Link
              key={language.id}
              href={`/typing/${language.slug}`}
              className="btn-primary text-lg px-8 py-4"
            >
              {language.name} Typing →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
