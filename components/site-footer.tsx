import { CodeXml, Globe, Mail, MapPin } from "lucide-react";
import { footerData } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer id="contact" className="pt-10">
      <div className="border-y border-app-border bg-app-surfaceMuted">
        <div className="container-shell grid gap-0 py-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="border-app-border px-2 py-3.5 md:border-r xl:py-0">
            <h3 className="text-sm font-semibold text-app-text">Let’s connect</h3>
            <p className="mt-1.5 text-[14px] text-app-secondary">{footerData.connect}</p>
            <a
              href={footerData.emailHref}
              className="mt-1.5 inline-block text-[14px] font-semibold text-app-accentDeep hover:text-app-accentHover"
            >
              Send me a message →
            </a>
          </section>

          <section className="border-app-border px-2 py-3.5 md:px-6 md:py-0 xl:border-r">
            <div className="flex items-center gap-2 text-sm font-semibold text-app-text">
              <Mail className="h-4 w-4 text-app-accent" aria-hidden="true" />
              Email
            </div>
            <p className="mt-1.5 text-[14px] text-app-secondary">{footerData.email}</p>
          </section>

          <section className="border-app-border px-2 py-3.5 md:border-r md:px-6 md:py-0">
            <div className="flex items-center gap-2 text-sm font-semibold text-app-text">
              <MapPin className="h-4 w-4 text-app-accent" aria-hidden="true" />
              Location
            </div>
            <p className="mt-1.5 text-[14px] text-app-secondary">{footerData.location}</p>
            <p className="text-[14px] text-app-secondary">{footerData.availability}</p>
          </section>

          <section className="px-2 py-3.5 md:px-6 md:py-0">
            <div className="flex items-center gap-2 text-sm font-semibold text-app-text">
              <Globe className="h-4 w-4 text-app-accent" aria-hidden="true" />
              Links
            </div>
            <div className="mt-1.5 flex flex-wrap gap-3">
              {footerData.links.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-[14px] font-medium text-app-accentDeep hover:text-app-accentHover"
                  >
                  {link.label}
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <div className="bg-app-dark py-3 text-app-darkMuted">
        <div className="container-shell flex flex-col justify-between gap-1.5 text-xs md:flex-row md:text-sm">
          <p>{footerData.copyright}</p>
          <p className="inline-flex items-center gap-2">
            {footerData.tagline}
            <CodeXml className="h-4 w-4" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
