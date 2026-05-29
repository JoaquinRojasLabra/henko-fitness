import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightning, Star, CirclesFour, Heartbeat } from "@phosphor-icons/react";

const disciplines = [
  {
    name: "CrossFit",
    desc: "Entrenamiento funcional de alta intensidad. Mejora tu fuerza, resistencia y agilidad con workouts variados cada día.",
    icon: Lightning,
    color: "from-red-600 to-orange-600",
  },
  {
    name: "GAP",
    desc: "Glúteos, abdominales y piernas. Tonifica y fortalece tu core con ejercicios específicos guiados por profesionales.",
    icon: Star,
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Gimnasia",
    desc: "Flexibilidad, control corporal y técnica. Desde principiantes hasta avanzados, mejora tu movilidad y coordinación.",
    icon: CirclesFour,
    color: "from-red-600 to-rose-700",
  },
  {
    name: "Halterofilia",
    desc: "Levantamiento olímpico de pesas. Técnica de arranque y envión con supervisión profesional para máximo rendimiento.",
    icon: Heartbeat,
    color: "from-red-700 to-red-500",
  },
];

function DisciplineCard({ discipline, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = discipline.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
      className="group relative"
    >
      <div className="p-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/5 to-transparent">
        <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0d0d] p-8 h-full border border-white/[0.04] hover:border-red-500/20 transition-all duration-500">
          <div className="size-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors duration-300">
            <Icon size={24} weight="bold" className="text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{discipline.name}</h3>
          <p className="text-white/40 text-sm leading-relaxed">{discipline.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Disciplines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="disciplinas" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Disciplinas
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Entrenamientos para <span className="text-red-500">todos los niveles</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Desde principiantes hasta avanzados, tenemos la disciplina ideal para tus metas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.map((d, i) => (
            <DisciplineCard key={d.name} discipline={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
