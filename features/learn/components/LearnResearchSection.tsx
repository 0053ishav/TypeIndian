"use client";

import { useMemo } from "react";
import type { LearnResource } from "@/types/language";

type Props = { resources: LearnResource[] };

type Point = {
  resource: LearnResource;
  x: number;
  y: number;
  label: string;
};

function shortLabel(resource: LearnResource) {
  const author = resource.authors?.[0]?.split(" ").at(-1);
  const publisher = resource.publisher?.split(/[,:]/)[0];
  const name = author || publisher || resource.title;
  const shortName = name.length > 13 ? `${name.slice(0, 11)}…` : name;
  return resource.year ? `${shortName}, ${resource.year}` : `${shortName}, n.d.`;
}

function ResearchNetwork({ resources }: Props) {
  const { points, edges, years } = useMemo(() => {
    const dated = resources.filter((resource) => resource.year);
    const minYear = Math.min(...dated.map((resource) => resource.year as number), 2000);
    const maxYear = Math.max(...dated.map((resource) => resource.year as number), minYear + 1);
    const plotLeft = 42;
    const plotRight = 520;
    const plotTop = 28;
    const plotBottom = 194;
    const undatedX = 580;

    const ordered = [...resources].sort((a, b) => {
      if (!a.year && !b.year) return a.id.localeCompare(b.id);
      if (!a.year) return 1;
      if (!b.year) return -1;
      return a.year - b.year || a.id.localeCompare(b.id);
    });

    const datedIndex = new Map<string, number>();
    let datedCount = 0;
    ordered.forEach((resource) => {
      if (resource.year) datedIndex.set(resource.id, datedCount++);
    });
    const datedTotal = Math.max(1, datedCount);
    const undated = ordered.filter((resource) => !resource.year);
    const undatedIndex = new Map(undated.map((resource, index) => [resource.id, index]));

    const nodes: Point[] = ordered.map((resource) => {
      const year = resource.year;
      const x = year
        ? plotLeft + ((year - minYear) / (maxYear - minYear)) * (plotRight - plotLeft)
        : undatedX;
      const index = year ? datedIndex.get(resource.id) ?? 0 : undatedIndex.get(resource.id) ?? 0;
      const count = year ? datedTotal : Math.max(1, undated.length);
      const y = plotTop + ((index + 0.5) / count) * (plotBottom - plotTop);
      return { resource, x, y, label: shortLabel(resource) };
    });

    // Editorial relationship: connect each source to its strongest shared-topic match.
    // This is deliberately not presented as a citation edge.
    const pairs = new Set<string>();
    const links: Array<{ from: Point; to: Point }> = [];
    nodes.forEach((point) => {
      const matches = nodes
        .filter((candidate) => candidate.resource.id !== point.resource.id)
        .map((candidate) => ({
          candidate,
          overlap: point.resource.topics.filter((topic) => candidate.resource.topics.includes(topic)).length,
        }))
        .filter((match) => match.overlap > 0)
        .sort((a, b) => b.overlap - a.overlap || a.candidate.resource.id.localeCompare(b.candidate.resource.id));
      const best = matches[0]?.candidate;
      if (!best) return;
      const key = [point.resource.id, best.resource.id].sort().join("|");
      if (pairs.has(key)) return;
      pairs.add(key);
      links.push({ from: point, to: best });
    });

    const ticks = [...new Set(dated.map((resource) => resource.year as number))].sort((a, b) => a - b);
    return { points: nodes, edges: links, years: ticks };
  }, [resources]);

  return (
    <div className="card w-full max-w-3xl space-y-2 p-3 md:p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-(--color-text-heading)">Hindi research map</h3>
        <span className="text-[10px] text-(--color-text-muted)">{resources.length} sources</span>
      </div>

      <div className="overflow-x-auto">
        <svg
          role="img"
          aria-label="Chronological research map. Nodes represent sources, placed by publication year. Lines show shared curriculum coverage, not citations."
          viewBox="0 0 640 238"
          className="block h-auto w-full min-w-[520px]"
        >
          <line x1="34" y1="210" x2="606" y2="210" stroke="var(--color-border)" strokeWidth="1" />
          {years.map((year) => {
            const datedYears = years;
            const min = Math.min(...datedYears, 2000);
            const max = Math.max(...datedYears, min + 1);
            const x = 42 + ((year - min) / (max - min)) * (520 - 42);
            return (
              <g key={year}>
                <line x1={x} y1="206" x2={x} y2="214" stroke="var(--color-text-muted)" strokeWidth="1" />
                <text x={x} y="228" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">{year}</text>
              </g>
            );
          })}
          {points.filter((point) => !point.resource.year).length > 0 ? (
            <text x="580" y="228" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">Undated</text>
          ) : null}

          {edges.map(({ from, to }) => (
            <path
              key={[from.resource.id, to.resource.id].sort().join("-")}
              d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - 14} ${to.x} ${to.y}`}
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1"
              opacity="0.8"
            />
          ))}

          {points.map((point) => (
            <a
              key={point.resource.id}
              href={point.resource.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${point.resource.title}`}
            >
              <title>
                {point.resource.title}
                {"\n"}
                {[point.resource.authors?.join(", "), point.resource.year, point.resource.publisher].filter(Boolean).join(" · ")}
                {"\n"}
                {point.resource.summary}
              </title>
              <circle
                cx={point.x}
                cy={point.y}
                r="5.5"
                fill="var(--color-background)"
                stroke="var(--color-accent)"
                strokeWidth="1.7"
                className="transition-all hover:fill-(--color-accent)"
              />
              <text
                x={point.x}
                y={point.y + 17}
                textAnchor="middle"
                fontSize="9"
                fill="var(--color-text-body)"
                className="pointer-events-none"
              >
                {point.label}
              </text>
            </a>
          ))}
        </svg>
      </div>

      <p className="text-[10px] text-(--color-text-muted)">
        Horizontal position follows publication year. Lines indicate shared curriculum coverage, not verified citation links.
      </p>
    </div>
  );
}

export default function LearnResearchSection({ resources }: Props) {
  if (!resources.length) return null;

  return (
    <section className="space-y-3" aria-labelledby="learn-research-title">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-(--color-text-muted)">Further reading</p>
        <h2 id="learn-research-title" className="text-xl font-bold text-(--color-text-heading)">
          Research and references
        </h2>
      </div>
      <ResearchNetwork resources={resources} />
    </section>
  );
}
