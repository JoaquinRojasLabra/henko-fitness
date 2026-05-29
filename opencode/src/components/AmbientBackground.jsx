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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * (canvas.parentElement?.offsetWidth || 1920),
      y: Math.random() * (canvas.parentElement?.offsetHeight || 1080),
      size: 1.5 + Math.random() * 3,
      speedX: -0.3 + Math.random() * 0.6,
      speedY: -0.3 + Math.random() * 0.6,
      opacity: 0.15 + Math.random() * 0.35,
      pulse: Math.random() * Math.PI * 2,
    }));

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      w = parent?.offsetWidth || window.innerWidth;
      h = parent?.offsetHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.01;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulseOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${pulseOpacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

function GradientOrbs() {
  const orbs = [
    { size: 600, x: "5%", y: "10%", duration: 18, color: "rgba(220,38,38,0.12)" },
    { size: 500, x: "70%", y: "50%", duration: 22, color: "rgba(220,38,38,0.08)" },
    { size: 400, x: "30%", y: "75%", duration: 15, color: "rgba(185,28,28,0.1)" },
    { size: 450, x: "80%", y: "10%", duration: 20, color: "rgba(220,38,38,0.06)" },
    { size: 350, x: "50%", y: "30%", duration: 25, color: "rgba(239,68,68,0.07)" },
  ];

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at center, ${orb.color} 0%, ${orb.color.replace("0.12","0.04").replace("0.08","0.02").replace("0.1","0.03").replace("0.06","0.02").replace("0.07","0.02")} 50%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -25, 20, 0],
            y: [0, -30, 20, -15, 0],
            scale: [1, 1.12, 0.92, 1.06, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}
    </>
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#dc2626" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute inset-0"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(220,38,38,0.015) 80px, rgba(220,38,38,0.015) 81px)" }}
        animate={{ backgroundPosition: ["0 0", "0 40px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(220,38,38,0.015) 80px, rgba(220,38,38,0.015) 81px)" }}
        animate={{ backgroundPosition: ["0 0", "40px 0"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function RadialPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle at center, rgba(220,38,38,0.04) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <GradientOrbs />
      <RadialPulse />
      <AnimatedGrid />
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-[#0a0a0a]" />
    </div>
  );
}
