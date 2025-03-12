import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ProjectDetailsModal from "../projects/ProjectDetailsModal";

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
      title: "API Testing Using Postman",
      description:
        "Implemented CRUD operations using dynamic parameters and generated HTML reports using Newman for comprehensive API testing documentation.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      technologies: [
        "Postman",
        "Newman",
        "JavaScript",
        "API Testing",
        "CRUD Operations",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Performance Testing Using JMeter",
      description:
        "Conducted load and stress testing for web applications to identify performance bottlenecks and ensure optimal user experience under heavy traffic conditions.",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
      technologies: [
        "JMeter",
        "BlazeMeter",
        "Load Testing",
        "Stress Testing",
        "Performance Analysis",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Web Automation Using Selenium",
      description:
        "Developed automated test scripts for web applications, including login verification, product cart functionality, and checkout processes to ensure seamless user journeys.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      technologies: [
        "Selenium",
        "Java",
        "TestNG",
        "Web Automation",
        "E-commerce Testing",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Web Automation Using Cypress",
      description:
        "Implemented Page Object Model (POM) architecture for test automation, creating user page and login page tests with improved maintainability and scalability.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      technologies: [
        "Cypress",
        "JavaScript",
        "POM",
        "Web Automation",
        "Front-end Testing",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Manual Testing Project",
      description:
        "Conducted comprehensive manual testing including requirement analysis, test planning, functional and GUI testing, with detailed test case writing and execution.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      technologies: [
        "Test Planning",
        "Requirement Analysis",
        "Bug Reporting",
        "Test Execution",
        "Test Metrics",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "WordPress Website Development",
      description:
        "Developed and maintained WordPress websites with focus on mobile compatibility, SEO optimization, and performance improvements for enhanced user experience.",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "SEO",
        "Responsive Design",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
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
                  <ProjectDetailsModal
                    project={project}
                    trigger={
                      <Button
                        variant="link"
                        className="text-indigo-400 p-0 h-auto font-normal hover:text-indigo-300"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    }
                  />

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
