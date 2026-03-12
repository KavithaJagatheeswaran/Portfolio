import { motion } from "framer-motion";
import { Trophy, Star, DollarSign, GraduationCap } from "lucide-react";

const achievements = [
  { icon: Star, title: "Star Performer Award", desc: "Recognized for high-quality delivery" },
  { icon: Trophy, title: "Outstanding Performance", desc: "Received recognition for exceptional work" },
  { icon: DollarSign, title: "Cash Award", desc: "EHR requirement analysis and testing excellence" },
];

const AchievementsSection = () => (
  <section id="achievements">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognition and milestones</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="skill-card text-center"
          >
            <div className="inline-flex p-3 rounded-xl bg-accent text-primary mb-3">
              <a.icon size={28} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="skill-card flex items-center gap-4 max-w-md"
      >
        <div className="p-3 rounded-lg bg-accent text-primary">
          <GraduationCap size={28} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Master of Computer Applications (MCA)</h3>
          <p className="text-sm text-muted-foreground">Completed in 2013</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
