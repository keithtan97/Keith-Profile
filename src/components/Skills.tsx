import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Hardware & Instrumentation",
    skills: ["Digital Multimeter", "Function Generator", "Oscilloscope", "Soldering"],
  },
  {
    category: "Engineering Skills",
    skills: ["Electrical Wiring & Installation", "Equipment Installation & Monitoring", "Solar PV Systems"],
  },
  {
    category: "CAD & Simulation Tools",
    skills: ["MATLAB", "Simulink", "LTspice", "PLECS", "Jupyter Notebook", "AutoCAD"],
  },
  {
    category: "Programming",
    skills: ["Python", "C", "PHP / HTML / CSS / JavaScript"],
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Chinese (Fluent)", "Hokkien (Conversational)"],
  },
  {
    category: "Interests",
    skills: ["Guitar & Singing", "Plant & Animal Care", "Photography / Videography"],
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
