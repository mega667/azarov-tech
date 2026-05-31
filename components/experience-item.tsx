"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ExperienceEntry } from "@/lib/data";
import { TagPill } from "@/components/tag-pill";

type ExperienceItemProps = {
  entry: ExperienceEntry;
  isLast: boolean;
  initiallyExpanded?: boolean;
};

export function ExperienceItem({ entry, isLast, initiallyExpanded = false }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const detailsId = useId();

  return (
    <article className="relative pb-3 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-6 top-6 h-3 w-3 rounded-full border border-app-accent bg-app-accent"
      />

      <div className="surface-card p-4">
        <div className="grid gap-3 lg:grid-cols-[150px_minmax(0,1fr)_210px] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-app-text">{entry.period}</p>
            <p className="text-sm text-app-muted">{entry.mode}</p>
          </div>

          <div>
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center">
                <Image src={entry.logoSrc} alt={entry.logoAlt} width={28} height={28} className="object-contain" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[19px] font-bold leading-snug text-app-text">{entry.title}</h3>
                <p className="mt-0.5 text-[15px] font-bold text-app-accentDeep">{entry.company}</p>
              </div>
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-app-secondary">{entry.description}</p>
            <ul className="mt-3 hidden space-y-2 text-[14px] leading-relaxed text-app-secondary md:block">
              {entry.bullets.map((bullet) => (
                <li key={`desktop-${bullet}`} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-app-accent" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div id={detailsId} className="md:hidden">
              {expanded ? (
                <ul className="experience-mobile-details mt-3 space-y-2 text-[14px] leading-relaxed text-app-secondary">
                  {entry.bullets.map((bullet) => (
                    <li key={`mobile-${bullet}`} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-app-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {entry.tags.map((tag) => (
              <TagPill key={`${entry.title}-${tag}`} label={tag} className="bg-app-surfaceMuted text-xs" />
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((state) => !state)}
          className="mt-3 inline-flex h-9 items-center rounded-md border border-app-border bg-app-surface px-3 text-sm font-semibold text-app-text transition-colors hover:border-app-borderStrong hover:bg-app-surfaceMuted focus:outline-none focus:ring-2 focus:ring-[rgba(255,143,0,0.35)] md:hidden"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>

      {!isLast ? <div className="absolute -left-[1.15rem] top-9 h-full w-px bg-app-border" aria-hidden="true" /> : null}
    </article>
  );
}
