import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-primary/20">
          Senior Test Engineer
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">Kavitha J</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          QA Automation Specialist | Quality Leadership
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
          11+ years of experience ensuring software quality through automation, API testing, and CI/CD integration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Experience <ArrowDown size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1Jq2auU98sjIRT_qkedzaWoV35RL5NLFV/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-accent transition-colors"
          >
            Hire Me <Briefcase size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
