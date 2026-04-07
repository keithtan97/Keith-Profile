import AnimatedSection from "./AnimatedSection";

const featured = {
  title: "Ampeers – AI Learning Platform",
  tag: "Featured Project",
  points: [
    "AI-powered adaptive and gamified learning platform",
    "Built on Moodle with custom system architecture",
    "Integrated AI chatbot using Python backend and OpenAI API",
    "Designed to support personalised learning and student engagement",
    "Combines engineering, education, and user experience",
  ],
};

const other = [
  {
    title: "PDF to H5P Converter",
    points: [
      "Converted static learning materials into interactive content",
      "Automated workflow for better learning accessibility",
      "Integrated into platform environment",
    ],
  },
  {
    title: "Electronics & Arduino Projects",
    points: [
      "Hands-on experience with circuit design and microcontrollers",
      "Applied engineering fundamentals to practical builds",
    ],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">Things I've built and contributed to.</p>
      </AnimatedSection>

      {/* Featured */}
      <AnimatedSection>
        <div className="card-elevated mb-8 border-l-4 border-l-primary">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">{featured.tag}</span>
          <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-4">{featured.title}</h3>
          <ul className="space-y-2">
            {featured.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* Other */}
      <div className="grid md:grid-cols-2 gap-6">
        {other.map((proj, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-elevated h-full">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{proj.title}</h3>
              <ul className="space-y-2">
                {proj.points.map((p, j) => (
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
  </section>
);

export default Projects;
