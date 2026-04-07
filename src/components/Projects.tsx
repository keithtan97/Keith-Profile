import AnimatedSection from "./AnimatedSection";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import ampeersLogo from "@/assets/ampeers-logo.png";

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
          <div className="flex items-center justify-center">
            <div className="relative group">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative rounded-2xl bg-gradient-to-br from-card to-secondary border border-border/60 shadow-2xl aspect-[4/3] flex items-center justify-center p-12 overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
                <img src={ampeersLogo} alt="Ampeers Logo" className="relative max-h-full max-w-[75%] object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
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
