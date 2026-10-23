"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.35, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-primary" aria-hidden />}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
