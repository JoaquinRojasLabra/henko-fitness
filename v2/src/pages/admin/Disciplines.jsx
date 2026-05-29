import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDisciplines() {
  const [disciplines, setDisciplines] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", kanji: "", description: "" });

  useEffect(() => { fetch(); }, []);

  async function fetch() {
    const { data } = await supabase.from("disciplines").select("*").order("name");
    if (data) setDisciplines(data);
  }

  function openEdit(d) {
    setEditing(d.id);
    setForm({ name: d.name, kanji: d.kanji, description: d.description });
    setShowForm(true);
  }

  function openNew() {
    setEditing(null);
    setForm({ name: "", kanji: "", description: "" });
    setShowForm(true);
  }

  async function save() {
    if (editing) {
      await supabase.from("disciplines").update(form).eq("id", editing);
    } else {
      await supabase.from("disciplines").insert(form);
    }
    setShowForm(false);
    fetch();
  }

  async function remove(id) {
    if (confirm("¿Eliminar disciplina?")) {
      await supabase.from("disciplines").delete().eq("id", id);
      fetch();
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-[var(--fg)]">Disciplinas</h1>
        <button onClick={openNew}
          className="px-5 py-2.5 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] text-sm font-semibold hover:brightness-110 transition-all">
          + Nueva
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-3">
            <input placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm" />
            <input placeholder="Kanji (ej: 力)" value={form.kanji} onChange={(e) => setForm({ ...form, kanji: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm" />
            <textarea placeholder="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] text-sm resize-none" rows={2} />
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
        {disciplines.map((d) => (
          <div key={d.id} className="flex items-center justify-between p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[var(--primary)]">{d.kanji}</span>
              <div>
                <p className="font-semibold text-[var(--fg)] text-sm">{d.name}</p>
                <p className="text-xs text-[var(--muted)]">{d.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(d)}
                className="px-3 py-1.5 text-xs rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)]">Editar</button>
              <button onClick={() => remove(d.id)}
                className="px-3 py-1.5 text-xs rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
