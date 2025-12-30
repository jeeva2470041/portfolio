import { aboutMe } from "@/content/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{aboutMe.title}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow">
                <div className="absolute inset-2 rounded-xl bg-card-bg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold text-background">
                        JG
                      </span>
                    </div>
                    <p className="text-muted text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-muted leading-relaxed mb-6 text-lg">
              {aboutMe.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {aboutMe.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
