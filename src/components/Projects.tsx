"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/content/portfolio";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Real-world problems. Real solutions. Built to make an impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card-bg border border-card-border rounded-2xl overflow-hidden card-hover project-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-52 overflow-hidden">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-60"></div>
                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-12 h-12 rounded-full bg-card-bg/90 border border-card-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                          aria-label="View GitHub"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-12 h-12 rounded-full bg-card-bg/90 border border-card-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                          aria-label="View Live"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-6xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tagline */}
                {"tagline" in project && (
                  <p className="text-primary/80 text-sm font-medium mb-3 italic">
                    {(project as { tagline: string }).tagline}
                  </p>
                )}

                {/* Description */}
                <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features — expandable */}
                {"features" in project && (
                  <div className="mb-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(expandedId === project.id ? null : project.id);
                      }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors duration-200 mb-2"
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedId === project.id ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Key Features
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        expandedId === project.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-1.5 pl-1">
                        {(project as { features: string[] }).features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted">
                            <span className="text-primary mt-0.5 shrink-0">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Achievement Badge */}
                {"achievement" in project && (
                  <div className="mb-4 px-3 py-2 bg-primary/5 border border-primary/15 rounded-lg">
                    <p className="text-xs text-primary font-medium">
                      {(project as { achievement: string }).achievement}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
