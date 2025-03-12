import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  verificationUrl?: string;
}

interface CertificationsSectionProps {
  certifications?: Certification[];
}

const CertificationsSection = ({
  certifications = [
    {
      name: "SQA and Cyber Security",
      issuer: "IT Training BD",
      date: "2023",
      logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=300&q=80",
      verificationUrl: "#",
    },
    {
      name: "Python Programming",
      issuer: "EWU Robotics Club",
      date: "2018",
      logo: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=300&q=80",
      verificationUrl: "#",
    },
    {
      name: "Robotics for Beginners",
      issuer: "EWU Robotics Club",
      date: "2018",
      logo: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=300&q=80",
      verificationUrl: "#",
    },
    {
      name: "LEDP Web Design and Development",
      issuer: "LEDP Program",
      date: "2020",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
      verificationUrl: "#",
    },
    {
      name: "LEDP Graphic Design",
      issuer: "LEDP Program",
      date: "2020",
      logo: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=300&q=80",
      verificationUrl: "#",
    },
  ],
}: CertificationsSectionProps) => {
  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
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
            Certifications
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to quality assurance best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-xl"
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-400 mr-2" />
                    <span className="text-white font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {cert.name}
                </h3>

                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">Issued: {cert.date}</span>
                </div>

                {cert.verificationUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10"
                    asChild
                  >
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Credential{" "}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
