import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const testimonials = [
  {
    id: 1, name: "Javiera Muñoz",
    avatar: "",
    text: "Llevo 6 meses entrenando y mi cambio físico ha sido increíble. El ambiente es familiar, todos te motivan a dar lo mejor."
  },
  {
    id: 2, name: "Carlos Soto",
    avatar: "",
    text: "De no poder hacer una flexión a completar mi primer WOD RX. Los coaches son muy dedicados y la comunidad es espectacular."
  },
  {
    id: 3, name: "Valentina Rojas",
    avatar: "",
    text: "Llegué por GAP y me quedé por todo. Es mi segundo hogar. Los horarios flexibles me permiten compatibilizar con la u."
  },
  {
    id: 4, name: "Diego Pavez",
    avatar: "",
    text: "Halterofilia cambió mi forma de ver el entrenamiento. Técnica, fuerza y mucha disciplina. Henko es calidad."
  },
  {
    id: 5, name: "Francisca Lara",
    avatar: "",
    text: "El plan estudiante me salvó. Precio justo, entrenamiento de calidad y un ambiente que te hace querer volver cada día."
  },
];

export function TestimonialCarousel({ className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState(0);

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 80) {
      setExitX(info.offset.x);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setExitX(0);
      }, 200);
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-80 h-64">
        {testimonials.map((t, index) => {
          const isCurrent = index === currentIndex;
          const isPrev = index === (currentIndex + 1) % testimonials.length;
          const isNext = index === (currentIndex + 2) % testimonials.length;
          if (!isCurrent && !isPrev && !isNext) return null;

          return (
            <motion.div
              key={t.id}
              className={cn(
                "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing p-6",
                "bg-[var(--card)] border border-[var(--border)] shadow-xl",
              )}
              style={{ zIndex: isCurrent ? 3 : isPrev ? 2 : 1 }}
              drag={isCurrent ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={isCurrent ? handleDragEnd : undefined}
              initial={{ scale: 0.95, opacity: 0, y: isCurrent ? 0 : isPrev ? 8 : 16, rotate: isCurrent ? 0 : isPrev ? -2 : -4 }}
              animate={{
                scale: isCurrent ? 1 : 0.95,
                opacity: isCurrent ? 1 : isPrev ? 0.6 : 0.3,
                x: isCurrent ? exitX : 0,
                y: isCurrent ? 0 : isPrev ? 8 : 16,
                rotate: isCurrent ? exitX / 20 : isPrev ? -2 : -4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="size-14 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)]">{t.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">"{t.text}"</p>
              </div>
            </motion.div>
          );
        })}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button key={index} onClick={() => { setExitX(0); setCurrentIndex(index); }}
              className={cn("size-2 rounded-full transition-all duration-300", index === currentIndex ? "bg-[var(--primary)] w-5" : "bg-[var(--border)]")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
