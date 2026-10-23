"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown, MapPin, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/paths";

const HERO_FACTS = [
  { icon: MapPin, label: "Port Harcourt HQ", sub: "Niger Delta & nationwide" },
  { icon: Siren, label: "24/7 Emergency Response", sub: "Duty manager on call" },
  { icon: ShieldCheck, label: "HSE-MS Aligned", sub: "ISO 9001 · 14001 · 45001" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/hero-rig.jpg")}
          alt="Jack-up drilling rig drilling a well with flare in the background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/55" />
        <div className="absolute inset-0 bg-grid-faint opacity-60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 sm:px-6 pt-32 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
          >
            <ShieldCheck className="h-4 w-4" />
            ISO 9001 · 14001 · 45001 Aligned HSE-MS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.65, 0.35, 1] }}
            className="font-display text-gradient-blue mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.08] tracking-tight"
          >
            Powering Nigeria&apos;s Energy Future with Precision &amp; Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.21, 0.65, 0.35, 1] }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Integrated well intervention, drilling &amp; completions, facilities
            engineering and procurement services — delivered safely and
            efficiently across the Niger Delta and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.21, 0.65, 0.35, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-12 px-7 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_10px_32px_-8px_rgba(10,92,255,0.55)]"
            >
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 border-foreground/25 bg-foreground/5 hover:bg-foreground/10 hover:text-foreground"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Facts strip */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.65, 0.35, 1] }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pb-10"
      >
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-3">
          {HERO_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="glass-nav flex items-center gap-4 px-6 py-5 sm:py-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <fact.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col gap-0.5">
                <dt className="text-sm font-semibold tracking-wide text-foreground">
                  {fact.label}
                </dt>
                <dd className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {fact.sub}
                </dd>
              </span>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
