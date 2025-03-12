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
  bio = "I'm a creative developer with a passion for building immersive digital experiences. With a background in both design and development, I bring a unique perspective to every project.",
  skills = [
    "React",
    "TypeScript",
    "Three.js",
    "WebGL",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "Next.js",
    "GraphQL",
    "UI/UX Design",
  ],
  experience = [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Lead developer for interactive web applications with focus on 3D experiences and animations.",
    },
    {
      role: "UI/UX Developer",
      company: "DesignStudio",
      period: "2018 - 2021",
      description:
        "Created engaging user interfaces and experiences for various clients across different industries.",
    },
    {
      role: "Web Developer",
      company: "StartupX",
      period: "2016 - 2018",
      description:
        "Developed responsive websites and web applications for early-stage startups.",
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
