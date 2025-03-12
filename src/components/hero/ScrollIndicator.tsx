import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  onClick?: () => void;
  visible?: boolean;
}

const ScrollIndicator = ({
  onClick = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    }),
  visible = true,
}: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(visible);

  // Hide indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 2.5 },
      }}
      onClick={onClick}
      aria-label="Scroll down"
    >
      <p className="text-xs text-gray-400 mb-2 tracking-widest uppercase">
        Scroll
      </p>
      <motion.div
        className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/50 bg-black/50 backdrop-blur-sm"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-5 h-5 text-indigo-400" />
      </motion.div>

      {/* Animated trail */}
      <motion.div
        className="absolute top-12 w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
