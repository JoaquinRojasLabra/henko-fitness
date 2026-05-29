import { motion } from "framer-motion";
import { Spotlight } from "./Spotlight";
import henkoLogo from "../assets/henko-logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Spotlight size={700} />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--primary)]/8 rounded-full blur-[120px] pointer-events-none" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="font-serif pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none text-[35vw] leading-none text-white md:text-[25vw]"
      >
        変
      </motion.span>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-4 py-1.5 text-xs tracking-[0.2em] font-medium text-[var(--muted)] backdrop-blur">
            <span className="size-2 rounded-full bg-[var(--primary)]" />
            CENTRO DEPORTIVO · PAINE, CHILE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-[var(--primary)]/20"
              style={{ width: 220, height: 220, left: -30, top: -30 }} />
            <img
              src={henkoLogo}
              alt="HENKO FITNESS"
              className="size-40 object-contain animate-float-slow drop-shadow-[0_0_60px_rgba(200,80,60,0.4)]"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.92] tracking-wide mb-4"
        >
          FORJA TU
          <br />
          <span className="text-[var(--primary)]">CAMBIO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg max-w-lg mx-auto text-[var(--muted)] leading-relaxed mb-8"
        >
          <span className="font-serif text-[var(--fg)]">変化</span> — <em>henkō</em>, transformación.
          Formamos comunidad y potenciamos tu crecimiento personal a través del entrenamiento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#disciplinas"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-[var(--primary-fg)] rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.97]">
            Ver disciplinas
          </a>
          <a href="#ubicacion"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[var(--border)] text-[var(--muted)] rounded-full text-sm font-medium transition-all duration-300 hover:text-[var(--fg)]">
            Cómo llegar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-xs tracking-widest text-[var(--muted)]"
        >
          SCROLL ↓
        </motion.div>
      </div>

      <style>{`
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite }
        .animate-spin-slow { animation: spin-slow 40s linear infinite }
      `}</style>
    </section>
  );
}
