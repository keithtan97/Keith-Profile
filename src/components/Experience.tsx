import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Project Manager Intern",
    subtitle: "People & Product Development",
    company: "MET EV",
    location: "Ho Chi Minh City, Vietnam",
    period: "Dec 2024 – Aug 2025",
    points: [
      "Led cross-functional intern teams on product development and market validation for an EV mobility platform",
      "Drove field research across Ho Chi Minh City universities, engaging students, dealers, and operators to assess EV adoption readiness",
      "Initiated youth-driven market engagement programmes with FPT University, RMIT, and University of Economics",
      "Contributed to stakeholder discussions with university partners, retail operators, and startup collaborators to shape pilot strategy",
      "Synthesised field insights into actionable recommendations for early-stage EV adoption and market positioning",
    ],
  },
  {
    role: "Technical Officer",
    subtitle: "Transmission Projects Department",
    company: "SP Group",
    location: "Singapore",
    period: "Oct 2020 – Jun 2023",
    points: [
      "Managed execution of 66 kV / 22 kV transmission infrastructure projects including transformer replacement, switchgear installation, and cable diversion",
      "Coordinated multi-party site operations with contractors, engineers, and safety teams — led toolbox meetings and sequenced installations",
      "Navigated complex site constraints involving underground utilities, traffic management, and public agency coordination (LTA, PUB, NEA)",
      "Supported testing, commissioning, and energisation of transmission assets through switching plans and system readiness verification",
      "Ensured installation quality and regulatory compliance through structured site inspections and approval processes",
    ],
  },
  {
    role: "Electrical Intern",
    company: "All Green Learning Center",
    location: "Khao Yai, Thailand",
    period: "Mar 2017 – Apr 2017",
    points: [
      "Installed an off-grid solar PV system with battery backup, delivering sustainable energy to the learning centre",
      "Designed and implemented 40+ energy-efficient lighting fixtures across the facility",
      "Conducted sustainability workshops for 50–60 students across 3 institutions, bridging technical knowledge with community impact",
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
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary text-sm font-medium">{exp.company}</p>
                {exp.subtitle && (
                  <p className="text-muted-foreground text-xs">{exp.subtitle}</p>
                )}
                <p className="text-muted-foreground text-xs mb-3">{exp.location}</p>
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
