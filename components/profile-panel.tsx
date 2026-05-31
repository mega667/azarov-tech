import { BadgeCheck, Cloud, Code2, Mail, MapPin, UserRound } from "lucide-react";
import { footerData, profilePanelData } from "@/lib/data";

function PanelHeader({ icon: Icon, title }: { icon: typeof UserRound; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-app-accent" aria-hidden="true" />
      <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-app-text">{title}</h3>
    </div>
  );
}

export function ProfilePanel() {
  return (
    <aside className="surface-card overflow-hidden">
      <div className="border-b border-app-border p-4">
        <PanelHeader icon={UserRound} title="At a Glance" />
        <p className="mt-2.5 text-[15px] leading-6 text-app-secondary">{profilePanelData.glance}</p>
      </div>

      <div className="grid sm:grid-cols-2">
        <section className="border-b border-app-border p-4 sm:border-r">
          <PanelHeader icon={Code2} title="Strengths" />
          <ul className="mt-2.5 space-y-1">
            {profilePanelData.strengths.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-app-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-app-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-app-border p-4">
          <PanelHeader icon={Cloud} title="Tech Focus" />
          <ul className="mt-2.5 space-y-1">
            {profilePanelData.techFocus.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-app-secondary">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-app-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-app-border p-4 sm:border-r">
          <PanelHeader icon={BadgeCheck} title="Currently" />
          <p className="mt-2.5 text-[15px] leading-6 text-app-secondary">{profilePanelData.currently}</p>
        </section>

        <section className="border-b border-app-border p-4">
          <PanelHeader icon={MapPin} title="Location" />
          <p className="mt-2.5 text-[15px] leading-6 text-app-secondary">{profilePanelData.location}</p>
        </section>
      </div>

      <section className="p-4">
        <PanelHeader icon={Mail} title="Let’s connect" />
        <p className="mt-2.5 text-[15px] leading-6 text-app-secondary">{profilePanelData.connectText}</p>
        <a
          href={footerData.emailHref}
          className="mt-2 inline-block text-[15px] font-bold text-app-accentDeep hover:text-app-accentHover"
        >
          Send me a message →
        </a>
      </section>
    </aside>
  );
}
