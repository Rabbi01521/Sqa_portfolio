import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  Database,
  Server,
  Activity,
  Layers,
} from "lucide-react";

interface TestingType {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: string[];
}

interface TestingSectionProps {
  testingTypes?: TestingType[];
}

const TestingSection = ({
  testingTypes = [
    {
      title: "Manual Testing",
      description:
        "Comprehensive testing including requirement analysis, test planning, functional and GUI testing, with detailed test case writing and execution.",
      icon: <CheckCircle className="h-8 w-8 text-green-400" />,
      tools: [
        "Test Planning",
        "Requirement Analysis",
        "Bug Reporting",
        "Test Execution",
        "Test Metrics",
      ],
    },
    {
      title: "API Testing",
      description:
        "CRUD operations using dynamic parameters and HTML report generation using Newman for comprehensive API testing documentation.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      tools: [
        "Postman",
        "Newman",
        "JavaScript",
        "API Testing",
        "CRUD Operations",
      ],
    },
    {
      title: "Performance Testing",
      description:
        "Load and stress testing for web applications to identify performance bottlenecks and ensure optimal user experience under heavy traffic conditions.",
      icon: <Activity className="h-8 w-8 text-yellow-400" />,
      tools: [
        "JMeter",
        "BlazeMeter",
        "Load Testing",
        "Stress Testing",
        "Performance Analysis",
      ],
    },
    {
      title: "Web Automation",
      description:
        "Automated test scripts for web applications, including login verification, product cart functionality, and checkout processes to ensure seamless user journeys.",
      icon: <Database className="h-8 w-8 text-purple-400" />,
      tools: ["Selenium", "Cypress", "POM", "JavaScript", "Java"],
    },
    {
      title: "WordPress Development",
      description:
        "Website development and maintenance with focus on mobile compatibility, SEO optimization, and performance improvements for enhanced user experience.",
      icon: <Server className="h-8 w-8 text-red-400" />,
      tools: ["WordPress", "PHP", "JavaScript", "SEO", "Responsive Design"],
    },
    {
      title: "Project Management",
      description:
        "Agile methodology implementation with Jira for project tracking, along with version control using Git/GitHub for efficient collaboration.",
      icon: <Layers className="h-8 w-8 text-indigo-400" />,
      tools: ["Jira", "Agile", "Git/GitHub", "SDLC", "STLC"],
    },
  ],
}: TestingSectionProps) => {
  return (
    <section
      id="testing"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
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
            Testing Expertise
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My comprehensive approach to quality assurance covers all aspects of
            software testing, ensuring robust and reliable applications that
            meet the highest standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl h-full flex flex-col"
            >
              <div className="bg-gray-700/30 p-3 rounded-lg w-fit mb-4">
                {type.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {type.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">{type.description}</p>

              <div>
                <h4 className="text-sm font-medium text-indigo-400 mb-2">
                  Tools & Technologies:
                </h4>
                <ul className="space-y-1">
                  {type.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingSection;
