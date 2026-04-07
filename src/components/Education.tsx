import AnimatedSection from "./AnimatedSection";

const Education = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Education</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="card-elevated mt-8 max-w-xl">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Singapore Polytechnic
          </h3>
          <p className="text-muted-foreground text-sm mt-1">Electrical & Electronic Engineering</p>
          <p className="text-primary text-sm font-medium mt-1">GPA: 3.619 / 4</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="card-elevated mt-4 max-w-xl">
          <h3 className="font-display text-lg font-semibold text-foreground">
            ITE College West
          </h3>
          <p className="text-primary text-sm font-medium mt-1">GPA: 4 / 4</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Education;
