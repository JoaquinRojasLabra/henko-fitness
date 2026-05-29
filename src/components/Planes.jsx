import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, Student, Lightning, Infinity } from "@phosphor-icons/react";

const plans = [
  {
    name: "Básico",
    price: { monthly: 15000, annual: 150000 },
    desc: "Acceso a todas las disciplinas en horario regular.",
    features: ["Acceso a todas las disciplinas", "Horario regular", "Vestuarios", "Evaluación inicial"],
    icon: Lightning,
    popular: false,
  },
  {
    name: "Full",
    price: { monthly: 25000, annual: 250000 },
    desc: "Acceso ilimitado + clases grupales + nutri coaching.",
    features: ["Todo del plan Básico", "Clases grupales ilimitadas", "Nutrición coaching", "Acceso 6:00-23:00", "Eventos comunidad"],
    icon: Infinity,
    popular: true,
  },
  {
    name: "Estudiante",
    price: { monthly: 10000, annual: 100000 },
    desc: "Precio especial para estudiantes. Misma calidad, menos precio.",
    features: ["Acceso a todas las disciplinas", "Horario regular", "Vestuarios", "Evaluación inicial", "Descuento exclusivo estudiante"],
    icon: Student,
    popular: false,
    badge: "Descuento",
  },
];

function PriceDisplay({ amount }) {
  const str = amount.toLocaleString("es-CL");
  return (
    <span className="text-white">
      <span className="text-2xl align-super">$</span>
      <span className="text-5xl sm:text-6xl font-bold tracking-tight">{str}</span>
      <span className="text-white/30 text-base font-normal">/mes</span>
    </span>
  );
}

function PlanCard({ plan, index, isAnnual }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = plan.icon;
  const price = isAnnual ? plan.price.annual : plan.price.monthly;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
      className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-red-600 text-white text-xs uppercase tracking-[0.15em] font-semibold rounded-full">
            Más popular
          </span>
        </div>
      )}

      <div className={`p-0.5 rounded-[1.5rem] h-full ${
        plan.popular
          ? "bg-gradient-to-b from-red-500/40 via-red-600/20 to-transparent"
          : "bg-gradient-to-b from-white/5 to-transparent"
      }`}>
        <div className={`rounded-[calc(1.5rem-2px)] h-full ${
          plan.popular
            ? "bg-[#0d0d0d] border border-red-500/20"
            : "bg-[#0d0d0d] border border-white/[0.04]"
        } p-8 flex flex-col`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`size-10 rounded-lg flex items-center justify-center ${
              plan.popular ? "bg-red-600/20" : "bg-white/5"
            }`}>
              <Icon size={20} weight="bold" className={plan.popular ? "text-red-500" : "text-white/50"} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              {plan.badge && (
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-medium">{plan.badge}</span>
              )}
            </div>
          </div>

          <p className="text-white/40 text-sm mb-6">{plan.desc}</p>

          <div className="mb-8">
            <PriceDisplay amount={price} />
          </div>

          <a
            href={`https://wa.me/56912345678?text=Hola%20Henko%20Fitness%20quisiera%20info%20del%20plan%20${encodeURIComponent(plan.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.97] ${
              plan.popular
                ? "bg-red-600 hover:bg-red-500 text-white"
                : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
            }`}
          >
            Consultar plan
          </a>

          <div className="mt-8 space-y-3 flex-1">
            {plan.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={16} weight="bold" className="text-red-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">{f}</span>
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
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Planes
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Elige tu <span className="text-red-500">plan</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-8">
            Sin permanencia. Cancela cuando quieras. Plan estudiante disponible.
          </p>

          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? "bg-red-600 text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual ? "bg-red-600 text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Anual
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
}
