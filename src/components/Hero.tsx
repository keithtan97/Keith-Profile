import { motion } from "framer-motion";
import heroPlaceholder from "@/assets/hero-placeholder.jpg";

const Hero = () => (
  <section className="min-h-screen flex items-center section-container pt-20">
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
          Keith Tan
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-4 max-w-lg">
          Building meaningful systems at the intersection of engineering, technology, and people.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
          An Electrical & Electronic Engineering student passionate about growth, collaboration, and creating real-world impact. I enjoy working across disciplines, learning from diverse environments, and contributing to projects that matter.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center md:justify-end"
      >
        <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border shadow-lg">
          <img
            src={heroPlaceholder}
            alt="Keith Tan"
            width={512}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
