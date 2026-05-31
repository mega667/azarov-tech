"use client";

import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-app-dark text-app-darkText">
      <div className="container-shell flex h-[64px] items-center justify-between lg:h-[72px]">
        <a href="#about" className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm border-2 border-app-accent bg-app-dark text-base font-bold text-app-darkText">
            KA
          </span>
          <span className="text-[17px] font-semibold">Konstantin Azarov</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-app-darkMuted transition-colors hover:text-app-darkText"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Konstantin_Azarov_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-app-accent px-4 text-sm font-semibold text-app-dark transition-colors hover:bg-app-accentHover"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            View Resume
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-app-darkText lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((state) => !state)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="container-shell pb-4 lg:hidden">
          <div className="grid gap-1 rounded-md border border-white/10 bg-app-darkDeep p-2">
            {navItems.map((item) => (
              <a
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-app-darkMuted transition-colors hover:bg-white/5 hover:text-app-darkText"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
