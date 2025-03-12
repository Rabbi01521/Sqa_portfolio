import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  name?: string;
  title?: string;
  tagline?: string;
  nameDelay?: number;
  titleDelay?: number;
  taglineDelay?: number;
}

const AnimatedText = ({
  name = "John Doe",
  title = "Creative Developer",
  tagline = "Building immersive digital experiences with cutting-edge technology",
  nameDelay = 0.5,
  titleDelay = 1.5,
  taglineDelay = 2.5,
}: AnimatedTextProps) => {
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect for tagline
  useEffect(() => {
    if (currentIndex < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedTagline((prev) => prev + tagline[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, tagline]);

  return (
    <div className="flex flex-col items-start justify-center p-8 bg-black/30 backdrop-blur-md rounded-2xl w-full max-w-[600px] border border-gray-800/50 shadow-xl">
      <motion.div
        className="overflow-hidden relative mb-2"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: nameDelay - 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 h-1 w-full"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: nameDelay - 0.3 }}
        />
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: nameDelay }}
      >
        {name}
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl font-medium text-indigo-400 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: titleDelay }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: taglineDelay }}
      >
        {displayedTagline}
        <motion.span
          className="inline-block w-1 h-5 bg-indigo-500 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: taglineDelay + 1 }}
      />
    </div>
  );
};

export default AnimatedText;
