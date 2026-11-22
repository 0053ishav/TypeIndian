import Link from "next/link";
import Script from "next/script";

import FAQ from "@/components/common/FAQ";
import AlphabetGrid from "@/components/ui/AlphabetGrid";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageSchema from "@/components/common/PageSchema";
import LearnCurriculumSections from "./LearnCurriculumSections";

import { generateFAQSchema } from "@/lib/seo/faqSchema";
import type { Language } from "@/types/language";

type Props = { language: Language };

export default function LearnPage({ language }: Props) {
  const faqSchema = generateFAQSchema(language.learn.faq);

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 space-y-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
          { name: `Learn ${language.name}`, path: `/learn/${language.slug}` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-heading)">
          {language.learn.meta.title}
        </h1>
        <p className="text-xl text-(--color-text-body) max-w-3xl mx-auto">
          {language.learn.meta.description}
        </p>
        <Link href={`/typing/${language.slug}`} className="btn-primary inline-flex text-lg px-8 py-4">
          {language.learn.meta.cta}
        </Link>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          {language.learn.about.title}
        </h2>
        <div className="card p-6 md:p-8 space-y-4">
          {language.learn.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          {language.learn.script.title}
        </h2>
        <div className="card p-6 md:p-8 space-y-4">
          {language.learn.script.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {language.learn.script.bullets?.length ? (
            <ul className="list-disc list-inside space-y-2 text-(--color-text-body)">
              {language.learn.script.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <AlphabetGrid language={language} />

      <LearnCurriculumSections
        curriculum={language.learn.curriculum}
        direction={language.direction}
      />

      <section className="text-center">
        <div className="card-gradient-orange p-8 md:p-10 rounded-2xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
            {language.learn.cta.title}
          </h2>
          <p className="text-lg">{language.learn.cta.description}</p>
          <Link href={`/typing/${language.slug}`} className="btn-primary inline-flex text-lg px-10 py-4">
            {language.learn.cta.button}
          </Link>
        </div>
      </section>

      <FAQ items={language.learn.faq} title={`${language.name} - Frequently Asked Questions`} />
    </main>
  );
}
