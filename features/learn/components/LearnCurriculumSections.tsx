import type { LearnContentSection, LearnCurriculum } from "@/types/language";

type Props = {
  curriculum?: LearnCurriculum;
  direction: "ltr" | "rtl";
};

function ContentSection({ section }: { section?: LearnContentSection }) {
  if (!section) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
        {section.title}
      </h2>
      <div className="card p-6 md:p-8 space-y-4">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.title}-paragraph-${index}`}>{paragraph}</p>
        ))}
        {section.bullets?.length ? (
          <ul className="list-disc list-inside space-y-2 text-(--color-text-body)">
            {section.bullets.map((bullet, index) => (
              <li key={`${section.title}-bullet-${index}`}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export default function LearnCurriculumSections({ curriculum, direction }: Props) {
  if (!curriculum) return null;

  const sections = [
    curriculum.history,
    curriculum.writingSystem,
    curriculum.consonantClassification,
    curriculum.vowelSigns,
    curriculum.numerals,
    curriculum.specialCharacters,
  ];

  const hasExamples = Boolean(curriculum.examples?.items.length);
  const hasTypingGuide = Boolean(curriculum.typingGuide);
  const hasMistakes = Boolean(curriculum.commonMistakes?.items.length);

  if (!sections.some(Boolean) && !hasExamples && !hasTypingGuide && !hasMistakes) {
    return null;
  }

  return (
    <div className="space-y-14">
      {sections.map((section, index) => (
        <ContentSection key={section?.title ?? `empty-${index}`} section={section} />
      ))}

      {curriculum.examples?.items.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
            {curriculum.examples.title}
          </h2>
          {curriculum.examples.introduction ? <p>{curriculum.examples.introduction}</p> : null}
          <div className="grid gap-3 sm:grid-cols-2">
            {curriculum.examples.items.map((example, index) => (
              <article className="card p-5 space-y-2" key={`${example.native}-${index}`}>
                <p className="text-2xl font-semibold" dir={direction}>{example.native}</p>
                <p className="text-sm text-(--color-text-muted)">{example.roman}</p>
                {example.meaning ? <p>{example.meaning}</p> : null}
                {example.note ? <p className="text-sm">{example.note}</p> : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {curriculum.typingGuide ? (
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
            {curriculum.typingGuide.title}
          </h2>
          <div className="card p-6 md:p-8 space-y-4">
            {curriculum.typingGuide.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 border-b">Roman input</th>
                    <th className="p-3 border-b">Output</th>
                    <th className="p-3 border-b">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.typingGuide.examples.map((example, index) => (
                    <tr key={`${example.input}-${index}`}>
                      <td className="p-3 border-b font-mono">{example.input}</td>
                      <td className="p-3 border-b text-xl" dir={direction}>{example.output}</td>
                      <td className="p-3 border-b">{example.explanation ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {curriculum.typingGuide.notes?.length ? (
              <ul className="list-disc list-inside space-y-2">
                {curriculum.typingGuide.notes.map((note, index) => <li key={index}>{note}</li>)}
              </ul>
            ) : null}
          </div>
        </section>
      ) : null}

      {curriculum.commonMistakes?.items.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
            {curriculum.commonMistakes.title}
          </h2>
          {curriculum.commonMistakes.introduction ? <p>{curriculum.commonMistakes.introduction}</p> : null}
          <div className="space-y-3">
            {curriculum.commonMistakes.items.map((mistake, index) => (
              <article className="card p-5 space-y-2" key={index}>
                <p><span className="font-semibold">Check:</span> {mistake.incorrect}</p>
                <p><span className="font-semibold">Preferred:</span> {mistake.correct}</p>
                <p className="text-sm text-(--color-text-muted)">{mistake.explanation}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
