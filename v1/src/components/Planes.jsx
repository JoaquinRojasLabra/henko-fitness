import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, Student, Lightning, Infinity } from "@phosphor-icons/react";
import { BorderTrail } from "./BorderTrail";

const plans = [
  {
    name: "Básico", price: { monthly: 15000, annual: 150000 },
    features: ["Acceso a todas las disciplinas", "Horario regular", "Vestuarios", "Evaluación inicial"],
    icon: Lightning, popular: false,
  },
  {
    name: "Full", price: { monthly: 25000, annual: 250000 },
    features: ["Todo del plan Básico", "Clases grupales ilimitadas", "Nutrición coaching", "Acceso 6:00-23:00", "Eventos comunidad"],
    icon: Infinity, popular: true,
  },
  {
    name: "Estudiante", price: { monthly: 10000, annual: 100000 },
    features: ["Acceso a todas las disciplinas", "Horario regular", "Vestuarios", "Evaluación inicial", "Descuento exclusivo estudiante"],
    icon: Student, popular: false, badge: "Descuento",
  },
];

function PlanCard({ plan, index, isAnnual }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = plan.icon;
  const price = isAnnual ? plan.price.annual : plan.price.monthly;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
      className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-[var(--primary)] text-[var(--primary-fg)] text-xs uppercase tracking-[0.15em] font-semibold rounded-full">Más popular</span>
        </div>
      )}
      <div className={`relative p-0.5 rounded-[1.5rem] h-full ${plan.popular ? "bg-gradient-to-b from-[var(--primary)]/40 via-[var(--primary)]/20 to-transparent" : "bg-gradient-to-b from-white/5 to-transparent"}`}>
        {plan.popular && <BorderTrail size={50} />}
        <div className={`rounded-[calc(1.5rem-2px)] h-full ${plan.popular ? "bg-[var(--sumi)] border border-[var(--primary)]/20" : "bg-[var(--card)] border border-[var(--border)]"} p-8 flex flex-col`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`size-10 rounded-lg flex items-center justify-center ${plan.popular ? "bg-[var(--primary)]/20" : "bg-white/5"}`}>
              <Icon size={20} weight="bold" className={plan.popular ? "text-[var(--primary)]" : "text-[var(--muted)]"} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">{plan.name}</h3>
              {plan.badge && <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--primary)] font-medium">{plan.badge}</span>}
            </div>
          </div>
          <p className="text-[var(--muted)] text-sm mb-6">{plan.desc}</p>
          <div className="mb-8">
            <span className="text-[var(--fg)]">
              <span className="text-2xl align-super">$</span>
              <span className="text-5xl sm:text-6xl font-bold tracking-tight">{price.toLocaleString("es-CL")}</span>
              <span className="text-[var(--muted)] text-base font-normal">/mes</span>
            </span>
          </div>
          <a href={`https://wa.me/56912345678?text=Hola%20Henko%20Fitness%20quisiera%20info%20del%20plan%20${encodeURIComponent(plan.name)}`}
            target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.97] ${
              plan.popular ? "bg-[var(--primary)] hover:brightness-110 text-[var(--primary-fg)]" : "bg-white/5 hover:bg-white/10 text-[var(--muted)] hover:text-[var(--fg)] border border-[var(--border)]"
            }`}>
            Consultar plan
          </a>
          <div className="mt-8 space-y-3 flex-1">
            {plan.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={16} weight="bold" className="text-[var(--primary)] mt-0.5 shrink-0" />
                <span className="text-[var(--muted)] text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Planes() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planes" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">料金 · PLANES</p>
          <h2 className="font-display text-5xl text-[var(--fg)] sm:text-6xl tracking-wide">ELIGE TU PLAN</h2>
          <p className="mt-4 text-[var(--muted)] max-w-md mx-auto mb-8">Sin permanencia. Cancela cuando quieras. Plan estudiante disponible.</p>
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-[var(--border)]">
            <button onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isAnnual ? "bg-[var(--primary)] text-[var(--primary-fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}>
              Mensual
            </button>
            <button onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isAnnual ? "bg-[var(--primary)] text-[var(--primary-fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}>
              Anual
            </button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => <PlanCard key={plan.name} plan={plan} index={i} isAnnual={isAnnual} />)}
        </div>
      </div>
    </section>
  );
}
