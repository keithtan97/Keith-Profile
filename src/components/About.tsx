import AnimatedSection from "./AnimatedSection";

const points = [
  "An engineering student with experience in both infrastructure projects and digital systems.",
  "I thrive in growth environments where I can learn, adapt, and contribute meaningfully.",
  "A strong people-oriented individual who values collaboration, communication, and shared purpose.",
  "My experiences span technical execution, project coordination, and cross-functional teamwork.",
  "I enjoy working across cultures and environments, with international exposure in Vietnam.",
  "Outside of work, I am passionate about music, creativity, and connecting with people.",
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
