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
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <img src={ampeersLogo} alt="Ampeers Logo" className="relative max-w-[280px] md:max-w-[320px] object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 [mix-blend-mode:multiply]" />
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Final Year Project [NTU]
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">
              Ampeers – AI-Powered Adaptive Learning Platform
            </h3>
            <p className="text-foreground/60 text-sm mb-6">
              Built to transform static learning into a personalised, engaging study experience.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Challenge</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Traditional learning platforms are largely static and do not adapt to individual student needs, making it difficult to identify knowledge gaps and stay engaged.
                </p>
              </div>

              <div>
                <p className="font-semibold text-primary text-sm mb-1">Approach</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Designed and developed Ampeers, an AI-powered adaptive learning platform that personalises learning pathways based on student performance. The system integrates a real-time chatbot, adaptive quizzes, and learning analytics to provide continuous feedback and targeted revision support.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4 bg-secondary/50 rounded-r-lg py-3 pr-4">
                <p className="font-semibold text-foreground text-sm mb-1">Impact</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Improved learning engagement by combining AI, gamification, and structured content into a single platform. Demonstrates how adaptive learning can be integrated into existing LMS environments to support more effective learning.
                </p>
              </div>
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
              onClick={() => window.open("https://www.ampeers.io/", "_blank", "noopener,noreferrer")}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Explore Platform
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Projects;
