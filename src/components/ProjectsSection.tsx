import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Libra Legal Case Management System",
    description: "Led end-to-end QA for the Legal Case Management system. Designed and implemented an automation framework using Selenium, Java, and TestNG, integrated with Jenkins CI/CD.",
    tags: ["Selenium", "Java", "TestNG", "Jenkins"],
  },
  {
    title: "Z360 Customer App & CRM",
    description: "Conducted functional, regression, API, and UAT testing for the Z360 customer application and CRM systems. Validated complex workflows including GST filing.",
    tags: ["API Testing", "UAT", "Regression Testing"],
  },
  {
    title: "Aspen Dental",
    description: "Spearheaded testing efforts for dental practice management software. Created detailed test plans, and actively participated in Agile sprint planning to ensure timely defect resolution.",
    tags: ["Agile/Scrum", "Manual Testing", "Test Planning"],
  },
  {
    title: "Total Dental (EHR System)",
    description: "Developed 500+ test cases covering 90% of the Electronic Health Record system features. Worked extensively with regulatory compliance modules including ICD-9 to ICD-10 conversions and claims processing.",
    tags: ["EHR System", "Compliance Testing", "System Testing"],
  },
  {
    title: "AI Chat Solutions",
    description: "Tested and validated conversational AI workflows for Kommunicate & Zenius AI, ensuring smooth user experiences and accurate fallback responses.",
    tags: ["AI Testing", "Functional Testing"],
  }
];

const ProjectsSection = () => (
  <section id="projects" className="bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Key systems and applications I've tested</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <FolderGit2 size={24} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
