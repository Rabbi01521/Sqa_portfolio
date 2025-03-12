import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className = "" }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create hexagons
    const hexagons = [];
    const hexSize = 30;
    const hexSpacing = 70;
    const rows = Math.ceil(height / hexSpacing) + 2;
    const cols = Math.ceil(width / hexSpacing) + 2;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const offsetX = j % 2 === 0 ? 0 : hexSpacing / 2;
        hexagons.push({
          x: j * hexSpacing - hexSpacing,
          y: i * hexSpacing + offsetX - hexSpacing,
          size: hexSize * (0.3 + Math.random() * 0.7),
          opacity: 0.05 + Math.random() * 0.1,
          pulse: Math.random() * 2 * Math.PI,
          speed: 0.02 + Math.random() * 0.03,
          color: [
            "rgba(99, 102, 241, 0.4)", // indigo
            "rgba(139, 92, 246, 0.4)", // purple
            "rgba(59, 130, 246, 0.4)", // blue
          ][Math.floor(Math.random() * 3)],
        });
      }
    }

    // Mouse interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseRadius = 200;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Draw hexagon
    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const xPos = x + size * Math.cos(angle);
        const yPos = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(xPos, yPos);
        } else {
          ctx.lineTo(xPos, yPos);
        }
      }
      ctx.closePath();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(1, "#0f172a"); // darker blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw hexagons
      hexagons.forEach((hex) => {
        // Calculate distance from mouse
        const dx = mouseX - hex.x;
        const dy = mouseY - hex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouseRadius;

        // Update pulse
        hex.pulse += hex.speed;

        // Draw hexagon
        const pulseScale = 1 + Math.sin(hex.pulse) * 0.1;
        const mouseScale =
          distance < maxDistance
            ? 1 + ((maxDistance - distance) / maxDistance) * 0.5
            : 1;
        const finalSize = hex.size * pulseScale * mouseScale;

        // Adjust opacity based on mouse proximity
        const baseOpacity = hex.opacity;
        const mouseOpacity =
          distance < maxDistance
            ? Math.min(
                0.8,
                baseOpacity + ((maxDistance - distance) / maxDistance) * 0.5,
              )
            : baseOpacity;

        // Draw filled hexagon
        ctx.globalAlpha = mouseOpacity;
        ctx.fillStyle = hex.color;
        drawHexagon(hex.x, hex.y, finalSize);
        ctx.fill();

        // Draw hexagon border
        ctx.globalAlpha = mouseOpacity * 1.5;
        ctx.strokeStyle = hex.color.replace("0.4", "0.8");
        ctx.lineWidth = 1;
        drawHexagon(hex.x, hex.y, finalSize);
        ctx.stroke();

        // Reset global alpha
        ctx.globalAlpha = 1;
      });

      // Add subtle glow effect
      const glow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        mouseRadius,
      );
      glow.addColorStop(0, "rgba(99, 102, 241, 0.3)");
      glow.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`fixed inset-0 bg-black overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
