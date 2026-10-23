export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex flex-col leading-none"
      aria-label="BlueWhale Energy — home"
    >
      {/* Wordmark matching www.blue-whale.com.ng — bold Inter with ENERGY subline */}
      <span className="font-sans text-[1.7rem] md:text-[2rem] font-bold tracking-[0.02em] text-foreground transition-colors duration-300 group-hover:text-primary">
        BLUEWHALE
      </span>
      {!compact && (
        <span className="mt-1.5 text-[0.62rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-cyan-600">
          Energy
        </span>
      )}
    </a>
  );
}
