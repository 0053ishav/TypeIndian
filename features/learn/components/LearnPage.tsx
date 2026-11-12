import Link from "next/link";
import Script from "next/script";

import FAQ from "@/components/common/FAQ";
import AlphabetGrid from "@/components/ui/AlphabetGrid";

import { generateFAQSchema } from "@/lib/seo/faqSchema";

import type { Language } from "@/types/language";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";

type Props = {
  language: Language;
};

export default function LearnPage({ language }: Props) {
  const faqSchema = generateFAQSchema(language.learn.faq);

  return (
    <main className="max-w-5xl mx-auto px-6 space-y-20">
      <Breadcrumbs
        items={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Learn",
            path: "/learn",
          },
          {
            name: `Learn ${language.name}`,
            path: `/learn/${language.slug}`,
          },
        ]}
      />

      <PageSchema
        name={`Learn ${language.name}`}
        description={language.learn.meta.description}
        path={`/learn/${language.slug}`}
      />

      <Script
        id={`${language.slug}-learn-faq`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-heading) mb-4">
          {language.learn.meta.title}
        </h1>

        <p className="text-xl text-(--color-text-body) max-w-3xl mx-auto">
          {language.learn.meta.description}
        </p>

        <div className="mt-8">
          <Link
            href={`/typing/${language.slug}`}
            className="btn-primary text-lg px-8 py-4"
          >
            {language.learn.meta.cta}
          </Link>
        </div>
      </section>

      {/* ABOUT LANGUAGE */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          {language.learn.about.title}
        </h2>

        <div className="card p-8 space-y-4">
          {language.learn.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* SCRIPT */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-heading)">
          {language.learn.script.title}
        </h2>

        <div className="card p-8 space-y-4">
          {language.learn.script.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="list-disc list-inside text-(--color-text-body)">
            {language.learn.script.bullets?.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <AlphabetGrid language={language} />

      {/* CTA */}
      <section className="text-center">
        <div className="card-gradient-orange p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-(--color-text-heading)">
            {language.learn.cta.title}
          </h2>

          <p className="text-lg mb-6">{language.learn.cta.description}</p>

          <Link
            href={`/typing/${language.slug}`}
            className="btn-primary text-lg px-10 py-4"
          >
            {language.learn.cta.button}
          </Link>
        </div>
      </section>

      <FAQ
        items={language.learn.faq}
        title={`${language.name} - Frequently Asked Questions`}
      />
    </main>
  );
}
