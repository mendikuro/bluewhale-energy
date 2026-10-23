"use client";

import Image from "next/image";
import { Award, Target, Eye, HeartHandshake } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { COMPANY } from "./data";
import { asset } from "@/lib/paths";

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Safety First",
    desc: "Goal Zero on every site — no job is so urgent it cannot be done safely.",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    desc: "Engineered procedures, QC hold points and continuous improvement in everything we execute.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Mindset",
    desc: "We measure success by our clients' uptime, not our invoices.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open reporting, honest timelines and pricing you can audit line by line.",
  },
];

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Award {...props} />;
}

const CERTS = ["ISO 9001:2015 Aligned", "ISO 14001:2015 Aligned", "ISO 45001:2018 Aligned", "NOSDRA Compliant", "Incorporated 2024"];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/25 via-primary/5 to-transparent blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-border/70">
                <Image
                  src={asset("/images/workers-site.jpg")}
                  alt="BlueWhale Energy Services engineers performing pipeline and wellhead maintenance works"
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-4 rounded-xl glass-nav border border-border/70 px-5 py-4">
                  <span className="font-display text-3xl font-bold text-primary">10+</span>
                  <span className="text-sm leading-snug text-foreground/90">
                    Core service lines
                    <br />
                    <span className="text-muted-foreground">under one integrated contract</span>
                  </span>
                </div>
              </div>
              {/* Secondary small card */}
              <div className="absolute -top-6 -right-4 sm:-right-8 hidden sm:block rounded-xl glass-nav border border-border/70 px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Incorporated in Nigeria</p>
                <p className="mt-1 font-display text-lg font-bold">Since {COMPANY.incorporated}</p>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  Your integrated partner for{" "}
                  <span className="text-gradient-blue">energy, marine &amp; industrial</span>{" "}
                  support
                </>
              }
            />
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {COMPANY.legalName} is an indigenous oil &amp; gas services and
                  industrial solutions company, incorporated in Nigeria in{" "}
                  {COMPANY.incorporated} and headquartered in Port Harcourt, Rivers
                  State. We provide integrated support across the energy, marine,
                  environmental and construction sectors — combining deep local
                  knowledge with internationally aligned processes.
                </p>
                <p>
                  From wellhead maintenance and slickline operations to brownfield
                  fabrication and critical procurement, our multidisciplinary teams
                  help operators raise production, extend asset life and cut
                  operating costs — while holding an uncompromising line on safety
                  and quality.
                </p>
              </div>
            </Reveal>

            {/* Values grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.06}>
                  <div className="group flex h-full gap-4 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/40 hover:bg-card">
                    <v.icon className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">{v.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Certifications */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {CERTS.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
