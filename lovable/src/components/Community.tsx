import { motion } from "motion/react";

const stats = [
  { value: "300+", label: "Publicaciones" },
  { value: "3.900+", label: "Seguidores" },
  { value: "4", label: "Disciplinas" },
  { value: "1", label: "Comunidad" },
];

export function Community() {
  return (
    <section id="comunidad" className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif mb-4 text-sm tracking-widest text-primary"
        >
          仲間 · COMUNIDAD
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl leading-tight text-foreground sm:text-6xl"
        >
          MÁS QUE UN GIMNASIO,
          <br />
          <span className="text-primary">UNA FAMILIA.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Como el daruma japonés, símbolo de perseverancia y buena fortuna, en HENKO no nos
          rendimos. Caemos siete veces y nos levantamos ocho. Aquí cada persona crece rodeada de
          gente que la impulsa.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-4xl text-primary sm:text-5xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
