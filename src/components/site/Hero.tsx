import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import dashboard from "@/assets/dashboard.jpeg";
import mobileHome from "@/assets/mobile-home.jpeg";
import { BrowserFrame, Counter, PhoneFrame } from "./primitives";

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="hero-glow animate-drift pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI-powered billable work, built for consulting teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[0.95] font-bold sm:text-6xl md:text-7xl"
          >
            Work. Log. <span className="text-gradient-brand">Generate Bill.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Billables is the operating system for billable work. Projects, timesheets, reimbursements,
            approvals and billing — one platform, zero spreadsheets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
            >
              <Play className="h-4 w-4 text-primary" />
              Watch product tour
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="animate-float-slow">
            <BrowserFrame src={dashboard.url} alt="Billables dashboard showing work and admin actions" />
          </div>

          <div className="absolute -right-10 -bottom-16 hidden lg:block">
            <div className="animate-float-slow [animation-delay:1.2s]">
              <PhoneFrame src={mobileHome.url} alt="Billables mobile app home screen" className="w-[172px]" />
            </div>
          </div>

          <div className="glass-panel absolute -top-5 -left-4 hidden rounded-2xl px-4 py-3 text-left shadow-soft sm:block">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase">Hours approved</p>
            <p className="font-display text-xl font-bold">
              <Counter to={4069} />
            </p>
          </div>

          <div className="glass-panel absolute right-6 -bottom-6 rounded-2xl px-4 py-3 text-left shadow-soft lg:right-[19rem]">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase">Admin time saved</p>
            <p className="font-display text-xl font-bold text-accent-foreground">
              <Counter to={72} suffix="%" />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
