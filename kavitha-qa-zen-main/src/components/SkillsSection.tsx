import { motion } from "framer-motion";
import { Bot, Globe, Code2, GitBranch, BarChart3, Users } from "lucide-react";

const categories = [
  {
    title: "Automation",
    icon: Bot,
    skills: ["Selenium", "Cucumber (Java)", "TestNG", "Playwright"],
  },
  {
    title: "API Testing",
    icon: Globe,
    skills: ["Rest Assured", "Postman"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "SQL"],
  },
  {
    title: "DevOps / Tools",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub", "Jira", "Scrum"],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Mixpanel", "Elasticsearch"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Stakeholder Management", "Risk Assessment", "Cross-team Collaboration"],
  },
];

const SkillsSection = () => (
  <section id="skills">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="skill-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent text-primary">
                <cat.icon size={20} />
              </div>
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
