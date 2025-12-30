import { hackathons } from "@/content/portfolio";

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-padding bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Hackathons</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Competitions and hackathons I&apos;ve participated in
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-card-bg border border-card-border rounded-xl p-6 card-hover relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full"></div>

              {/* Year Badge */}
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4">
                {hackathon.year}
              </span>

              {/* Hackathon Name */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {hackathon.name}
              </h3>

              {/* Project Name */}
              <h4 className="text-primary font-medium mb-3">
                Project: {hackathon.project}
              </h4>

              {/* Description */}
              <p className="text-muted text-sm mb-4">{hackathon.description}</p>

              {/* Achievement */}
              <div className="flex items-center gap-2 text-accent">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {hackathon.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
