import { BriefcaseBusiness } from "lucide-react";
import { ExperienceItem } from "@/components/experience-item";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-12" aria-labelledby="experience-title">
      <SectionHeading icon={BriefcaseBusiness} title="Experience" />
      <div className="mt-4 pl-5">
        {experienceEntries.map((entry, index) => (
          <ExperienceItem
            key={`${entry.period}-${entry.title}`}
            entry={entry}
            isLast={index === experienceEntries.length - 1}
            initiallyExpanded={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
