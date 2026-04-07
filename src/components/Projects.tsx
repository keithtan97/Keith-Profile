import AnimatedSection from "./AnimatedSection";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const techStack = ["Python", "OpenAI API", "Moodle", "PHP / MySQL", "JavaScript", "Learning Analytics"];

const Projects = () => (
  <section id="projects" className="section-padding bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">Things I've built and contributed to.</p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="card-elevated border-l-4 border-l-primary">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            Final Year Project · Nanyang Technological University
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-6">
            Ampeers – Adaptive AI-Based Learning Platform
          </h3>

          {/* Challenge */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">⚡ Challenge</h4>
            <p className="text-foreground/80 leading-relaxed">
              Traditional learning platforms are largely static and lack personalization, making it difficult for students to identify knowledge gaps and stay engaged in their learning process.
            </p>
          </div>

          {/* Approach */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">💡 Approach</h4>
            <p className="text-foreground/80 leading-relaxed mb-2">
              Designed an AI-based learning application for electronics — <span className="font-semibold text-foreground">Ampeers</span> — that personalises learning pathways based on student performance.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The system integrates a real-time chatbot, adaptive quizzes, and learning analytics to provide continuous feedback and targeted revision support.
            </p>
          </div>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">🚀 Impact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>Enabled a more engaging and structured learning experience by combining adaptive learning, AI, and gamification into a single LMS platform.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>Demonstrated the feasibility of integrating adaptive learning systems into existing LMS environments to improve student engagement and learning outcomes.</span>
              </li>
            </ul>
          </div>

          {/* My Role */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">👤 My Role</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>Led a team of 7 in the design and development of the platform, overseeing system architecture and integration.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>Developed the AI chatbot backend using Python and OpenAI API, and implemented core platform features including adaptive learning logic and gamification tools.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="accent-dot mt-2" />
                <span>Worked across both technical and product aspects to ensure the platform delivers meaningful user experience and practical value.</span>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">🛠 Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              onClick={() => window.open("https://ampeers.ntu.edu.sg", "_blank", "noopener,noreferrer")}
            >
              Explore Platform <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              View Project <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Projects;
