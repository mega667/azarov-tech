import { FileText, Mail } from "lucide-react";
import { MetricItem } from "@/components/metric-item";
import { ProfilePanel } from "@/components/profile-panel";
import { TagPill } from "@/components/tag-pill";
import { heroMetrics, heroSkillTags } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="about"
      className="grid gap-7 border-b border-transparent pb-5 pt-8 lg:grid-cols-[1.06fr_0.94fr]"
      aria-labelledby="hero-title"
    >
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-app-accentDeep">HELLO, I’M</p>
        <h1 id="hero-title" className="mt-2 text-4xl font-bold leading-none text-app-text sm:text-5xl lg:text-[58px]">
          Konstantin Azarov
        </h1>
        <p className="mt-2 text-2xl font-bold leading-tight text-app-text lg:text-[26px]">
          Senior Backend / Platform Engineer
        </p>
        <p className="mt-1.5 text-[17px] font-bold text-app-accentDeep">
          Node.js, TypeScript, GraphQL &amp; Commerce Platforms
        </p>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-7 text-app-secondary">
          I build high-traffic backend services, commerce platforms, and developer-facing systems with reliable API
          contracts and production-minded architecture. My work spans multi-region authentication, integrations,
          caching, data workflows, and global storefront operations.
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5">
          <a
            href="/Konstantin_Azarov_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center gap-2 rounded-[10px] bg-app-accent px-4 text-sm font-semibold text-app-dark transition-colors hover:bg-app-accentHover"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex h-[46px] items-center gap-2 rounded-[10px] border border-[#1F2937] bg-app-surface px-4 text-sm font-semibold text-app-text transition-colors hover:bg-slate-50"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {heroSkillTags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 border-t border-app-border pt-3.5 sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <MetricItem key={metric.title} metric={metric} />
          ))}
        </div>
      </div>

      <ProfilePanel />
    </section>
  );
}
