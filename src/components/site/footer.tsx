import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "./logo";
import { COMPANY, NAV_LINKS, SERVICES, CAPABILITIES } from "./data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-background">
      {/* CTA strip — vivid electric gradient panel */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0533B8] via-[#0A5CFF] to-[#00A6F4] px-6 py-10 sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Ready to raise your{" "}
                  <span className="text-[#A9E8FF]">operational performance?</span>
                </h2>
                <p className="mt-2 max-w-xl text-sm sm:text-base text-white/85">
                  Speak with our engineering team today — proposals returned within one
                  business day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center rounded-md bg-white px-6 text-sm font-semibold text-[#0A4BD6] shadow-[0_8px_24px_-8px_rgba(0,10,60,0.5)] transition-colors hover:bg-[#EAF4FF]"
                >
                  Request a Quote
                </a>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="inline-flex h-11 items-center rounded-md border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {COMPANY.legalName} — integrated well intervention, drilling &amp;
              completions, facilities engineering, marine support and procurement
              services for Nigeria&apos;s energy industry.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "X (Twitter)" },
                { icon: Facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav aria-label="Footer company links">
            <h3 className="font-display text-sm font-bold tracking-[0.18em] uppercase text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Core services links */}
          <nav aria-label="Footer core services links">
            <h3 className="font-display text-sm font-bold tracking-[0.18em] uppercase text-foreground">
              Core Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  + {CAPABILITIES.length} extended capabilities
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.18em] uppercase text-foreground">
              Head Office
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {COMPANY.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {year} {COMPANY.legalName}. All rights reserved. Incorporated in Nigeria {COMPANY.incorporated}
          </p>
          <p className="flex items-center gap-1.5">
            Built to world-class HSE standards
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            ISO 9001 · ISO 14001 · ISO 45001
          </p>
        </div>
      </div>
    </footer>
  );
}
