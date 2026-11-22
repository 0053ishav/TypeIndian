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
  const height = Math.max(260, topicIds.length * 66, resources.length * 44);
  const topicY = (index: number) => ((index + 1) * height) / (topicIds.length + 1);
  const resourceY = (index: number) => ((index + 1) * height) / (resources.length + 1);

  return (
    <div className="card p-4 md:p-6 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold text-(--color-text-heading)">Curriculum-to-source map</h3>
        <p className="text-xs text-(--color-text-muted)">Topic relevance, not citation links</p>
      </div>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 760 ${height}`}
          role="img"
          aria-label="Map connecting curriculum topics with relevant research and reference sources"
          className="w-full min-w-[620px]"
          style={{ height: "auto", maxHeight: 620 }}
        >
          {resources.flatMap((resource, resourceIndex) =>
            resource.topics.filter((topic) => topicIds.includes(topic)).map((topic) => {
              const topicIndex = topicIds.indexOf(topic);
              return (
                <line
                  key={`${topic}-${resource.id}`}
                  x1="250"
                  y1={topicY(topicIndex)}
                  x2="510"
                  y2={resourceY(resourceIndex)}
                  stroke="currentColor"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                />
              );
            }),
          )}
          {topicIds.map((topic, index) => (
            <g key={topic}>
              <rect x="12" y={topicY(index) - 17} width="238" height="34" rx="9" fill="var(--color-surface, #f4f4f5)" stroke="currentColor" strokeOpacity="0.18" />
              <text x="24" y={topicY(index) + 5} fontSize="12" fill="currentColor">{TOPIC_LABELS[topic]}</text>
            </g>
          ))}
          {resources.map((resource, index) => (
            <g key={resource.id}>
              <circle cx="520" cy={resourceY(index)} r="6" fill="var(--color-accent, #d97706)" />
              <text x="536" y={resourceY(index) + 4} fontSize="11" fill="currentColor">
                {resource.id} · {resource.title.length > 28 ? `${resource.title.slice(0, 28)}…` : resource.title}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="text-xs text-(--color-text-muted)">
        Lines show which curriculum topics a source can help explain. They do not represent a paper's citation network.
      </p>
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

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <article className="card p-5 space-y-3" key={resource.id}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium rounded-full px-2 py-1 bg-(--color-surface-muted) text-(--color-text-muted)">
                {TYPE_LABELS[resource.type]}
              </span>
              {resource.metadataStatus === "verify" ? (
                <span className="text-xs font-medium rounded-full px-2 py-1 bg-amber-100 text-amber-900">
                  Metadata needs review
                </span>
              ) : null}
            </div>
            <h3 className="font-semibold leading-snug text-(--color-text-heading)">{resource.title}</h3>
            <p className="text-sm text-(--color-text-muted)">
              {[resource.authors?.join(", "), resource.year, resource.publisher].filter(Boolean).join(" · ")}
            </p>
            <p className="text-sm text-(--color-text-body)">{resource.summary}</p>
            <div className="flex flex-wrap gap-2">
              {resource.topics.map((topic) => (
                <span key={topic} className="text-xs rounded-full border border-(--color-border) px-2 py-1">
                  {TOPIC_LABELS[topic] ?? topic}
                </span>
              ))}
            </div>
            <a className="inline-flex text-sm font-semibold text-(--color-link) underline underline-offset-2" href={resource.url} target="_blank" rel="noreferrer">
              Read source
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
