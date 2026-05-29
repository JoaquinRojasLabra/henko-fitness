import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const stats = [
  { value: "300+", label: "Publicaciones" },
  { value: "3.900+", label: "Seguidores" },
  { value: "4", label: "Disciplinas" },
  { value: "1", label: "Comunidad" },
];

export default function Comunidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comunidad" className="relative overflow-hidden py-28 sm:py-36 px-4">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/8 blur-[120px]" />
      <div className="max-w-5xl mx-auto text-center">
        <motion.p ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif mb-4 text-sm tracking-widest text-[var(--primary)]"
        >
          仲間 · COMUNIDAD
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl leading-tight text-[var(--fg)] sm:text-6xl tracking-wide"
        >
          MÁS QUE UN GIMNASIO,
          <br />
          <span className="text-[var(--primary)]">UNA FAMILIA.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
        >
          Como el daruma japonés, símbolo de perseverancia y buena fortuna, en HENKO no nos
          rendimos. Caemos siete veces y nos levantamos ocho. Aquí cada persona crece rodeada de
          gente que la impulsa.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-4xl text-[var(--primary)] sm:text-5xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-[var(--muted)]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
