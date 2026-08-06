import { FileSpreadsheet, Mail, MessageCircle, Stamp, Landmark, Zap } from "lucide-react";
import { Eyebrow, Reveal, Section } from "./primitives";

const chain = [
  { icon: FileSpreadsheet, label: "Excel", note: "Version 7_final_v2.xlsx" },
  { icon: Mail, label: "Emails", note: "\"Did you send hours?\"" },
  { icon: MessageCircle, label: "WhatsApp", note: "Receipts in a group chat" },
  { icon: Stamp, label: "Approvals", note: "Waiting on 4 managers" },
  { icon: Landmark, label: "Finance", note: "Reconciling by hand" },
  { icon: Zap, label: "Chaos", note: "Invoices go out late" },
];

const pains = [
  { title: "Billing slips weeks", body: "Hours arrive late, so invoices go out late and cash comes in later." },
  { title: "Nobody trusts the numbers", body: "Three versions of the truth across sheets, inboxes and chats." },
  { title: "Managers chase people", body: "Approvals live in DMs and get forgotten until month end." },
  { title: "Finance does data entry", body: "Copy, paste, reconcile, repeat — every single cycle." },
];

export function Problem() {
  return (
    <Section id="problem">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>The old way</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Still managing billable work in spreadsheets?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            Most firms don't have a timesheet problem. They have six tools pretending to be one.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {chain.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.06}>
            <div className="surface-card relative h-full p-5">
              <span className="absolute top-4 right-4 text-xs font-semibold text-muted-foreground">
                0{i + 1}
              </span>
              <step.icon
                className={i === chain.length - 1 ? "h-6 w-6 text-destructive" : "h-6 w-6 text-primary"}
              />
              <p className="mt-4 font-display text-base font-bold">{step.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="h-full rounded-3xl bg-muted p-6">
              <p className="font-display text-lg font-bold">{p.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
