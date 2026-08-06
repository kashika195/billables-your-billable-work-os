import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Showcase } from "@/components/site/Showcase";
import { Features } from "@/components/site/Features";
import { AISection } from "@/components/site/AISection";
import { MobileApp } from "@/components/site/MobileApp";
import { Benefits } from "@/components/site/Benefits";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { FinalCta, Footer } from "@/components/site/FinalCta";

const title = "Billables — The operating system for billable work";
const description =
  "AI-powered timesheets, projects, reimbursements and approvals for consulting and professional service firms. Bill faster, see more, do less admin.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Showcase />
        <Features />
        <AISection />
        <MobileApp />
        <Benefits />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
