import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items?: NavItem[];
  logoText?: string;
}

const Navbar = ({
  items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Testing", href: "#testing" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  logoText = "John Doe",
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = items
        .map((item) => item.href)
        .filter((href) => href !== "#");

      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-black/80 backdrop-blur-md border-b border-gray-800/50" : "py-5 bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-white font-bold text-xl">
              <span className="text-indigo-500">&lt;</span>
              {logoText}
              <span className="text-indigo-500">/&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.href ? "text-white bg-indigo-600/20 border border-indigo-500/30" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        window.scrollTo({
                          top:
                            element.getBoundingClientRect().top +
                            window.scrollY -
                            100,
                          behavior: "smooth",
                        });
                      } else if (item.href === "#") {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <Button
              className="hidden md:flex bg-indigo-600 hover:bg-indigo-700 text-white"
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
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-20 px-4 md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 rounded-md text-center text-base font-medium transition-colors ${activeSection === item.href ? "text-white bg-indigo-600/20 border border-indigo-500/30" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        window.scrollTo({
                          top:
                            element.getBoundingClientRect().top +
                            window.scrollY -
                            100,
                          behavior: "smooth",
                        });
                      } else if (item.href === "#") {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4"
                onClick={() => {
                  setMobileMenuOpen(false);
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
                Let's Talk
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
