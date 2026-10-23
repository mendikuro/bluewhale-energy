"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./reveal";
import { SERVICES } from "./data";

export function Services() {
  const [current, setCurrent] = useState(0);
  const service = SERVICES[current];

  return (
    <section id="services" className="relative scroll-mt-20 border-t border-border/60 bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Core Services"
          title={
            <>
              Engineering capability across the{" "}
              <span className="text-gradient-blue">well &amp; asset lifecycle</span>
            </>
          }
          subtitle="Four specialized divisions working as one team — so a single call covers everything from downhole tools to dockside logistics."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
          {/* Tab list */}
          <Reveal className="min-w-0">
            <div
              role="tablist"
              aria-label="Service divisions"
              className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {SERVICES.map((s, i) => {
                const selected = i === current;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`service-panel-${s.id}`}
                    id={`service-tab-${s.id}`}
                    onClick={() => setCurrent(i)}
                    className={`group relative flex min-w-[240px] items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 lg:min-w-0 ${
                      selected
                        ? "border-primary/50 bg-primary/10 shadow-[0_0_0_1px_rgba(10,92,255,0.35)]"
                        : "border-border/60 bg-card/40 hover:border-primary/30 hover:bg-card/70"
                    }`}
                  >
                    <span
                      className={`font-display text-2xl font-bold transition-colors ${
                        selected ? "text-primary" : "text-foreground/25"
                      }`}
                    >
                      {s.index}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-semibold ${selected ? "text-primary" : ""}`}>
                        {s.title}
                      </span>
                      <span className="mt-0.5 hidden text-xs text-muted-foreground lg:block">
                        {s.items.length} specialized service lines
                      </span>
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-all ${
                        selected
                          ? "text-primary opacity-100"
                          : "text-muted-foreground opacity-0 group-hover:opacity-60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel */}
          <Reveal delay={0.1} className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.id}
                id={`service-panel-${service.id}`}
                role="tabpanel"
                aria-labelledby={`service-tab-${service.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.21, 0.65, 0.35, 1] }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card/40"
              >
                {/* Panel image(s) */}
                <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                  <div
                    className={`grid h-full ${
                      service.images.length > 1
                        ? "grid-cols-2 gap-px bg-border/50"
                        : "grid-cols-1"
                    }`}
                  >
                    {service.images.map((img) => (
                      <div key={img.src} className="relative overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 33vw"
                          className={`object-cover ${img.pos ?? "object-center"}`}
                        />
                        {img.tag && (
                          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-background/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                            {img.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="font-display text-xs font-bold tracking-[0.25em] text-primary uppercase">
                      Division {service.index}
                    </p>
                    <h3 className="font-display mt-1 text-2xl sm:text-3xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-muted-foreground leading-relaxed">{service.short}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-lg border border-border/50 bg-background/40 p-4 transition-colors hover:border-primary/35"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
                          <h4 className="font-semibold text-sm sm:text-[15px]">{item.name}</h4>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-primary/10 border border-primary/25 px-5 py-4">
                    <p className="text-sm text-foreground/90">
                      Need a scope document or commercial proposal for{" "}
                      <span className="font-semibold text-primary">{service.title.toLowerCase()}</span>?
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                    >
                      <a href="#contact">Request a Quote</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
