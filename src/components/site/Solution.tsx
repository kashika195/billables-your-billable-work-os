import {
  FolderKanban,
  Clock,
  Building2,
  Receipt,
  CheckCircle2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const cards = [
  { icon: FolderKanban, title: "Projects", body: "Internal and client work, members and status in one list." },
  { icon: Clock, title: "Timesheets", body: "Log hours in seconds, billable or not, from web, CLI or phone." },
  { icon: Building2, title: "Clients", body: "Every organisation, rate and billing preference in one place." },
  { icon: Receipt, title: "Reimbursements", body: "Snap the receipt, add context, track it to payout." },
  { icon: CheckCircle2, title: "Approvals", body: "One queue for managers. Bulk approve in a coffee break." },
  { icon: BarChart3, title: "Reports", body: "Utilisation, hours and spend, ready before finance asks." },
  { icon: Sparkles, title: "AI", body: "Drafts entries, nudges people and categorises expenses.", wide: true },
];

export function Solution() {
  return (
    <Section id="features">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>The Billables way</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Everything in one workspace.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            From the first logged minute to the final invoice — one place, one truth.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className={c.wide ? "sm:col-span-2" : undefined}>
            <div className="surface-card group relative h-full overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 font-display text-xl font-bold">{c.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              {c.wide && (
                <span className="absolute top-6 right-6 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Built in
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
