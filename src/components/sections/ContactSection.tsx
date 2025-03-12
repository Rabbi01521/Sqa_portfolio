import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../contact/ContactForm";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface ContactSectionProps {
  contactInfo?: ContactInfo;
}

const ContactSection = ({
  contactInfo = {
    email: "rabbihasan0113@gmail.com",
    phone: "01521569967",
    location: "Khilgaon Dhaka, Bangladesh",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
}: ContactSectionProps) => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-between"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {contactInfo.socialLinks.github && (
                  <a
                    href={contactInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </a>
                )}
                {contactInfo.socialLinks.linkedin && (
                  <a
                    href={contactInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                )}
                {contactInfo.socialLinks.twitter && (
                  <a
                    href={contactInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-indigo-600 transition-colors p-3 rounded-full"
                  >
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                )}
              </div>
              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                <p className="text-gray-300 text-sm">
                  Available for freelance projects and full-time opportunities.
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
