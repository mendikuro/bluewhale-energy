"use client";

import { useEffect, useState } from "react";
import { Menu, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { COMPANY, NAV_LINKS } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility top bar */}
      <div
        className={`hidden md:block overflow-hidden border-b border-border/60 bg-secondary/60 transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              {COMPANY.phone}
            </a>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Port Harcourt, Rivers State — 24/7 Emergency Response
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        aria-label="Primary"
        className={`transition-all duration-300 ${
          scrolled
            ? "glass-nav border-b border-border/60 shadow-[0_8px_30px_-12px_rgba(9,20,60,0.18)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            >
              <a href="#contact">Request a Quote</a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden border-border/60"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-background border-border/60"
              >
                <SheetHeader className="border-b border-border/60 pb-4">
                  <SheetTitle asChild>
                    <div>
                      <Logo />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1 px-4">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button asChild className="mt-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Request a Quote
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
