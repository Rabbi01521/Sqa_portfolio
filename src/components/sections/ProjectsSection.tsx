import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = [
    {
      id: 1,
      title: "E-commerce Test Automation Framework",
      description:
        "Developed a comprehensive Selenium-based test automation framework for an e-commerce platform, reducing regression testing time by 70%.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      technologies: ["Selenium", "Java", "TestNG", "Jenkins", "Allure Reports"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Banking API Test Suite",
      description:
        "Created an extensive API testing suite for a banking application, ensuring data integrity and security compliance across all endpoints.",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
      technologies: ["Postman", "Newman", "JavaScript", "Jenkins", "OAuth"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Healthcare App Performance Testing",
      description:
        "Implemented performance testing for a healthcare application, identifying and resolving bottlenecks to support 10,000+ concurrent users.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      technologies: ["JMeter", "Grafana", "InfluxDB", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Mobile App Automation Framework",
      description:
        "Built a cross-platform mobile testing framework using Appium, supporting both iOS and Android testing with a single codebase.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      technologies: ["Appium", "Java", "TestNG", "Browserstack", "Maven"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "CI/CD Pipeline for Test Automation",
      description:
        "Designed and implemented a CI/CD pipeline that automatically runs tests on code commits and generates detailed reports for stakeholders.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      technologies: [
        "Jenkins",
        "Docker",
        "GitHub Actions",
        "Selenium Grid",
        "Allure",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Security Testing Framework",
      description:
        "Developed an automated security testing framework to identify vulnerabilities in web applications using industry-standard tools and custom scripts.",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      technologies: ["OWASP ZAP", "Python", "Burp Suite", "Docker", "Jenkins"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
}: ProjectsSectionProps) => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects"
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
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of my recent testing projects, showcasing my expertise
            in test automation, API testing, and quality assurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-indigo-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs text-indigo-400 border-indigo-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="link"
                    className="text-indigo-400 p-0 h-auto font-normal hover:text-indigo-300"
                    asChild
                  >
                    <a href="#project-details">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>

                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {featuredProjects.length < projects.length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Featured Projects" : "View All Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
