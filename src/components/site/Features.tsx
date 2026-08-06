import projects from "@/assets/projects.jpeg.asset.json";
import timesheets from "@/assets/timesheets.jpeg.asset.json";
import reimbursements from "@/assets/reimbursements.jpeg.asset.json";
import clients from "@/assets/clients.jpeg.asset.json";
import projectManagement from "@/assets/project-management.jpeg.asset.json";
import { BrowserFrame, Reveal, Section } from "./primitives";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "projects",
    kicker: "Projects",
    title: "Manage internal and client projects effortlessly.",
    body: "Spin up a project, assign the team, set the type and watch hours land against it automatically.",
    points: ["Internal vs external", "Member assignment", "Archive without losing history"],
    image: projects.url,
    alt: "My Projects list with clients, types and statuses",
  },
  {
    id: "timesheets",
    kicker: "Timesheets",
    title: "Log work in seconds.",
    body: "Pick a project, type what you did, submit. Filters, grouping and totals do the rest.",
    points: ["Billable / non-billable", "Bulk submission", "Live totals by status"],
    image: timesheets.url,
    alt: "My Timesheets with entries, hours and statuses",
  },
  {
    id: "reimbursements",
    kicker: "Reimbursements",
    title: "Upload receipts. Track approvals. Get paid faster.",
    body: "Multi-currency expenses attached to the right project and client from the moment they're created.",
    points: ["Multi-currency", "Receipt attachments", "Status you can actually see"],
    image: reimbursements.url,
    alt: "My Reimbursements list with amounts and approval statuses",
  },
  {
    id: "clients",
    kicker: "Clients",
    title: "Manage organisations from one place.",
    body: "Every client, their projects and their timesheet preferences — searchable and always current.",
    points: ["Billable flags", "Projects per client", "Country and contact details"],
    image: clients.url,
    alt: "Client Management screen listing client organisations",
  },
  {
    id: "roles",
    kicker: "Roles & users",
    title: "Assign permissions with ease. Invite teammates instantly.",
    body: "Admins, approvers and consultants each see exactly what they should — nothing more.",
    points: ["Granular role management", "One-click invites", "Approver hierarchies"],
    image: projectManagement.url,
    alt: "Project management admin screen with member avatars and actions",
  },
];

export function Features() {
  return (
    <Section>
      <div className="space-y-24 md:space-y-32">
        {features.map((f, i) => (
          <div
            key={f.id}
            id={f.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <p className="text-sm font-semibold text-primary uppercase">{f.kicker}</p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{f.title}</h3>
              <p className="mt-4 text-lg text-muted-foreground">{f.body}</p>
              <ul className="mt-6 space-y-2.5">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-foreground">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} y={36} className={cn(i % 2 === 1 && "lg:order-1")}>
              <BrowserFrame src={f.image} alt={f.alt} label={`app.billables.io/${f.id}`} />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
