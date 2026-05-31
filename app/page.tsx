import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="app-zoom-90 min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-app-border focus:bg-app-surface focus:px-3 focus:py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(255,143,0,0.35)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="container-shell pb-6">
        <Hero />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </div>
  );
}
