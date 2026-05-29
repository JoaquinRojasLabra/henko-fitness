import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightning, Flame, Heartbeat, Trophy } from "@phosphor-icons/react";

const disciplines = [
  { name: "CrossFit", kanji: "力", icon: Lightning, desc: "Entrenamiento funcional de alta intensidad. Fuerza, resistencia y comunidad en cada WOD." },
  { name: "GAP", kanji: "体", icon: Flame, desc: "Glúteos, abdomen y piernas. Tonifica y fortalece tu núcleo con sesiones dinámicas." },
  { name: "Gimnasia", kanji: "技", icon: Heartbeat, desc: "Control corporal, movilidad y destreza. Domina tu propio peso con técnica." },
  { name: "Halterofilia", kanji: "勝", icon: Trophy, desc: "Levantamiento olímpico. Potencia explosiva y técnica precisa bajo la barra." },
];

function Card({ d, i }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = d.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
    >
      <span className="font-serif pointer-events-none absolute -right-2 -top-4 select-none text-8xl text-[var(--primary)]/10 transition-colors group-hover:text-[var(--primary)]/20">
        {d.kanji}
      </span>
      <div className="relative">
        <div className="mb-5 flex size-13 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)]">
          <Icon className="size-6" weight="bold" />
        </div>
        <h3 className="font-display text-2xl text-[var(--fg)] tracking-wide">{d.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{d.desc}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
    </motion.article>
  );
}

export default function Disciplines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="disciplinas" className="relative bg-grain py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">鍛える · ENTRENA</p>
          <h2 className="font-display text-5xl text-[var(--fg)] sm:text-6xl tracking-wide">DISCIPLINAS</h2>
          <p className="mt-4 text-[var(--muted)]">Cuatro caminos, un mismo objetivo: tu transformación. Elige el tuyo o combínalos todos.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => <Card key={d.name} d={d} i={i} />)}
        </div>
      </div>
    </section>
  );
}
