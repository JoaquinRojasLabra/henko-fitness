import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MapPin, Clock, InstagramLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react";

const contactInfo = [
  { icon: MapPin, label: "Dirección", value: "Diogenes Carvajal 873, Paine, Región Metropolitana, Chile" },
  { icon: Clock, label: "Horarios", value: "Lun – Vie: 06:00 – 22:00 · Sáb: 09:00 – 14:00" },
  { icon: Envelope, label: "Email", value: "henkoofitness@gmail.com" },
];

export default function Ubicacion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">場所 · ENCUÉNTRANOS</p>
          <h2 className="font-display text-5xl text-[var(--fg)] sm:text-6xl tracking-wide">VISÍTANOS</h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg mx-auto">Da el primer paso de tu transformación. Pásate por nuestro centro deportivo en Paine.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)]">
                      <Icon className="size-6" weight="bold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--fg)]">{item.label}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)]">
                  <InstagramLogo className="size-6" weight="bold" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fg)]">Síguenos</h3>
                  <div className="flex flex-col gap-1">
                    <a href="https://instagram.com/henko_fitness" target="_blank" rel="noreferrer" className="text-sm text-[var(--primary)] hover:underline">@henko_fitness</a>
                    <a href="https://tiktok.com/@henko.fitness" target="_blank" rel="noreferrer" className="text-sm text-[var(--primary)] hover:underline">@henko.fitness (TikTok)</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-600/10 border border-green-600/20 text-green-400 hover:bg-green-600/20 transition-all duration-300 text-sm">
                <WhatsappLogo size={18} weight="fill" /> WhatsApp
              </a>
              <a href="https://instagram.com/henko_fitness" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-300 text-sm">
                <InstagramLogo size={18} weight="bold" /> Instagram
              </a>
              <a href="https://maps.google.com/?q=Diogenes+Carvajal+873+Paine+Chile" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-300 text-sm">
                <MapPin size={18} weight="bold" /> Maps
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
          >
            <iframe title="Ubicación HENKO FITNESS"
              src="https://www.google.com/maps?q=Diogenes%20Carvajal%20873%2C%20Paine%2C%20Chile&output=embed"
              className="h-full min-h-[400px] w-full grayscale-[0.3]"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.5)" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
