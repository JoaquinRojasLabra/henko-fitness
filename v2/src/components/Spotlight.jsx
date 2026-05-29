import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function Spotlight({ className, size = 700, springOptions = { stiffness: 120, damping: 18, mass: 0.8 } }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) { parent.style.position = "relative"; parent.style.overflow = "hidden"; setParentElement(parent); }
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!parentElement) return;
    const { left, top } = parentElement.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }, [mouseX, mouseY, parentElement]);

  useEffect(() => {
    if (!parentElement) return;
    parentElement.addEventListener("mousemove", handleMouseMove);
    parentElement.addEventListener("mouseenter", () => setIsHovered(true));
    parentElement.addEventListener("mouseleave", () => setIsHovered(false));
    return () => {
      parentElement.removeEventListener("mousemove", handleMouseMove);
      parentElement.removeEventListener("mouseenter", () => setIsHovered(true));
      parentElement.removeEventListener("mouseleave", () => setIsHovered(false));
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"} ${className || ""}`}
      style={{
        width: size, height: size, left: spotlightLeft, top: spotlightTop,
        background: "radial-gradient(circle at center, oklch(0.55 0.22 27 / 0.5) 0%, oklch(0.55 0.22 27 / 0.2) 30%, transparent 70%)",
      }}
    />
  );
}
