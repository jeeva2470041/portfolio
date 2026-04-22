import { skills } from "@/content/portfolio";
import SkillPill from "@/components/SkillPill";

type Skill = { name: string; context: string };
type DbSkill = { name: string; context: string; type: string };

// Icons for each category header
function CategoryIcon({ type }: { type: string }) {
  if (type === "Languages") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (type === "Frontend") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "Backend") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    );
  }
  if (type === "Databases") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    );
  }
  if (type === "Tools & Platforms") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  // Dev Skills
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

// Standard skill card: icon + name + context side by side
function SkillCard({ title, skillList }: { title: string; skillList: Skill[] }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
          <CategoryIcon type={title} />
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {skillList.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 group">
            <SkillPill name={skill.name} iconOnly />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {skill.name}
              </p>
              <p className="text-xs text-muted leading-snug">{skill.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Badge colour per DB type
const DB_BADGE: Record<string, string> = {
  Relational: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  NoSQL:      "bg-green-500/15 text-green-400 border-green-500/30",
  "Graph DB": "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

// Highlighted database card (full row)
function DatabaseCard({ skillList }: { skillList: DbSkill[] }) {
  return (
    <div className="bg-card-bg border border-primary/25 rounded-2xl p-6 card-hover flex flex-col gap-6 md:col-span-2 lg:col-span-4">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
            <CategoryIcon type="Databases" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Databases</h3>
            <p className="text-xs text-muted mt-0.5">Knows when to pick the right database for the job</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {Object.entries(DB_BADGE).map(([label, cls]) => (
            <span key={label} className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${cls}`}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-card-border bg-background/40 hover:border-primary/40 transition-colors duration-300 group"
          >
            <SkillPill name={skill.name} />
            <div>
              <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {skill.name}
                </p>
                <span className={`px-1.5 py-0.5 rounded-full border text-[9px] font-bold ${DB_BADGE[skill.type] ?? ""}`}>
                  {skill.type}
                </span>
              </div>
              <p className="text-xs text-muted leading-snug">{skill.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dev Skills — chip-style row
function DevSkillsCard({ skillList }: { skillList: Skill[] }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-2xl p-6 card-hover md:col-span-2 lg:col-span-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
          <CategoryIcon type="Dev Skills" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Development Skills</h3>
          <p className="text-xs text-muted mt-0.5">Practical capabilities that go beyond individual tools</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col gap-1.5 p-4 rounded-xl border border-card-border bg-background/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
          >
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {skill.name}
            </span>
            <span className="text-xs text-muted leading-snug">{skill.context}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            From writing clean code to choosing the right database — here&apos;s what I bring to the table.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 — 4 standard cards */}
          <SkillCard title="Languages" skillList={skills.languages} />
          <SkillCard title="Frontend" skillList={skills.frontend} />
          <SkillCard title="Backend" skillList={skills.backend} />
          <SkillCard title="Tools & Platforms" skillList={skills.tools} />

          {/* Row 2 — Databases (full width) */}
          <DatabaseCard skillList={skills.databases as DbSkill[]} />

          {/* Row 3 — Dev Skills (full width, optional) */}
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(skills as any).devSkills?.length > 0 && (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <DevSkillsCard skillList={(skills as any).devSkills} />
          )}
        </div>
      </div>
    </section>
  );
}
