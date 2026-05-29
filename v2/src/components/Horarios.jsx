import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Sun, Moon } from "@phosphor-icons/react";

const schedule = [
  { day: "Lunes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Martes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Miércoles", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Jueves", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Viernes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Sábado", morning: "09:00 - 13:00", afternoon: "Cerrado" },
  { day: "Domingo", morning: "Cerrado", afternoon: "Cerrado" },
];

export default function Horarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="horarios" className="relative py-28 sm:py-36 px-4 bg-grain">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-serif mb-3 text-sm tracking-widest text-[var(--primary)]">時間 · HORARIOS</p>
          <h2 className="font-display text-5xl text-[var(--fg)] sm:text-6xl tracking-wide">HORARIOS</h2>
          <p className="mt-4 text-[var(--muted)] max-w-lg mx-auto">Entrena en la mañana o en la tarde. Horarios flexibles para tu rutina.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }} className="max-w-3xl mx-auto"
        >
          <div className="p-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/5 to-transparent">
            <div className="rounded-[calc(1.5rem-2px)] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-6 text-[var(--muted)] text-xs uppercase tracking-[0.15em] font-medium">Día</th>
                      <th className="text-left py-4 px-6 text-[var(--muted)] text-xs uppercase tracking-[0.15em] font-medium">
                        <span className="inline-flex items-center gap-2"><Sun size={14} className="text-amber-400/70" /> Mañana</span>
                      </th>
                      <th className="text-left py-4 px-6 text-[var(--muted)] text-xs uppercase tracking-[0.15em] font-medium">
                        <span className="inline-flex items-center gap-2"><Moon size={14} className="text-blue-400/70" /> Tarde</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row) => (
                      <tr key={row.day} className="border-b border-[var(--border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6">
                          <span className={`text-sm font-medium ${row.day === "Sábado" ? "text-[var(--primary)]" : row.day === "Domingo" ? "text-red-500" : "text-[var(--fg)]"}`}>{row.day}</span>
                        </td>
                        <td className={`py-4 px-6 text-sm ${row.morning === "Cerrado" ? "text-red-500/50" : "text-[var(--muted)]"}`}>{row.morning}</td>
                        <td className={`py-4 px-6 text-sm ${row.afternoon === "Cerrado" ? "text-red-500/50" : "text-[var(--muted)]"}`}>{row.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden divide-y divide-[var(--border)]">
                {schedule.map((row) => (
                  <div key={row.day} className="p-4">
                    <div className={`text-sm font-semibold mb-2 ${row.day === "Domingo" ? "text-red-500" : row.day === "Sábado" ? "text-[var(--primary)]" : "text-[var(--fg)]"}`}>{row.day}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-[var(--muted)]"><Sun size={13} className="text-amber-400/60" />{row.morning}</span>
                      <span className="flex items-center gap-2 text-[var(--muted)]"><Moon size={13} className="text-blue-400/60" />{row.afternoon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
