import AnimatedSection from "./AnimatedSection";

const points = [
  "Driven by the belief that meaningful systems are built through intentional engineering and human-centred thinking.",
  "Thrive in growth environments — constantly seeking to learn, adapt, and take ownership of challenges.",
  "People-first approach to work: I believe the best outcomes come from trust, clear communication, and shared purpose.",
  "Experienced across technical execution, project coordination, and cross-functional collaboration with diverse stakeholders.",
  "International exposure through hands-on projects in Vietnam and Thailand, building adaptability and cultural awareness.",
  "Outside of engineering, I find energy in music, photography, and connecting with people from all walks of life.",
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mb-10">A little about who I am beyond the resume.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-4">
        {points.map((point, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <span className="accent-dot mt-2" />
              <p className="text-foreground/85 leading-relaxed">{point}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
