import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export default function AdminSchedules() {
  const [schedules, setSchedules] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ discipline_id: "", day_of_week: "Lunes", time: "10:00", quota: 15, duration: 60 });

  useEffect(() => {
    supabase.from("disciplines").select("*").then(({ data }) => {
      if (data) setDisciplines(data);
    });
    fetch();
  }, []);

  async function fetch() {
    const { data } = await supabase
      .from("schedules")
      .select("*, disciplines(name)")
      .order("day_of_week")
      .order("time");
    if (data) setSchedules(data);
  }

  function openEdit(s) {
    setEditing(s.id);
    setForm({ discipline_id: s.discipline_id, day_of_week: s.day_of_week, time: s.time.slice(0, 5), quota: s.quota, duration: s.duration });
    setShowForm(true);
  }

  function openNew() {
    setEditing(null);
    setForm({ discipline_id: disciplines[0]?.id || "", day_of_week: "Lunes", time: "10:00", quota: 15, duration: 60 });
    setShowForm(true);
  }

  async function save() {
    const payload = { ...form, time: form.time + ":00" };
    if (editing) {
      await supabase.from("schedules").update(payload).eq("id", editing);
    } else {
      await supabase.from("schedules").insert(payload);
    }
    setShowForm(false);
    fetch();
  }

  async function remove(id) {
    if (confirm("¿Eliminar horario?")) {
      await supabase.from("schedules").delete().eq("id", id);
      fetch();
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-[var(--fg)]">Horarios</h1>
        <button onClick={openNew}
          className="px-5 py-2.5 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] text-sm font-semibold hover:brightness-110 transition-all">
          + Nuevo
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-3">
            <select value={form.discipline_id} onChange={(e) => setForm({ ...form, discipline_id: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm">
              {disciplines.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
            <select value={form.day_of_week} onChange={(e) => setForm({ ...form, day_of_week: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm">
              {days.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Hora</label>
                <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm" />
              </div>
              <div>
                <label className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Cupos</label>
                <input type="number" value={form.quota} onChange={(e) => setForm({ ...form, quota: +e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm" />
              </div>
              <div>
                <label className="text-[10px] text-[var(--muted)] uppercase tracking-wider">Duración (min)</label>
                <input type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: +e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm" />
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={save}
                className="px-5 py-2 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] text-sm font-semibold hover:brightness-110">Guardar</button>
              <button onClick={() => setShowForm(false)}
                className="px-5 py-2 rounded-full border border-[var(--border)] text-[var(--muted)] text-sm hover:text-[var(--fg)]">Cancelar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        {schedules.map((s) => (
          <div key={s.id} className="flex items-center justify-between p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="font-display text-sm text-[var(--fg)]">{s.day_of_week?.slice(0, 3)}</p>
                <p className="text-xs text-[var(--primary)] font-mono">{s.time?.slice(0, 5)}</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--fg)] text-sm">{s.disciplines?.name}</p>
                <p className="text-xs text-[var(--muted)]">{s.quota} cupos · {s.duration} min</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(s)}
                className="px-3 py-1.5 text-xs rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)]">Editar</button>
              <button onClick={() => remove(s.id)}
                className="px-3 py-1.5 text-xs rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
