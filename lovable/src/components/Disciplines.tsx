import { motion } from "motion/react";
import { Flame, Dumbbell, Activity, Trophy } from "lucide-react";

const disciplines = [
  {
    name: "CrossFit",
    kanji: "力",
    icon: Flame,
    desc: "Entrenamiento funcional de alta intensidad. Fuerza, resistencia y comunidad en cada WOD.",
  },
  {
    name: "GAP",
    kanji: "体",
    icon: Activity,
    desc: "Glúteos, abdomen y piernas. Tonifica y fortalece tu núcleo con sesiones dinámicas.",
  },
  {
    name: "Gimnasia",
    kanji: "技",
    icon: Dumbbell,
    desc: "Control corporal, movilidad y destreza. Domina tu propio peso con técnica.",
  },
  {
    name: "Halterofilia",
    kanji: "勝",
    icon: Trophy,
    desc: "Levantamiento olímpico. Potencia explosiva y técnica precisa bajo la barra.",
  },
];

export function Disciplines() {
  return (
    <section id="disciplinas" className="relative bg-grain py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-primary">鍛える · ENTRENA</p>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">DISCIPLINAS</h2>
          <p className="mt-4 text-muted-foreground">
            Cuatro caminos, un mismo objetivo: tu transformación. Elige el tuyo o combínalos todos.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <span className="font-serif pointer-events-none absolute -right-2 -top-4 select-none text-8xl text-primary/10 transition-colors group-hover:text-primary/20">
                {d.kanji}
              </span>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <d.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
