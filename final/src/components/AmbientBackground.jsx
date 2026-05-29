import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 1920, y: Math.random() * 1080,
      size: 1.5 + Math.random() * 2.5,
      speedX: -0.2 + Math.random() * 0.4,
      speedY: -0.2 + Math.random() * 0.4,
      opacity: 0.1 + Math.random() * 0.25,
      pulse: Math.random() * Math.PI * 2,
    }));

    function resize() {
      const parent = canvas.parentElement;
      w = parent?.offsetWidth || window.innerWidth;
      h = parent?.offsetHeight || window.innerHeight;
      canvas.width = w; canvas.height = h;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX; p.y += p.speedY;
        p.pulse += 0.008;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const pa = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 80, 60, ${pa})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }} />;
}

function GradientOrbs() {
  const orbs = [
    { size: 600, x: "5%", y: "10%", duration: 18 },
    { size: 500, x: "70%", y: "50%", duration: 22 },
    { size: 400, x: "30%", y: "75%", duration: 15 },
    { size: 450, x: "80%", y: "10%", duration: 20 },
  ];
  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size, height: orb.size, left: orb.x, top: orb.y,
            background: "radial-gradient(circle at center, oklch(0.55 0.22 27 / 0.08) 0%, transparent 60%)",
          }}
          animate={{ x: [0, 30, -20, 15, 0], y: [0, -25, 15, -10, 0], scale: [1, 1.08, 0.95, 1.04, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: i * 3 }}
        />
      ))}
    </>
  );
}

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <GradientOrbs />
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-oklch(0.55 0.22 27 / 0.08) via-transparent to-[var(--bg)]" />
    </div>
  );
}
