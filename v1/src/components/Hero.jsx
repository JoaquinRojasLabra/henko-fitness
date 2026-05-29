import { motion } from "framer-motion";
import { Barbell, MapPin } from "@phosphor-icons/react";
import { Spotlight } from "./Spotlight";
import { AnimatedText } from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Spotlight size={500} />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--primary)]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Giant kanji accent - from Lovable */}
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
              style={{ width: 140, height: 140, left: -20, top: -20 }} />
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_40px_rgba(200,80,60,0.3)] animate-float-slow">
              <ellipse cx="50" cy="65" rx="28" ry="30" fill="var(--primary)" />
              <rect x="35" y="38" width="30" height="10" rx="5" fill="var(--primary)" />
              <path d="M38 43 Q50 30 62 43" stroke="var(--primary)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <ellipse cx="50" cy="63" rx="6" ry="3" fill="var(--bg)" />
              <rect x="44" y="68" width="12" height="2" rx="1" fill="var(--bg)" />
              <circle cx="42" cy="52" r="2.5" fill="var(--bg)" />
              <circle cx="58" cy="52" r="2.5" fill="var(--bg)" />
              <circle cx="58" cy="52" r="1.8" fill="var(--fg)" />
              <path d="M45 55 Q50 58 55 55" stroke="var(--bg)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <AnimatedText
          text="FORJA TU CAMBIO."
          className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.92] tracking-wide mb-4"
          delay={0.2}
        />

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
