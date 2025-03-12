import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import Avatar3D from "./Avatar3D";
import AnimatedText from "./AnimatedText";
import ProjectStatus from "./ProjectStatus";
import ScrollIndicator from "./ScrollIndicator";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Code,
  CheckCircle,
  Database,
  Shield,
  Zap,
  BarChart,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  available?: boolean;
  currentProject?: string;
  upcomingProjects?: Array<{ name: string; date: string }>;
}

const HeroSection = ({
  name = "John Doe",
  title = "Senior QA Engineer",
  tagline = "Ensuring software quality through comprehensive testing and automation",
  available = true,
  currentProject = "E-commerce Testing Suite",
  upcomingProjects = [
    { name: "Banking App Automation", date: "June 15" },
    { name: "Healthcare API Testing", date: "July 10" },
  ],
}: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black pt-28">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8 lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient">
                  {name}
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-400 mb-4">
                {title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {tagline}
              </p>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 bg-indigo-900/20 backdrop-blur-sm p-3 rounded-lg border border-indigo-500/20">
                <Code className="h-5 w-5 text-indigo-400" />
                <span className="text-sm text-white">Test Automation</span>
              </div>
              <div className="flex items-center space-x-3 bg-purple-900/20 backdrop-blur-sm p-3 rounded-lg border border-purple-500/20">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-white">Quality Assurance</span>
              </div>
              <div className="flex items-center space-x-3 bg-blue-900/20 backdrop-blur-sm p-3 rounded-lg border border-blue-500/20">
                <Database className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-white">API Testing</span>
              </div>
              <div className="flex items-center space-x-3 bg-red-900/20 backdrop-blur-sm p-3 rounded-lg border border-red-500/20">
                <Shield className="h-5 w-5 text-red-400" />
                <span className="text-sm text-white">Security Testing</span>
              </div>
              <div className="flex items-center space-x-3 bg-yellow-900/20 backdrop-blur-sm p-3 rounded-lg border border-yellow-500/20">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-white">Performance</span>
              </div>
              <div className="flex items-center space-x-3 bg-green-900/20 backdrop-blur-sm p-3 rounded-lg border border-green-500/20">
                <BarChart className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white">CI/CD Integration</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-600/20 border border-indigo-500/20"
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  if (projectsSection) {
                    window.scrollTo({
                      top:
                        projectsSection.getBoundingClientRect().top +
                        window.scrollY -
                        100,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    window.scrollTo({
                      top:
                        contactSection.getBoundingClientRect().top +
                        window.scrollY -
                        100,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <ProjectStatus
                available={available}
                currentProject={currentProject}
                upcomingProjects={upcomingProjects}
              />
            </motion.div>
          </div>

          {/* Right Column - 3D Avatar */}
          <div className="flex justify-center items-center lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl transform scale-125" />
              <Avatar3D scale={1.1} rotationSensitivity={7} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
