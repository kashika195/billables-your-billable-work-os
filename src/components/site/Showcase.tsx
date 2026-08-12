import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import dashboard from "@/assets/dashboard.jpeg";
import timesheets from "@/assets/timesheets.jpeg";
import reimbursements from "@/assets/reimbursements.jpeg";
import { BrowserFrame, Eyebrow, Reveal, Section } from "./primitives";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -60]);

  return (
    <Section id="showcase">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>Product tour</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">The real product, not a mockup.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            A dashboard that answers "where does our billable time actually go?" in one glance.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-14">
        <motion.div style={{ y: y1 }} className="relative">
          <BrowserFrame src={dashboard} alt="Billables dashboard with my work and admin actions" />
          <div className="glass-panel absolute top-8 -left-3 hidden rounded-xl px-3 py-2 text-xs font-semibold shadow-soft md:block">
            Personal + admin view in one
          </div>
          <div className="glass-panel absolute -right-3 bottom-16 hidden rounded-xl px-3 py-2 text-xs font-semibold shadow-soft md:block">
            Approvals waiting on you
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div style={{ y: y2 }}>
            <Reveal>
              <BrowserFrame
                src={timesheets}
                alt="My timesheets screen listing entries and hours"
                label="app.billables.io/timesheets"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Timesheets — filter, group and submit in one pass.
              </p>
            </Reveal>
          </motion.div>
          <Reveal delay={0.1}>
            <BrowserFrame
              src={reimbursements}
              alt="My reimbursements screen listing expenses and statuses"
              label="app.billables.io/reimbursements"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              Reimbursements — every expense with its project, client and status.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
