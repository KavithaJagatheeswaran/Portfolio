import { motion } from "framer-motion";
import { Briefcase, Award, Layers } from "lucide-react";
import KaviImage from "../images/kavi_20s.png";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "11+" },
  { icon: Layers, label: "Domains Covered", value: "3+" },
  { icon: Award, label: "Awards Won", value: "3" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-16">
      <div className="section-container max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Title */}
          <h2 className="section-title text-3xl font-bold text-center mb-2">
            About Me
          </h2>

          <p className="section-subtitle text-center text-muted-foreground mb-12">
            Passionate about quality and automation
          </p>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Profile Image */}
            <motion.img
              src={KaviImage}
              alt="Kavitha"
              className="rounded-xl w-full max-w-sm mx-auto shadow-xl object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Right Content */}
            <div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">

                {stats.map((s, index) => (
                  <motion.div
                    key={s.label}
                    className="skill-card flex items-center gap-3 p-4 rounded-xl shadow-sm bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >

                    <div className="p-2 rounded-lg bg-accent text-primary">
                      <s.icon size={22} />
                    </div>

                    <div>
                      <p className="text-xl font-bold text-foreground">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {s.label}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base max-w-xl">
                I am a Senior Test Engineer with over 11 years of experience in
                manual and automation testing across legal-tech, CRM, and
                healthcare domains. I specialize in building automation
                frameworks, improving regression cycles, and ensuring
                high-quality software delivery.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base mt-4 max-w-xl">
                My experience includes Selenium automation, API testing,
                CI/CD pipelines, Playwright, and Agile collaboration.
                I focus on creating scalable automation frameworks
                that help teams deliver reliable software faster.
              </p>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;