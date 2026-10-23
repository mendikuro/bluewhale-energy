"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Loader2,
  Send,
  Siren,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { COMPANY, SERVICE_OPTIONS } from "./data";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more (min. 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * Where the form submits to:
 * 1. NEXT_PUBLIC_FORM_ENDPOINT — a form-handling service endpoint
 *    (e.g. https://formspree.io/f/xxxxxx). Recommended for static hosting.
 * 2. NEXT_PUBLIC_STATIC_EXPORT=1 without an endpoint — static hosting with
 *    no backend, so submissions open the visitor's email app pre-filled.
 * 3. Neither — posts to the built-in /api/contact route (Node hosting).
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

const INFO = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: [COMPANY.address],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [COMPANY.phone, "Mon – Sat, business hours"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [COMPANY.email, "Replies within one business day"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 2:00 PM"],
  },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", service: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      // 1. External form service (Formspree, Getform, Basin, …)
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone || undefined,
            company: values.company || undefined,
            service: values.service || undefined,
            message: values.message,
            _subject: `Website inquiry — ${values.service || "General"}`,
          }),
        });

        if (res.ok) {
          toast({
            title: "Message sent successfully",
            description:
              "Thank you. Our team will contact you within one business day.",
            duration: 6000,
          });
          reset();
        } else {
          toast({
            title: "Could not send message",
            description:
              "Please review your details and try again, or email us directly.",
            variant: "destructive",
            duration: 6000,
          });
        }
        return;
      }

      // 2. Static hosting without a form service — open the email app
      if (IS_STATIC_EXPORT) {
        const subject = encodeURIComponent(
          `Website inquiry — ${values.service || "General"}`
        );
        const body = encodeURIComponent(
          `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Phone: ${values.phone || "-"}\n` +
            `Company: ${values.company || "-"}\n` +
            `Service: ${values.service || "-"}\n\n` +
            `${values.message}\n`
        );
        window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
        toast({
          title: "Opening your email app",
          description: `Your message is pre-addressed to ${COMPANY.email}. Simply press send.`,
          duration: 6000,
        });
        return;
      }

      // 3. Built-in API route (Node / server hosting)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        toast({
          title: "Message sent successfully",
          description: data.message,
          duration: 6000,
        });
        reset();
      } else {
        toast({
          title: "Could not send message",
          description: data.error ?? "Please review your details and try again.",
          variant: "destructive",
          duration: 6000,
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
        duration: 6000,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/60 bg-secondary/20 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let&apos;s discuss your{" "}
              <span className="text-gradient-blue">next project</span>
            </>
          }
          subtitle="Tell us about your scope, timeline and location — a senior engineer will respond with a tailored proposal within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Info column */}
          <div className="flex flex-col gap-4">
            {INFO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/35">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.28}>
              <div className="mt-2 flex items-start gap-4 rounded-xl border border-destructive/40 bg-destructive/10 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-destructive/40 bg-destructive/15 text-red-600">
                  <Siren className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">24/7 Emergency Response</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Well control, spill response or equipment failure — our duty
                    manager is reachable around the clock.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Chukwuemeka Nwosu"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    {...register("phone")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Company / Organization"
                    {...register("company")}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="service" className="w-full">
                          <SelectValue placeholder="Select a service division" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your scope of work, location and expected timeline…"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="mt-7 w-full sm:w-auto h-12 px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_10px_32px_-8px_rgba(10,92,255,0.5)]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your inquiry. We
                treat all commercial information as strictly confidential.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
