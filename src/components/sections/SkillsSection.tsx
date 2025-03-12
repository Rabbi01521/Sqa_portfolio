import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const SkillsSection = ({
  categories = [
    {
      name: "Test Automation",
      skills: [
        { name: "Selenium", icon: "🔄", level: 85, color: "#43B02A" },
        { name: "Cypress", icon: "🧪", level: 80, color: "#24B46E" },
        { name: "Manual Testing", icon: "📋", level: 90, color: "#2EAD33" },
        { name: "Test Planning", icon: "📝", level: 85, color: "#662D91" },
        { name: "Bug Reporting", icon: "🐞", level: 90, color: "#F89820" },
      ],
    },
    {
      name: "API Testing",
      skills: [
        { name: "Postman", icon: "📮", level: 90, color: "#FF6C37" },
        { name: "CRUD Operations", icon: "🔄", level: 85, color: "#6DB33F" },
        { name: "Newman", icon: "📊", level: 80, color: "#4CAF50" },
        { name: "API Security", icon: "🔒", level: 75, color: "#E535AB" },
        { name: "REST APIs", icon: "🌐", level: 85, color: "#85EA2D" },
      ],
    },
    {
      name: "Performance Testing",
      skills: [
        { name: "JMeter", icon: "⚡", level: 85, color: "#D22128" },
        { name: "BlazeMeter", icon: "🔥", level: 80, color: "#FF9E2A" },
        { name: "Load Testing", icon: "🏋️", level: 85, color: "#00A9E0" },
        { name: "Stress Testing", icon: "📈", level: 80, color: "#F44B21" },
        {
          name: "Performance Analysis",
          icon: "📊",
          level: 75,
          color: "#1CE783",
        },
      ],
    },
    {
      name: "Programming & Tools",
      skills: [
        { name: "JavaScript", icon: "📜", level: 80, color: "#F7DF1E" },
        { name: "Python", icon: "🐍", level: 75, color: "#3776AB" },
        { name: "Git/GitHub", icon: "📂", level: 85, color: "#F05032" },
        { name: "WordPress", icon: "📰", level: 90, color: "#21759B" },
        { name: "React", icon: "⚛️", level: 75, color: "#61DAFB" },
      ],
    },
  ],
}: SkillsSectionProps) => {
  return (
    <section
      id="skills"
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
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My technical toolkit spans test automation, API testing, performance
            testing, and DevOps, enabling me to implement comprehensive quality
            assurance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center mr-3 text-sm font-medium"
                          style={{
                            backgroundColor: `${skill.color}20`,
                            color: skill.color,
                          }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
