import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Avatar3DProps {
  scale?: number;
  rotationSensitivity?: number;
  hoverEffect?: boolean;
  clickEffect?: boolean;
  avatarUrl?: string;
}

const Avatar3D = ({
  scale = 1,
  rotationSensitivity = 5,
  hoverEffect = true,
  clickEffect = true,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=rabbi&backgroundColor=b6e3f4",
}: Avatar3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [particleEffects, setParticleEffects] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate rotation based on mouse position relative to center
      const rotateY =
        ((e.clientX - centerX) / (window.innerWidth / 2)) * rotationSensitivity;
      const rotateX =
        ((e.clientY - centerY) / (window.innerHeight / 2)) *
        rotationSensitivity;

      setRotation({ x: -rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotationSensitivity]);

  // Show particle effects periodically
  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticleEffects(true);
      setTimeout(() => setParticleEffects(false), 3000);
    }, 8000);

    return () => clearInterval(particleInterval);
  }, []);

  const handleClick = () => {
    if (clickEffect) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500);
      setParticleEffects(true);
      setTimeout(() => setParticleEffects(false), 3000);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[400px] h-[500px] flex items-center justify-center bg-gradient-to-b from-indigo-900/20 to-purple-900/20 rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-4/5 h-4/5"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered && hoverEffect ? 1.05 : isClicked ? 0.95 : 1 * scale,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        }}
      >
        {/* Avatar Image */}
        <motion.div
          className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-indigo-500/30"
          animate={{
            boxShadow: isHovered
              ? "0 0 25px 5px rgba(129, 140, 248, 0.5)"
              : "0 0 15px 2px rgba(129, 140, 248, 0.3)",
          }}
        >
          <img
            src={avatarUrl}
            alt="3D Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
          }}
        />

        {/* Particle effects */}
        {(isHovered || particleEffects) && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: [
                    "#4f46e5",
                    "#8b5cf6",
                    "#3b82f6",
                    "#06b6d4",
                    "#ec4899",
                  ][i % 5],
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 300 - 150,
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}

        {/* Floating elements */}
        <motion.div
          className="absolute -right-8 -top-8 w-12 h-12 bg-indigo-500/20 backdrop-blur-sm rounded-lg border border-indigo-500/30 flex items-center justify-center text-white text-xl font-bold"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>🧪</span>
        </motion.div>

        <motion.div
          className="absolute -left-6 top-1/4 w-10 h-10 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 flex items-center justify-center text-white text-lg font-bold"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <span>QA</span>
        </motion.div>

        <motion.div
          className="absolute -left-4 bottom-1/4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 flex items-center justify-center text-white text-sm font-bold"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span>CI</span>
        </motion.div>
      </motion.div>

      {/* Click ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-indigo-500"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-purple-900/10 rounded-3xl pointer-events-none" />
    </div>
  );
};

export default Avatar3D;
