import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MapPin, Phone, Clock, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

const contactInfo = [
  { icon: MapPin, label: "Dirección", value: "Gilda Diaz Giron 821, Paine, Chile" },
  { icon: Phone, label: "Teléfono", value: "+56 9 1234 5678" },
  { icon: Clock, label: "Horario", value: "Lun-Vie 08:00-21:00 / Sáb 09:00-13:00" },
];

export default function Ubicacion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Encuéntranos en <span className="text-red-500">Paine</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Te esperamos en nuestra ubicación. Ven a conocernos y entrena con la mejor comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-0.5 rounded-xl bg-gradient-to-b from-white/5 to-transparent">
                  <div className="rounded-[calc(1rem-2px)] bg-[#0d0d0d] p-5 border border-white/[0.04] flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={20} weight="bold" className="text-red-500" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium mb-1">{item.label}</p>
                      <p className="text-white/80 text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-600/10 border border-green-600/20 text-green-400 hover:bg-green-600/20 transition-all duration-300 text-sm"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/henko_fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm"
              >
                <InstagramLogo size={18} weight="bold" />
                Instagram
              </a>
              <a
                href="https://maps.google.com/?q=Gilda+Diaz+Giron+821+Paine+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm"
              >
                <MapPin size={18} weight="bold" />
                Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="p-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/5 to-transparent h-[400px]"
          >
            <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0d0d] border border-white/[0.04] h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.708!2d-70.741!3d-33.871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzE1LjYiUyA3MMKwNDQnMjcuNiJX!5e0!3m2!1ses!2scl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.5)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Henko Fitness"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
