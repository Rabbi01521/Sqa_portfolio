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
      title: "Functional Testing",
      description:
        "Comprehensive testing to ensure all features work as expected across different scenarios and user flows.",
      icon: <CheckCircle className="h-8 w-8 text-green-400" />,
      tools: ["Selenium", "Cypress", "TestNG", "JUnit", "Manual Testing"],
    },
    {
      title: "API Testing",
      description:
        "Thorough validation of API endpoints, request/response structures, error handling, and integration points.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      tools: ["Postman", "REST Assured", "SoapUI", "Swagger", "JMeter"],
    },
    {
      title: "Performance Testing",
      description:
        "Evaluating system performance under various load conditions to identify bottlenecks and optimize response times.",
      icon: <Activity className="h-8 w-8 text-yellow-400" />,
      tools: ["JMeter", "Gatling", "LoadRunner", "New Relic", "Lighthouse"],
    },
    {
      title: "Database Testing",
      description:
        "Validating data integrity, stored procedures, and database performance to ensure reliable data operations.",
      icon: <Database className="h-8 w-8 text-purple-400" />,
      tools: ["SQL", "MongoDB Tools", "Liquibase", "DbUnit", "Data Generators"],
    },
    {
      title: "Security Testing",
      description:
        "Identifying vulnerabilities and ensuring the application is protected against common security threats.",
      icon: <Server className="h-8 w-8 text-red-400" />,
      tools: [
        "OWASP ZAP",
        "Burp Suite",
        "Nessus",
        "SonarQube",
        "Dependency Check",
      ],
    },
    {
      title: "End-to-End Testing",
      description:
        "Validating complete user workflows from start to finish across all integrated components and systems.",
      icon: <Layers className="h-8 w-8 text-indigo-400" />,
      tools: [
        "Selenium",
        "Cypress",
        "Playwright",
        "TestCafe",
        "Robot Framework",
      ],
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
