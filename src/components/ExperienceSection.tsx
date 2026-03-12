import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const jobs = [
  {
    title: "Senior Test Engineer",
    company: "Uber9 Business Process Pvt Ltd",
    period: "2021 – Present",
    items: [
      "Led end-to-end QA for Libra Legal Case Management system",
      "Tested Z360 customer application and CRM systems",
      "Designed automation framework using Selenium, Java, and TestNG",
      "Integrated automation with Jenkins CI/CD",
      "Validated GST filing workflows",
      "Tested AI chat solutions (Kommunicate & Zenius AI)",
      "Conducted functional, regression, API, and UAT testing",
    ],
  },
  {
    title: "Software Test Engineer",
    company: "Telliant Systems India Pvt Ltd",
    period: "2017 – 2021",
    project: "Aspen Dental",
    items: [
      "Created detailed test plans and test cases",
      "Participated in Agile sprint planning and meetings",
      "Collaborated with developers to resolve defects",
      "Conducted onboarding sessions for new team members",
    ],
  },
  {
    title: "Junior Test Engineer",
    company: "Telliant Systems India Pvt Ltd",
    period: "2014 – 2017",
    project: "Total Dental (EHR System)",
    items: [
      "Developed 500+ test cases covering 90% of features",
      "Performed functional, integration, and system testing",
      "Worked with regulatory compliance modules including ICD-9 to ICD-10 and claims processing",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-4 top-5 w-5 h-5 rounded-full bg-primary border-4 border-background" />

              <div className="skill-card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 size={14} />
                      <span>{job.company}</span>
                    </div>
                    {job.project && (
                      <p className="text-sm text-primary font-medium mt-1">
                        Project: {job.project}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    <Calendar size={14} /> {job.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex gap-2 before:content-['▹'] before:text-primary before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
