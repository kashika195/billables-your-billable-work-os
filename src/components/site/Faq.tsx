import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, Reveal, Section } from "./primitives";

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Most teams are live in under a week. Import clients and projects, invite your team, and start logging the same day.",
  },
  {
    q: "Can we migrate from spreadsheets?",
    a: "Yes. Bring your existing projects, clients and historical hours as CSVs and we'll map them during onboarding.",
  },
  {
    q: "Does it handle multiple currencies?",
    a: "Reimbursements and billing support multi-currency out of the box, with per-client billing preferences.",
  },
  {
    q: "How does approval work?",
    a: "Managers get a single queue of pending timesheets and reimbursements, with bulk approve and full audit history.",
  },
  {
    q: "What does the AI actually do?",
    a: "It drafts timesheet entries from plain language, sends reminders, categorises receipts and writes weekly summaries. You always confirm before anything is submitted.",
  },
  {
    q: "Is our data secure?",
    a: "Role-based access, granular permissions and audit trails as standard. SSO, SCIM and custom retention come with Enterprise.",
  },
];

export function Faq() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Questions, answered.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Something else on your mind? Ask us on the demo call.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-bold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
