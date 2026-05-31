import { ArrowRight, Layers3, ShoppingCart, Shield } from "lucide-react";
import { ProjectEntry } from "@/lib/data";
import { TagPill } from "@/components/tag-pill";

const projectIconByType = {
  cart: ShoppingCart,
  layers: Layers3,
  shield: Shield,
};

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = projectIconByType[project.icon];

  return (
    <article className="surface-card flex h-full flex-col p-4 transition duration-200 hover:border-app-borderStrong hover:shadow-sm">
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-app-dark text-app-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-[21px] font-bold leading-tight text-app-text">{project.title}</h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-app-secondary">{project.description}</p>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={`${project.title}-${tag}`} label={tag} className="bg-app-surfaceMuted text-xs" />
        ))}
      </div>
      <a
        href={project.href}
        className="mt-4 inline-flex items-center gap-1 text-[14px] font-bold text-app-accentDeep transition-colors hover:text-app-accentHover"
      >
        View project
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
