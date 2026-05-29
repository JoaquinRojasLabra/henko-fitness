import { motion } from "motion/react";
import { MapPin, Instagram, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="ubicacion" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif mb-3 text-sm tracking-widest text-primary">場所 · ENCUÉNTRANOS</p>
            <h2 className="font-display text-5xl text-foreground sm:text-6xl">VISÍTANOS</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Da el primer paso de tu transformación. Pásate por nuestro centro deportivo en Paine.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p className="text-sm text-muted-foreground">
                    Gilda Díaz Girón 821, Paine, Región Metropolitana, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horarios</h3>
                  <p className="text-sm text-muted-foreground">
                    Lun – Vie: 06:00 – 22:00 · Sáb: 09:00 – 14:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Síguenos</h3>
                  <a
                    href="https://instagram.com/henko_fitness"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    @henko_fitness
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]"
          >
            <iframe
              title="Ubicación HENKO FITNESS"
              src="https://www.google.com/maps?q=Gilda%20D%C3%ADaz%20Gir%C3%B3n%20821%2C%20Paine%2C%20Chile&output=embed"
              className="h-full min-h-[400px] w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
