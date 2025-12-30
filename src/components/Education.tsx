"use client";

import { useEffect, useRef, useState } from "react";
import { education } from "@/content/portfolio";

export default function Education() {
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Scroll-based line animation
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      // Start growing when timeline enters viewport
      if (timelineTop < windowHeight && rect.bottom > 0) {
        const visibleStart = Math.max(0, windowHeight - timelineTop);
        const progress = Math.min(visibleStart / timelineHeight, 1);
        setLineHeight(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for card animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Static Background Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-card-border/30"></div>

          {/* Animated Growing Line */}
          <div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-100 ease-out"
            style={{ height: `${lineHeight}%` }}
          >
            {/* Glowing Arrow Head */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_4px_rgba(45,212,191,0.6)]"></div>
              <svg
                className="w-4 h-4 text-primary absolute -bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-all duration-500 ${
                    visibleCards.has(index)
                      ? "bg-primary scale-125 shadow-[0_0_12px_2px_rgba(45,212,191,0.5)]"
                      : "bg-card-border scale-100"
                  }`}
                ></div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`bg-card-bg border border-card-border rounded-xl p-6 card-hover transition-all duration-700 ease-out ${
                      visibleCards.has(index)
                        ? "opacity-100 translate-y-0 translate-x-0"
                        : `opacity-0 translate-y-8 ${
                            index % 2 === 0 ? "md:translate-x-8" : "md:-translate-x-8"
                          }`
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-primary font-medium mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-muted text-sm flex items-center gap-2 justify-start md:justify-end mb-3">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {edu.location}
                    </p>
                    <p className="text-muted text-sm">{edu.description}</p>
                    {"gpa" in edu && edu.gpa && (
                      <div className="mt-3 inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                        GPA: {edu.gpa}
                      </div>
                    )}
                    {"achievement" in edu && edu.achievement && (
                      <div className="mt-3 inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                        🏆 {edu.achievement}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
