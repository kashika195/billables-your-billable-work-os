import { Clock, Sparkles, Eye, Zap, Wallet, HeartHandshake } from "lucide-react";
import { Counter, Eyebrow, Reveal, Section } from "./primitives";

const benefits = [
  { icon: Clock, title: "Save admin hours", body: "Hours back every week that used to go into chasing and copying." },
  { icon: Sparkles, title: "Reduce manual work", body: "AI drafts, reminders and categorisation do the repetitive half." },
  { icon: Eye, title: "Project visibility", body: "Know where time and spend are going while there's time to act." },
  { icon: Zap, title: "Faster approvals", body: "One queue, bulk actions, no more month-end scramble." },
  { icon: Wallet, title: "Accurate payouts", body: "Reimbursements and billing built on numbers you can defend." },
  { icon: HeartHandshake, title: "Happier teams", body: "Consultants log work in seconds and forget about it." },
];

const stats = [
  { value: 72, suffix: "%", label: "less time on timesheet admin" },
  { value: 4, suffix: " days", label: "faster invoice turnaround" },
  { value: 98, suffix: "%", label: "on-time submission rate" },
];

export function Benefits() {
  return (
    <Section id="about">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>Outcomes</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Why teams love Billables.</h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <div className="surface-card h-full p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 font-display text-xl font-bold">{b.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-6 rounded-3xl bg-muted p-8 sm:grid-cols-3 sm:p-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
