import { motion } from "framer-motion";
import { ArrowRight, Barbell, MapPin } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs uppercase tracking-[0.2em] font-medium">
            <Barbell size={14} weight="bold" />
            Paine, Chile
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="mb-4 flex justify-center"
        >
          {/* Daruma Kettlebell Logo - SVG */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            <ellipse cx="50" cy="65" rx="28" ry="30" fill="#dc2626" />
            <rect x="35" y="38" width="30" height="10" rx="5" fill="#dc2626" />
            <path d="M38 43 Q50 30 62 43" stroke="#dc2626" strokeWidth="6" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="55" r="4" fill="#0a0a0a" />
            <ellipse cx="50" cy="63" rx="6" ry="3" fill="#0a0a0a" />
            <rect x="44" y="68" width="12" height="2" rx="1" fill="#0a0a0a" />
            {/* Daruma face */}
            <circle cx="42" cy="52" r="2" fill="#0a0a0a" />
            <circle cx="58" cy="52" r="2" fill="#0a0a0a" />
            <path d="M45 55 Q50 58 55 55" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Right eye (empty - for goal setting) */}
            <circle cx="58" cy="52" r="2" fill="#fafafa" />
            <circle cx="58" cy="52" r="1.5" fill="#0a0a0a" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
        >
          <span className="text-white">HENKO</span>
          <br />
          <span className="text-red-500">FITNESS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="text-white/40 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          CrossFit, GAP, halterofilia y más. Formamos comunidad y potenciamos tu crecimiento personal en Paine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#planes"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-full text-base font-medium transition-all duration-300 active:scale-[0.97]"
          >
            Ver Planes
            <span className="inline-flex items-center justify-center size-7 rounded-full bg-white/15 group-hover:bg-white/20 transition-colors duration-300">
              <ArrowRight size={14} weight="bold" />
            </span>
          </a>
          <a
            href="#disciplinas"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white rounded-full text-base font-medium transition-all duration-300"
          >
            Conoce más
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-6 text-white/30 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} weight="bold" className="text-red-500/50" />
            Gilda Diaz Giron 821, Paine
          </span>
        </motion.div>
      </div>
    </section>
  );
}
