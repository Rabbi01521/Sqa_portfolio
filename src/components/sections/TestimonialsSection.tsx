import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({
  testimonials = [
    {
      quote:
        "John's attention to detail and thorough testing approach helped us identify critical issues before our product launch. His automation framework reduced our testing time by 60%.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechInnovate",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
    },
    {
      quote:
        "Working with John transformed our QA process. His methodical approach to test planning and execution significantly improved our product quality and customer satisfaction.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "SoftSolutions Inc.",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=c0aede",
    },
    {
      quote:
        "John's expertise in performance testing helped us identify and resolve bottlenecks that would have impacted thousands of users. His work was instrumental to our successful launch.",
      author: "Emily Rodriguez",
      position: "Engineering Director",
      company: "DataFlow Systems",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=ffdfbf",
    },
    {
      quote:
        "The test automation framework John implemented has been a game-changer for our development team. We've reduced regression testing time by 70% while improving coverage.",
      author: "David Kim",
      position: "Lead Developer",
      company: "WebTech Solutions",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
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
            Client Testimonials
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues about my testing expertise and
            contributions to their projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl relative"
            >
              <div className="absolute -top-4 -left-4 bg-indigo-600/20 p-3 rounded-lg border border-indigo-500/30">
                <Quote className="h-6 w-6 text-indigo-400" />
              </div>

              <p className="text-gray-300 italic mb-6 pt-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {testimonial.author}
                  </h4>
                  <p className="text-indigo-400 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
