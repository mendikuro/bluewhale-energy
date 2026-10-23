"use client";

import {
  Ship,
  Leaf,
  Truck,
  Wrench,
  Fuel,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { CAPABILITIES } from "./data";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ship: Ship,
  leaf: Leaf,
  crane: Truck,
  wrench: Wrench,
  fuel: Fuel,
  users: Users,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Extended Capabilities"
          title={
            <>
              One partner.{" "}
              <span className="text-gradient-blue">Every operational need.</span>
            </>
          }
          subtitle="Beyond the drill site, we keep your supply chain, marine logistics and assets moving — end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICONS[cap.icon] ?? Wrench;
            return (
              <Reveal key={cap.title} delay={i * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_20px_50px_-20px_rgba(9,20,60,0.28)]">
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold">{cap.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {cap.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
