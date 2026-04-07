import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Engineering",
    skills: ["Electrical Systems", "Circuit Design", "Power Transmission", "Arduino / Microcontrollers"],
  },
  {
    category: "Programming",
    skills: ["Python", "HTML / CSS", "JavaScript", "System Architecture"],
  },
  {
    category: "Tools",
    skills: ["Moodle", "OpenAI API", "Git", "Microsoft Office"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Collaboration", "Project Coordination", "Cross-Cultural Teamwork"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle mb-12">What I bring to the table.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-elevated h-full">
              <h3 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <li key={j} className="text-foreground/80 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
