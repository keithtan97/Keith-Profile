import { motion } from "framer-motion";
import keithPhoto from "@/assets/keith-photo.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Animated background blobs */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
    </div>

    <div className="section-container pt-20 w-full">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Keith{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tan
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-4 max-w-lg">
            Building meaningful systems at the intersection of engineering, technology, and people.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            An Electrical & Electronic Engineering student passionate about growth, collaboration, and creating real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-7 py-3.5 rounded-xl border border-border text-foreground font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Glow ring behind photo */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <img
                src={keithPhoto}
                alt="Keith Tan"
                width={512}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex justify-center mt-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
