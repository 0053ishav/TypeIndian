"use client";

import { useMemo } from "react";
import type { LearnResource } from "@/types/language";

type Props = { resources: LearnResource[] };

// Avoid locale-dependent ordering differences between the server and browser.
function compareIds(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}

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
  const { points, edges } = useMemo(() => {
    const ordered = [...resources].sort((a, b) => {
      if (!a.year && !b.year) return compareIds(a.id, b.id);
      if (!a.year) return 1;
      if (!b.year) return -1;
      return a.year - b.year || compareIds(a.id, b.id);
    });

    // Build editorial topic-overlap links. These are not citation relationships.
    const pairs = new Set<string>();
    const links: Array<{ fromId: string; toId: string }> = [];
    ordered.forEach((resource) => {
      const matches = ordered
        .filter((candidate) => candidate.id !== resource.id)
        .map((candidate) => ({
          candidate,
          overlap: resource.topics.filter((topic) => candidate.topics.includes(topic)).length,
        }))
        .filter((match) => match.overlap > 0)
        .sort((a, b) => b.overlap - a.overlap || compareIds(a.candidate.id, b.candidate.id));

      // Keep up to two strongest shared-topic connections per source.
      matches.slice(0, 2).forEach(({ candidate }) => {
        const key = [resource.id, candidate.id].sort().join("|");
        if (pairs.has(key)) return;
        pairs.add(key);
        links.push({ fromId: resource.id, toId: candidate.id });
      });
    });

    // A compact force-like radial layout: years determine ordering around the
    // network, while the graph itself has no timeline axis.
    const centerX = 320;
    const centerY = 132;
    const radiusX = resources.length > 8 ? 218 : 175;
    const radiusY = resources.length > 8 ? 88 : 72;
    const points = ordered.map((resource, index) => {
      const angle = -Math.PI / 2 + (index / Math.max(1, ordered.length)) * Math.PI * 2;
      return {
        resource,
        x: centerX + Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle) * radiusY,
        label: shortLabel(resource),
      };
    });

    return { points, edges: links };
  }, [resources]);

  const pointById = new Map(points.map((point) => [point.resource.id, point]));

  return (
    <div className="card w-full max-w-3xl space-y-2 p-3 md:p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-(--color-text-heading)">Research map</h3>
        <span className="text-[10px] text-(--color-text-muted)">{resources.length} sources</span>
      </div>

      <div className="overflow-x-auto">
        <svg
          role="img"
          aria-label="Research network. Nodes represent sources, arranged as a connected network. Labels show author and publication year. Lines show shared curriculum coverage, not citations."
          viewBox="0 0 640 264"
          className="block h-auto w-full min-w-[520px]"
        >
          {edges.map(({ fromId, toId }) => {
            const from = pointById.get(fromId);
            const to = pointById.get(toId);
            if (!from || !to) return null;
            return (
              <path
                key={[fromId, toId].sort().join("-")}
                d={`M ${from.x} ${from.y} Q 320 132 ${to.x} ${to.y}`}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
                opacity="0.85"
              />
            );
          })}

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
                r="6"
                fill="var(--color-accent)"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                className="transition-all hover:opacity-75"
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
        Years appear with each source label. Lines indicate shared curriculum coverage, not verified citation links.
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
