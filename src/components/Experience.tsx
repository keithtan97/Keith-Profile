import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Project Manager Intern",
    subtitle: "People & Product Development",
    company: "MET EV",
    location: "Ho Chi Minh City, Vietnam",
    period: "Dec 2024 – Aug 2025",
    points: [
      "Led multiple cross-functional intern teams on product development and market validation for MET EV's mobility platform",
      "Conducted extensive market research across Ho Chi Minh City universities, engaging students, dealers, and operators to assess EV adoption behaviour and infrastructure readiness",
      "Developed youth-driven market engagement initiatives with FPT University and participated in outreach programmes with RMIT and University of Economics",
      "Participated in stakeholder and partnership discussions with universities, coffee retail operators, and startup partners, contributing to pilot collaboration",
      "Consolidated field research insights to support early-stage EV adoption strategy and product positioning for MET EV's expansion",
    ],
  },
  {
    role: "Technical Officer",
    subtitle: "Transmission Projects Department",
    company: "SP Group",
    location: "Singapore",
    period: "Oct 2020 – Jun 2023",
    points: [
      "Oversaw execution of 66 kV / 22 kV transmission infrastructure projects across substations and public roadworks, including transformer replacement, switchgear installation, and cable diversion",
      "Coordinated on-site operations involving contractors, engineers, and safety personnel, leading toolbox meetings and managing installation sequencing",
      "Managed site constraints including underground utility clashes, traffic management, and public concerns, collaborating with LTA, PUB, and NEA",
      "Supported testing, commissioning, and energisation of transmission assets by preparing switching plans and verifying system readiness",
      "Facilitated site inspections and regulatory approvals, verifying installation quality to ensure compliance with safety and engineering standards",
    ],
  },
  {
    role: "Electrical Intern",
    company: "All Green Learning Center",
    location: "Khao Yai, Thailand",
    period: "Mar 2017 – Apr 2017",
    points: [
      "Implemented sustainability features, installed off-grid solar PV system with battery backup",
      "Designed and implemented about 40 energy-efficient lighting lamps throughout the learning center premises",
      "Conducted workshops and talks about sustainability to approximately 50–60 students across 3 institutions",
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
