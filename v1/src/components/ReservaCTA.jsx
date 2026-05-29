import { motion } from "framer-motion";
import { CalendarDots, ArrowRight } from "@phosphor-icons/react";

export default function ReservaCTA() {
  return (
    <section id="reserva" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 via-[var(--primary)]/10 to-[var(--primary)]/5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">体験 · PRUEBA</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-[var(--fg)] tracking-wide mb-6">
          RESERVA TU
          <br />
          <span className="text-[var(--primary)]">CLASE DE PRUEBA.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Ven a conocernos sin compromiso. Entrena gratis por un día y descubre todo lo que HENKO tiene para ti.
        </p>
        <a
          href="https://boxmagic.cl/sp/HenkoFitness37"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--primary-fg)] rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.97] group"
        >
          <CalendarDots size={20} weight="bold" />
          Reservar ahora
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
        </a>
      </motion.div>
    </section>
  );
}
