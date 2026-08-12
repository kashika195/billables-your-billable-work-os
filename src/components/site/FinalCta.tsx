import { ArrowRight } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center text-ink-foreground sm:px-14 sm:py-20">
          <div className="hero-glow animate-drift pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Ready to simplify billable work?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-foreground/70">
              See Billables on your own projects. Thirty minutes, no slide deck.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@billables.io?subject=Billables%20demo"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#showcase"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-ink-foreground/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-ink-foreground/10 sm:w-auto"
              >
                Watch product tour
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  const cols = [
    { title: "Company", links: [["About", "#about"], ["Contact", "#contact"], ["LinkedIn", "https://www.linkedin.com"]] },
    { title: "Product", links: [["Features", "#features"], ["AI", "#ai"], ["Mobile app", "#mobile"], ["Pricing", "#pricing"]] },
    { title: "Legal", links: [["Privacy", "#privacy"], ["Terms", "#terms"]] },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The operating system for billable work — built for consulting and professional service firms.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Billables. All rights reserved.
      </div>
    </footer>
  );
}
