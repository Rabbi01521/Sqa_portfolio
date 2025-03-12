import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

interface ProjectDetailsModalProps {
  project: Project;
  trigger: React.ReactNode;
}

const ProjectDetailsModal = ({
  project,
  trigger,
}: ProjectDetailsModalProps) => {
  // Default long description if not provided
  const longDescription =
    project.longDescription ||
    `${project.description} This project demonstrates my expertise in ${project.technologies.join(", ")}. I focused on creating a comprehensive solution that addresses real-world testing challenges.`;

  // Default challenges if not provided
  const challenges = project.challenges || [
    "Implementing a scalable architecture that could handle complex test scenarios",
    "Ensuring comprehensive test coverage across multiple components",
    "Optimizing performance for efficient test execution",
    "Creating detailed documentation for future maintenance",
  ];

  // Default solutions if not provided
  const solutions = project.solutions || [
    `Utilized ${project.technologies[0]} to create a robust testing framework`,
    `Implemented best practices for ${project.technologies.slice(1, 3).join(" and ")}`,
    "Developed modular components for improved maintainability",
    "Created comprehensive documentation with examples",
  ];

  // Default results if not provided
  const results = project.results || [
    "Significantly improved test coverage and reliability",
    "Reduced testing time by automating repetitive tasks",
    "Enhanced documentation for better knowledge sharing",
    "Implemented a maintainable solution for long-term use",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl bg-gray-900 border border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Detailed project information
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-white mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Overview</h3>
              <p className="text-gray-300">{longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Challenges
              </h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Solutions</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {solutions.map((solution, i) => (
                  <li key={i}>{solution}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">Results</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
