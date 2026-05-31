import { Code2 } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectEntries } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="pb-6 pt-12" aria-labelledby="projects-title">
      <SectionHeading icon={Code2} title="Projects" />
      <div className="mt-4 grid gap-4 xl:grid-cols-3 md:grid-cols-2">
        {projectEntries.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
