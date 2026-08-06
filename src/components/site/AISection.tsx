import { Sparkles, Bell, Terminal, Tags, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, Section } from "./primitives";

const items = [
  {
    icon: Sparkles,
    title: "AI-assisted logging",
    body: "Describe your day in a sentence. Billables turns it into structured entries against the right projects.",
  },
  {
    icon: Bell,
    title: "Automatic reminders",
    body: "Gentle nudges before cut-off, so managers stop playing chase-the-timesheet.",
  },
  {
    icon: Terminal,
    title: "CLI-powered workflows",
    body: "billables log 2h \"client discovery\" — straight from the terminal your engineers already live in.",
  },
  {
    icon: Tags,
    title: "Smart categorisation",
    body: "Receipts read themselves: amount, currency, category and project, filled in for you.",
  },
  {
    icon: FileText,
    title: "Intelligent summaries",
    body: "A weekly readout of utilisation, blockers and what's ready to invoice.",
  },
];

export function AISection() {
  return (
    <div id="ai" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="hero-glow animate-drift pointer-events-none absolute inset-0 opacity-40" />
      <Section className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Billables AI
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">Let AI handle the busywork.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ink-foreground/70">
              The admin nobody wants to do, done before anyone asks. Your team stays on client work.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold text-ink-foreground/50 uppercase">Terminal</p>
              <div className="mt-4 space-y-2 font-mono text-sm">
                <p className="text-accent">$ billables log</p>
                <p className="text-ink-foreground/70">
                  ? What did you work on today ›{" "}
                  <span className="text-ink-foreground">
                    3h CBU discovery call, 1h Flyfairly interview scheduling
                  </span>
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-ink-foreground/70"
                >
                  ✓ 2 entries created · 4h billable · submitted for approval
                </motion.p>
              </div>
            </div>
          </Reveal>

          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 transition-colors hover:bg-ink-foreground/10">
                <it.icon className="h-5 w-5 text-accent" />
                <p className="mt-4 font-display text-lg font-bold">{it.title}</p>
                <p className="mt-2 text-sm text-ink-foreground/65">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
