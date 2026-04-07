import AnimatedSection from "./AnimatedSection";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, GraduationCap } from "lucide-react";

const techStack = ["Python", "OpenAI API", "Moodle", "PHP / MySQL", "JavaScript", "Learning Analytics"];

const Projects = () => (
  <section id="projects" className="section-padding bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest text-center mb-3">Featured Work</p>
        <h2 className="section-title text-center">Projects Built For Impact</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-12">
          {/* Visual */}
          <div className="rounded-2xl bg-gradient-to-br from-muted to-secondary aspect-[4/3] flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-primary/40" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Final Year Project [NTU]
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
              AI Based Learning Management System
            </h3>

            <p className="text-foreground/70 mb-2">
              <span className="font-semibold text-foreground">Problem:</span> Static study materials lack personalization, resulting in inefficient learning pathways.
            </p>

            <p className="text-foreground/70 mb-5">
              <span className="font-semibold text-primary">Solution:</span> Developed an adaptive AI learning application featuring a real-time chatbot and dynamic analytics tracking.
            </p>

            <div className="border-l-2 border-primary/40 pl-4 mb-6 bg-secondary/50 rounded-r-lg py-3 pr-4">
              <p className="font-semibold text-foreground text-sm mb-1">Impact & Contribution:</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Delivered personalized learning pathways to improve diagnostic testing efficiency. Architected the core AI recommendation engine and led end-to-end full-stack development.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs border-primary/40 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>

            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> View Live App
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Projects;
