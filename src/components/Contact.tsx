import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="section-container text-center">
      <AnimatedSection>
        <div className="accent-line mx-auto mb-6" />
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle mx-auto mb-10">
          I'd love to connect — whether it's about a project, opportunity, or just a chat.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:keithtann97@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="tel:+6597332275"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            <Phone size={18} />
            +65 9733 2275
          </a>
          <a
            href="https://www.linkedin.com/in/tanhakleongkeith/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Contact;
