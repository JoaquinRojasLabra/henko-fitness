import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Clock, Barbell, Sun, Moon } from "@phosphor-icons/react";

const schedule = [
  { day: "Lunes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Martes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Miércoles", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Jueves", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Viernes", morning: "08:00 - 10:00", afternoon: "17:00 - 21:00" },
  { day: "Sábado", morning: "09:00 - 13:00", afternoon: "Cerrado" },
  { day: "Domingo", morning: "Cerrado", afternoon: "Cerrado" },
];

const weekdays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

export default function Horarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="horarios" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Horarios
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Horarios de <span className="text-red-500">entrenamiento</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Entrena en la mañana o en la tarde. Horarios flexibles para tu rutina.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/5 to-transparent">
            <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0d0d] border border-white/[0.04] overflow-hidden">
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-4 px-6 text-white/30 text-xs uppercase tracking-[0.15em] font-medium">Día</th>
                      <th className="text-left py-4 px-6 text-white/30 text-xs uppercase tracking-[0.15em] font-medium">
                        <span className="inline-flex items-center gap-2">
                          <Sun size={14} weight="bold" className="text-amber-400/70" />
                          Mañana
                        </span>
                      </th>
                      <th className="text-left py-4 px-6 text-white/30 text-xs uppercase tracking-[0.15em] font-medium">
                        <span className="inline-flex items-center gap-2">
                          <Moon size={14} weight="bold" className="text-blue-400/70" />
                          Tarde
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr
                        key={row.day}
                        className={`border-b border-white/[0.04] last:border-0 transition-colors duration-300 hover:bg-white/[0.02]`}
                      >
                        <td className="py-4 px-6">
                          <span className={`text-sm font-medium ${
                            row.day === "Sábado" ? "text-red-400" :
                            row.day === "Domingo" ? "text-red-500" : "text-white/80"
                          }`}>
                            {row.day}
                          </span>
                        </td>
                        <td className={`py-4 px-6 text-sm ${
                          row.morning === "Cerrado" ? "text-red-500/50" : "text-white/60"
                        }`}>
                          {row.morning}
                        </td>
                        <td className={`py-4 px-6 text-sm ${
                          row.afternoon === "Cerrado" ? "text-red-500/50" : "text-white/60"
                        }`}>
                          {row.afternoon}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden divide-y divide-white/[0.06]">
                {schedule.map((row) => (
                  <div key={row.day} className="p-4">
                    <div className={`text-sm font-semibold mb-2 ${
                      row.day === "Domingo" ? "text-red-500" :
                      row.day === "Sábado" ? "text-red-400" : "text-white"
                    }`}>
                      {row.day}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-white/50">
                        <Sun size={13} weight="bold" className="text-amber-400/60" />
                        <span className={row.morning === "Cerrado" ? "text-red-500/50" : ""}>{row.morning}</span>
                      </span>
                      <span className="flex items-center gap-2 text-white/50">
                        <Moon size={13} weight="bold" className="text-blue-400/60" />
                        <span className={row.afternoon === "Cerrado" ? "text-red-500/50" : ""}>{row.afternoon}</span>
                      </span>
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
