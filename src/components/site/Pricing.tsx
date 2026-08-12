import { Check } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Core",
    price: "$5",
    unit: "/ user / month",
    blurb: "Everything you need to run billable work — without AI.",
    features: [
      "Projects & timesheets",
      "Reimbursements",
      "Approvals & reporting",
      "Mobile app",
      "Email support",
    ],
    cta: "Start with Core",
  },
  {
    name: "AI",
    price: "$12",
    unit: "/ user / month",
    blurb: "Core plus Billables AI for logging and insights.",
    features: [
      "Everything in Core",
      "Billables AI assistant",
      "AI timesheet logging + CLI",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Book a demo",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Custom",
    unit: "",
    blurb: "Deploy on your own servers or add anything extra you need.",
    features: [
      "Self-hosted / your cloud",
      "Custom integrations",
      "SSO & custom roles",
      "Dedicated CSM",
      "Onboarding & migration",
    ],
    cta: "Talk to us about custom",
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Simple pricing, no surprises.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            Indicative pricing while we're in early access. Talk to us and we'll shape it around your firm.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={cn(
                "relative flex h-full flex-col p-8",
                t.highlight
                  ? "rounded-3xl bg-ink text-ink-foreground shadow-float"
                  : "surface-card",
              )}
            >
              {t.highlight && (
                <span className="absolute top-6 right-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <p className="font-display text-lg font-bold">{t.name}</p>
              <p
                className={cn(
                  "mt-1 text-sm",
                  t.highlight ? "text-ink-foreground/65" : "text-muted-foreground",
                )}
              >
                {t.blurb}
              </p>
              <p className="mt-6 font-display text-4xl font-bold">
                {t.price}
                <span
                  className={cn(
                    "ml-1 text-sm font-medium",
                    t.highlight ? "text-ink-foreground/60" : "text-muted-foreground",
                  )}
                >
                  {t.unit}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn("mt-0.5 h-4 w-4 shrink-0", t.highlight ? "text-accent" : "text-primary")}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                  t.highlight
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-card hover:bg-muted",
                )}
              >
                {t.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
