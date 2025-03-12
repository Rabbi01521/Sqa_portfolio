import React from "react";
import HeroSection from "./hero/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import TestingSection from "./sections/TestingSection";
import CertificationsSection from "./sections/CertificationsSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const Home = () => {
  // Personalized data
  const personalInfo = {
    name: "John Doe",
    title: "Senior QA Engineer",
    tagline:
      "Ensuring software quality through comprehensive testing and automation",
    available: true,
    currentProject: "E-commerce Testing Suite",
    upcomingProjects: [
      { name: "Banking App Automation", date: "June 15" },
      { name: "Healthcare API Testing", date: "July 10" },
    ],
    bio: "I'm a dedicated QA Engineer with over 5 years of experience in software testing and quality assurance. I specialize in creating robust test automation frameworks and implementing comprehensive testing strategies that ensure the delivery of high-quality software products.",
    skills: [
      "Selenium",
      "Cypress",
      "Jest",
      "Playwright",
      "API Testing",
      "Performance Testing",
      "Manual Testing",
      "CI/CD Integration",
      "JIRA",
      "Test Planning",
    ],
    experience: [
      {
        role: "Senior QA Engineer",
        company: "TechCorp Inc.",
        period: "2021 - Present",
        description:
          "Lead the QA team in implementing automated testing solutions and quality processes for enterprise applications.",
      },
      {
        role: "QA Automation Engineer",
        company: "FinTech Solutions",
        period: "2018 - 2021",
        description:
          "Developed and maintained test automation frameworks for web and mobile applications in the financial sector.",
      },
      {
        role: "Software Tester",
        company: "StartupX",
        period: "2016 - 2018",
        description:
          "Performed manual and automated testing for early-stage startup products, focusing on user experience and functionality.",
      },
    ],
    contactInfo: {
      email: "john.doe@qaengineer.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      socialLinks: {
        github: "https://github.com/johndoe-qa",
        linkedin: "https://linkedin.com/in/johndoe-qa",
        twitter: "https://twitter.com/johndoe_qa",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar logoText={personalInfo.name} />

      {/* Hero Section */}
      <HeroSection
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        available={personalInfo.available}
        currentProject={personalInfo.currentProject}
        upcomingProjects={personalInfo.upcomingProjects}
      />

      {/* About Section */}
      <AboutSection
        bio={personalInfo.bio}
        skills={personalInfo.skills}
        experience={personalInfo.experience}
      />

      {/* Skills Section */}
      <SkillsSection />

      {/* Testing Expertise Section */}
      <TestingSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection contactInfo={personalInfo.contactInfo} />

      {/* Footer */}
      <Footer
        name={personalInfo.name}
        socialLinks={personalInfo.contactInfo.socialLinks}
      />
    </div>
  );
};

export default Home;
