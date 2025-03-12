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
    name: "Md. Rabbi Hasan",
    title: "QA Engineer & WordPress Developer",
    tagline:
      "Building professional career with focus on testing and web development",
    available: true,
    currentProject: "WordPress Website Maintenance",
    upcomingProjects: [
      { name: "API Testing Project", date: "June 15" },
      { name: "Web Automation Framework", date: "July 10" },
    ],
    bio: "I want to build a professional career with a national and multinational company. I always try and will try to apply constructive deviation in my professional and personal life. I specialize in QA testing, web automation, and WordPress development.",
    skills: [
      "Manual Testing",
      "Selenium",
      "Cypress",
      "Postman",
      "JMeter",
      "API Testing",
      "Performance Testing",
      "JavaScript",
      "Python",
      "React",
      "WordPress",
    ],
    experience: [
      {
        role: "Junior Executive - WordPress Developer",
        company: "Backspace",
        period: "11/2023 - 09/2024",
        description:
          "Manage website maintenance, updates, and troubleshooting. Ensure mobile and cross-browser compatibility. Implement basic SEO practices and optimize site performance.",
      },
      {
        role: "Tech Audit Engineer",
        company: "META",
        period: "10/2022 - 08/2023",
        description:
          "Conducted audits of technical systems to identify vulnerabilities. Performed testing and validation of technical controls, including penetration testing and vulnerability assessments.",
      },
      {
        role: "NOC Engineer",
        company: "Mango Teleservices Ltd.",
        period: "04/2022 - 07/2022",
        description:
          "Established and maintained network performance. Built network configurations and connections. Secured network system by establishing and enforcing policies.",
      },
    ],
    contactInfo: {
      email: "rabbihasan0113@gmail.com",
      phone: "01521569967",
      location: "Khilgaon Dhaka, Bangladesh",
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
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
