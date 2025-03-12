import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

interface AboutSectionProps {
  bio?: string;
  skills?: string[];
  experience?: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
}

const AboutSection = ({
  bio = "I want to build a professional career with a national and multinational company. I always try and will try to apply constructive deviation in my professional and personal life. With a background in QA testing, web automation, and WordPress development, I bring a comprehensive skill set to every project.",
  skills = [
    "Manual Testing",
    "Selenium",
    "Cypress",
    "Postman",
    "JMeter",
    "API Testing",
    "Performance Testing",
    "JavaScript",
    "Python",
    "React",
    "WordPress",
  ],
  experience = [
    {
      role: "Junior Executive - WordPress Developer",
      company: "Backspace",
      period: "11/2023 - 09/2024",
      description:
        "Manage website maintenance, updates, and troubleshooting. Ensure mobile and cross-browser compatibility. Implement basic SEO practices and optimize site performance.",
    },
    {
      role: "Tech Audit Engineer",
      company: "META",
      period: "10/2022 - 08/2023",
      description:
        "Conducted audits of technical systems to identify vulnerabilities. Performed testing and validation of technical controls, including penetration testing and vulnerability assessments.",
    },
    {
      role: "NOC Engineer",
      company: "Mango Teleservices Ltd.",
      period: "04/2022 - 07/2022",
      description:
        "Established and maintained network performance. Built network configurations and connections. Secured network system by establishing and enforcing policies.",
    },
  ],
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">{bio}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-indigo-600/50 pb-6"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <h4 className="text-xl font-medium text-white">
                      {job.role}
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-indigo-400">{job.company}</p>
                      <Badge variant="outline" className="text-gray-400">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-gray-400">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
