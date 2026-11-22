 "use client";

import { useMemo, useState } from "react";
import type { LearnResource } from "@/types/language";

type Props = { resources: LearnResource[] };
type GroupBy = "topic" | "type" | "year";

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
  paper: "Research papers",
  article: "Academic articles",
  standard: "Technical standards",
  "institutional-reference": "Institutional references",
  "book-chapter": "Book chapters",
};

const TYPE_SHORT_LABELS: Record<LearnResource["type"], string> = {
  paper: "Paper",
  article: "Article",
  standard: "Standard",
  "institutional-reference": "Institution",
  "book-chapter": "Book chapter",
};

type GraphNode = {
  key: string;
  resource: LearnResource;
  x: number;
  y: number;
  group: string;
  linkedTopics: string[];
};

function getYearGroup(year?: number) {
  if (!year) return "Year not listed";
  const decade = Math.floor(year / 10) * 10;
  return `${decade}s`;
}

function CurriculumResearchMap({ resources }: Props) {
  const [groupBy, setGroupBy] = useState<GroupBy>("topic");
  const [query, setQuery] = useState("");
  const filteredResources = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return resources;
    return resources.filter((resource) =>
      [
        resource.title,
        resource.publisher,
        resource.authors?.join(" "),
        resource.summary,
        resource.year?.toString(),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [resources, query]);

  const topicIds = useMemo(
    () =>
      Object.keys(TOPIC_LABELS).filter((topic) =>
        filteredResources.some((resource) => resource.topics.includes(topic)),
      ),
    [filteredResources],
  );

  const groups = useMemo(() => {
    const grouped = new Map<string, LearnResource[]>();
    filteredResources.forEach((resource) => {
      const keys =
        groupBy === "topic"
          ? resource.topics.filter((topic) => TOPIC_LABELS[topic])
          : groupBy === "type"
            ? [resource.type]
            : [getYearGroup(resource.year)];
      (keys.length ? keys : ["Other"]).forEach((key) => {
        const items = grouped.get(key) ?? [];
        items.push(resource);
        grouped.set(key, items);
      });
    });

    return [...grouped.entries()].sort(([a], [b]) => {
      if (groupBy === "year") {
        if (a === "Year not listed") return 1;
        if (b === "Year not listed") return -1;
        return Number.parseInt(b, 10) - Number.parseInt(a, 10);
      }
      if (groupBy === "type") return (TYPE_LABELS[a as LearnResource["type"]] ?? a).localeCompare(TYPE_LABELS[b as LearnResource["type"]] ?? b);
      return (TOPIC_LABELS[a] ?? a).localeCompare(TOPIC_LABELS[b] ?? b);
    });
  }, [filteredResources, groupBy]);

  const layout = useMemo(() => {
    const left = 190;
    const firstGroupX = 430;
    const groupGap = 250;
    const rowGap = 94;
    const top = 94;
    const maxRows = Math.max(1, ...groups.map(([, items]) => items.length));
    const height = Math.max(360, top + maxRows * rowGap + 70);
    const width = Math.max(900, firstGroupX + Math.max(0, groups.length - 1) * groupGap + 190);
    const topicPositions = new Map<string, number>();
    topicIds.forEach((topic, index) => {
      topicPositions.set(
        topic,
        topicIds.length === 1 ? height / 2 : 82 + (index * (height - 164)) / (topicIds.length - 1),
      );
    });

    const nodes: GraphNode[] = [];
    groups.forEach(([group, items], groupIndex) => {
      items.forEach((resource, itemIndex) => {
        const linkedTopics =
          groupBy === "topic"
            ? [group]
            : resource.topics.filter((topic) => topicPositions.has(topic));
        nodes.push({
          key: groupBy === "topic" ? `${group}:${resource.id}` : resource.id,
          resource,
          x: firstGroupX + groupIndex * groupGap,
          y: top + itemIndex * rowGap,
          group,
          linkedTopics,
        });
      });
    });

    return { left, height, width, topicPositions, nodes };
  }, [groups, groupBy, topicIds]);

  const groupLabel = (key: string) => {
    if (groupBy === "topic") return TOPIC_LABELS[key] ?? key;
    if (groupBy === "type") return TYPE_LABELS[key as LearnResource["type"]] ?? key;
    return key;
  };

  return (
    <div className="card space-y-5 p-4 md:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-(--color-text-heading)">Research map</h3>
          <p className="max-w-2xl text-sm text-(--color-text-muted)">
            Explore how the learning topics connect to papers, standards, and references.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="space-y-1 text-xs font-medium text-(--color-text-muted)">
            <span>Group by</span>
            <select
              value={groupBy}
              onChange={(event) => setGroupBy(event.target.value as GroupBy)}
              className="block min-w-44 rounded-lg border border-(--color-border) bg-(--color-background) px-3 py-2 text-sm text-(--color-text-body) outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            >
              <option value="topic">Curriculum topic</option>
              <option value="type">Source type</option>
              <option value="year">Publication decade</option>
            </select>
          </label>
          <label className="space-y-1 text-xs font-medium text-(--color-text-muted)">
            <span>Find a source</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, author, year…"
              className="block w-full min-w-52 rounded-lg border border-(--color-border) bg-(--color-background) px-3 py-2 text-sm text-(--color-text-body) outline-none placeholder:text-(--color-text-muted) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-(--color-text-muted)">
        <span>{filteredResources.length} sources</span>
        <span>{groups.length} groups</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-(--color-accent) bg-(--color-background)" />
          Curriculum topic
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-(--color-accent)" />
          Research source
        </span>
        <span>Hover or focus a source node for details</span>
      </div>

      {filteredResources.length ? (
        <div className="overflow-x-auto rounded-xl border border-(--color-border) bg-(--color-background)">
          <div
            className="relative"
            style={{ width: layout.width, height: layout.height }}
            aria-label="Interactive network map of curriculum topics and research sources"
          >
            <svg
              aria-hidden="true"
              className="absolute inset-0"
              width={layout.width}
              height={layout.height}
              viewBox={`0 0 ${layout.width} ${layout.height}`}
              fill="none"
            >
              {layout.nodes.flatMap((node) =>
                node.linkedTopics.map((topic) => {
                  const topicY = layout.topicPositions.get(topic);
                  if (topicY === undefined) return null;
                  const startX = layout.left + 17;
                  const endX = node.x - 17;
                  const control = (startX + endX) / 2;
                  return (
                    <path
                      key={`${node.key}-${topic}`}
                      d={`M ${startX} ${topicY} C ${control} ${topicY}, ${control} ${node.y}, ${endX} ${node.y}`}
                      stroke="var(--color-border)"
                      strokeWidth="1.5"
                      opacity="0.85"
                    />
                  );
                }),
              )}
            </svg>

            {topicIds.map((topic) => {
              const y = layout.topicPositions.get(topic) ?? 0;
              return (
                <div
                  key={topic}
                  className="absolute flex -translate-y-1/2 items-center gap-3"
                  style={{ left: 22, top: y, width: 155 }}
                >
                  <span className="h-8 w-8 shrink-0 rounded-full border-2 border-(--color-accent) bg-(--color-background) shadow-sm" />
                  <span className="text-xs font-semibold leading-snug text-(--color-text-body)">
                    {TOPIC_LABELS[topic]}
                  </span>
                </div>
              );
            })}

            {groups.map(([group], groupIndex) => (
              <div
                key={group}
                className="absolute top-5 -translate-x-1/2 text-center text-xs font-semibold text-(--color-text-muted)"
                style={{ left: 430 + groupIndex * 250, width: 210 }}
              >
                {groupLabel(group)}
              </div>
            ))}

            {layout.nodes.map((node) => {
              const number = String(resources.findIndex((item) => item.id === node.resource.id) + 1).padStart(2, "0");
              return (
                <a
                  key={node.key}
                  href={node.resource.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${node.resource.title}`}
                  className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-accent) text-xs font-semibold tabular-nums text-white shadow-md transition duration-150 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-4"
                  style={{ left: node.x, top: node.y, width: 38, height: 38 }}
                >
                  {number}
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-72 -translate-x-1/2 translate-y-1 rounded-xl border border-(--color-border) bg-(--color-background) p-4 text-left text-(--color-text-body) opacity-0 shadow-xl transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                  >
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-(--color-text-muted)">
                      {TYPE_SHORT_LABELS[node.resource.type]} · {number}
                    </span>
                    <span className="block text-sm font-semibold leading-snug text-(--color-text-heading)">
                      {node.resource.title}
                    </span>
                    <span className="mt-1 block text-xs text-(--color-text-muted)">
                      {[node.resource.authors?.join(", "), node.resource.year, node.resource.publisher].filter(Boolean).join(" · ") || "Publication details"}
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-(--color-text-body)">
                      {node.resource.summary}
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
      ) : (
        <div className="rounded-xl border border-dashed border-(--color-border) px-5 py-12 text-center text-sm text-(--color-text-muted)">
          No sources match this search. Try another title, author, or year.
        </div>
      )}

      <p className="text-xs text-(--color-text-muted)">
        A source may appear in more than one topic group. Lines show editorial relevance to the curriculum; they do not represent citations between papers.
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
    </section>
  );
}
