import { motion } from "motion/react";
import heroImg from "@/assets/hero-gym.jpg";
import logo from "@/assets/henko-logo.png";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior del gimnasio HENKO FITNESS con estética japonesa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-sumi/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
      </div>

      {/* Giant kanji accent */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.5 }}
        className="font-serif pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none text-[40vw] leading-none text-washi md:text-[28vw]"
      >
        変
      </motion.span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            CENTRO DEPORTIVO · PAINE, CHILE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl leading-[0.92] text-foreground sm:text-7xl md:text-8xl"
          >
            FORJA TU
            <br />
            <span className="text-primary">CAMBIO.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            <span className="font-serif text-foreground">変化</span> — <em>henkō</em>, transformación.
            Formamos comunidad y potenciamos tu crecimiento personal a través del entrenamiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#disciplinas"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Ver disciplinas
            </a>
            <a
              href="#ubicacion"
              className="rounded-full border border-border bg-card/40 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Cómo llegar
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto hidden md:block"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
          <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={logo}
            alt="HENKO FITNESS daruma kettlebell"
            width={420}
            height={420}
            className="animate-float-slow relative mx-auto w-72 drop-shadow-2xl lg:w-96"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted-foreground"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
