import React from "react";
import { Github, Linkedin, Twitter, Mail, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  name?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const Footer = ({
  name = "Md. Rabbi Hasan",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "rabbihasan0113@gmail.com",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black py-16 border-t border-gray-800 relative">
      {/* Back to top button */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="text-white font-bold text-2xl inline-block mb-4"
            >
              <span className="text-indigo-500">&lt;</span>
              {name}
              <span className="text-indigo-500">/&gt;</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Dedicated to ensuring software quality through comprehensive
              testing and automation. Specializing in test automation
              frameworks, API testing, and performance optimization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="bg-gray-800 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#testing"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Testing Expertise
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Test Automation</li>
              <li className="text-gray-400">API Testing</li>
              <li className="text-gray-400">Performance Testing</li>
              <li className="text-gray-400">Security Testing</li>
              <li className="text-gray-400">CI/CD Integration</li>
              <li className="text-gray-400">Test Strategy Consulting</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} {name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
