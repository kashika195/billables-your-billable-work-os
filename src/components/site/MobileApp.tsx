import mobileHome from "@/assets/mobile-home.jpeg.asset.json";
import { Eyebrow, PhoneFrame, Reveal, Section } from "./primitives";

const points = [
  { title: "Log from anywhere", body: "Between meetings, in a cab, at a client site. Two taps and it's in." },
  { title: "Receipts on the spot", body: "Photograph the bill before it goes missing in a jacket pocket." },
  { title: "Approve on the move", body: "Managers clear the queue without opening a laptop." },
];

export function MobileApp() {
  return (
    <Section id="mobile">
      <div className="surface-card overflow-hidden">
        <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Mobile app</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Billables wherever work happens.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                The same workspace in your pocket — hours, expenses and approvals, no desk required.
              </p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.06}>
                  <div className="flex gap-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <div className="min-w-0">
                      <p className="font-display font-bold">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="flex justify-center">
            <div className="animate-float-slow">
              <PhoneFrame src={mobileHome.url} alt="Billables mobile app showing my work summary" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
