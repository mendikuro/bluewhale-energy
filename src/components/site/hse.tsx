"use client";

import { ShieldCheck, AlertTriangle, FileCheck2, HardHat, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { HSE_POINTS, WHY_US } from "./data";

const HSE_ICONS = [ShieldCheck, FileCheck2, AlertTriangle, HardHat];

export function Hse() {
  return (
    <section
      id="hse"
      className="relative scroll-mt-20 border-y border-border/60 bg-secondary/20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Intro + record */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Health, Safety & Environment"
              title={
                <span className="text-gradient-blue">
                  Nobody Gets Hurt,
                  <br />
                  No Spills and No Loss
                </span>
              }
              subtitle="Safety is not a department at BlueWhale — it is the operating system every task runs on, from the boardroom to the wellsite."
            />

            <Reveal delay={0.22}>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
                  <ShieldCheck className="h-6 w-6 text-primary" aria-hidden />
                  <p className="font-display mt-3 text-lg font-bold text-primary">Goal Zero</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Zero harm to people, assets and the environment — the only target we accept on every site.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/50 p-5">
                  <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
                  <p className="font-display mt-3 text-lg font-bold">Competent Crews</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every crew member is certified, assessed and briefed before mobilizing to your location.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 rounded-xl border border-border/60 bg-card/40 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Environmental stewardship:
                  </span>{" "}
                  NOSDRA-compliant waste streams, spill contingency plans on every
                  site, and remediation programs that leave locations better than
                  we found them.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Points */}
          <div className="grid gap-4 sm:grid-cols-2">
            {HSE_POINTS.map((point, i) => {
              const Icon = HSE_ICONS[i % HSE_ICONS.length];
              return (
                <Reveal key={point.title} delay={i * 0.07}>
                  <article className="h-full rounded-xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/40">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12 border border-primary/30 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="font-display mt-4 font-bold">{point.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {point.desc}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Why choose us strip */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <h3 className="font-display text-center text-2xl sm:text-3xl font-bold tracking-tight">
              Why operators choose <span className="text-gradient-blue">BlueWhale</span>
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-2.5 bg-card/60 p-6 transition-colors hover:bg-card">
                  <span className="font-display text-sm font-bold text-primary">
                    0{i + 1}
                  </span>
                  <h4 className="font-semibold leading-snug">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
