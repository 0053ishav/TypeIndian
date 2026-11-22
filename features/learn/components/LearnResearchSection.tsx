import type { LearnResource } from "@/types/language";

type Props = { resources: LearnResource[] };

const TOPIC_LABELS: Record<string, string> = {
  history: "Language history",
  writingSystem: "Writing system",
  consonantClassification: "Consonants and sounds",
  vowelSigns: "Vowel signs",
  numerals: "Numerals",
  specialCharacters: "Special marks",
  typingGuide: "Typing and transliteration",
  commonMistakes: "Common learner mistakes",
};

const TYPE_LABELS: Record<LearnResource["type"], string> = {
  paper: "Research paper",
  article: "Academic article",
  standard: "Technical standard",
  "institutional-reference": "Institutional reference",
  "book-chapter": "Book chapter",
};

function CurriculumResearchMap({ resources }: Props) {
  const topicIds = Object.keys(TOPIC_LABELS).filter((topic) =>
    resources.some((resource) => resource.topics.includes(topic)),
  );

  return (
    <div className="card p-5 md:p-7 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-(--color-text-heading)">Curriculum-to-source map</h3>
          <p className="text-sm text-(--color-text-muted)">
            Each circle represents a source connected to that topic.
          </p>
        </div>
        <p className="text-xs text-(--color-text-muted)">Hover or focus a circle to preview</p>
      </div>

      <div className="space-y-1">
        {topicIds.map((topic) => {
          const related = resources.filter((resource) => resource.topics.includes(topic));

          return (
            <div
              key={topic}
              className="grid grid-cols-[minmax(118px,180px)_1fr] items-center gap-3 border-b border-(--color-border) py-4 last:border-b-0"
            >
              <h4 className="text-sm font-medium leading-snug text-(--color-text-body)">
                {TOPIC_LABELS[topic]}
              </h4>

              <div className="relative flex min-h-12 flex-wrap items-center gap-x-3 gap-y-3">
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-1/2 border-t border-dashed border-(--color-border)"
                />
                {related.map((resource) => {
                  const index = resources.findIndex((item) => item.id === resource.id) + 1;
                  const number = String(index).padStart(2, "0");

                  return (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${resource.title}`}
                      className="group relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--color-border) bg-(--color-background) text-xs font-semibold tabular-nums text-(--color-text-body) shadow-sm transition duration-150 hover:scale-110 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
                    >
                      {number}

                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-(--color-border) bg-(--color-background) p-4 text-left text-(--color-text-body) opacity-0 shadow-xl transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                      >
                        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-(--color-text-muted)">
                          {TYPE_LABELS[resource.type]} · {number}
                        </span>
                        <span className="block text-sm font-semibold leading-snug text-(--color-text-heading)">
                          {resource.title}
                        </span>
                        <span className="mt-1 block text-xs text-(--color-text-muted)">
                          {[resource.authors?.join(", "), resource.year, resource.publisher].filter(Boolean).join(" · ") || "Publication details"}
                        </span>
                        <span className="mt-2 block text-xs leading-relaxed text-(--color-text-body)">
                          {resource.summary}
                        </span>
                        <span className="mt-3 block text-xs font-semibold text-(--color-link)">
                          Open source ↗
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-(--color-border) pt-4 text-xs text-(--color-text-muted)">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-(--color-border) bg-(--color-background)" />
          Research or reference source
        </span>
        <span>Same source may appear under multiple relevant topics</span>
      </div>
    </div>
  );
}

export default function LearnResearchSection({ resources }: Props) {
  if (!resources.length) return null;

  return (
    <section className="space-y-5" aria-labelledby="learn-research-title">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-(--color-text-muted)">Further reading</p>
        <h2 id="learn-research-title" className="text-2xl md:text-3xl font-bold text-(--color-text-heading)">
          Research and references
        </h2>
        <p className="max-w-3xl text-(--color-text-body)">
          Explore the academic papers, technical standards, and institutional sources behind this language guide.
        </p>
      </div>

      <CurriculumResearchMap resources={resources} />

      <p className="text-xs text-(--color-text-muted)">
        Connections indicate editorial relevance to curriculum topics. They are not citation relationships between papers.
      </p>
    </section>
  );
}
