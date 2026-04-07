import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Technical Officer",
    company: "SP Group",
    points: [
      "Worked on large-scale power transmission infrastructure",
      "Coordinated on-site operations, contractors, and safety",
      "Supported installation, testing, and commissioning of systems",
      "Gained real-world exposure to engineering execution",
    ],
  },
  {
    role: "Project Manager Intern",
    company: "MET EV",
    points: [
      "Worked on EV mobility solutions in Vietnam",
      "Conducted market research and user engagement",
      "Collaborated across teams on product and strategy",
      "Exposure to international and fast-paced environments",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mb-12">Where I've worked and what I've learned.</p>
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground/80 text-sm">
                      <span className="accent-dot mt-1.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
