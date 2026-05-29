import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Equipo de crossfit", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&q=80", alt: "Pesas rusas", span: "" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80", alt: "Entrenamiento funcional", span: "" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80", alt: "Mancuernas", span: "" },
  { src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&q=80", alt: "Ejercicio en grupo", span: "" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", alt: "Gimnasio", span: "md:col-span-2" },
];

export default function Galeria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="relative py-28 sm:py-36 px-4 bg-grain">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">ギャラリー · GALERÍA</p>
          <h2 className="font-display text-5xl text-[var(--fg)] sm:text-6xl tracking-wide">NUESTRA COMUNIDAD</h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg mx-auto">Esto es más que un gimnasio. Somos una familia que se esfuerza junta cada día.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {images.map((img, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className={`${img.span} overflow-hidden rounded-xl group cursor-pointer`}
            >
              <div className="relative overflow-hidden rounded-xl h-full">
                <img src={img.src} alt={img.alt} loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                  style={{ minHeight: img.span ? "300px" : "200px" }} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="https://instagram.com/henko_fitness" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] text-sm transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Síguenos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
