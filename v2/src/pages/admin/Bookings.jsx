import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => { fetch(); }, []);

  async function fetch() {
    const { data } = await supabase
      .from("bookings")
      .select("*, profiles(full_name, email), schedules(day_of_week, time, disciplines(name))")
      .order("created_at", { ascending: false });
    if (data) setBookings(data);
  }

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--fg)] mb-6">Reservas</h1>

      <div className="flex gap-2 mb-6">
        {[
          { key: "all", label: "Todas" },
          { key: "confirmed", label: "Confirmadas" },
          { key: "cancelled", label: "Canceladas" },
        ].map((f) => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${filter === f.key ? "bg-[var(--primary)] text-[var(--primary-fg)]" : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]"}`}>
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">No hay reservas</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left">
                <th className="pb-3 text-[var(--muted)] font-medium">Usuario</th>
                <th className="pb-3 text-[var(--muted)] font-medium">Disciplina</th>
                <th className="pb-3 text-[var(--muted)] font-medium">Día</th>
                <th className="pb-3 text-[var(--muted)] font-medium">Hora</th>
                <th className="pb-3 text-[var(--muted)] font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-b border-[var(--border)]/50">
                  <td className="py-3 text-[var(--fg)]">{b.profiles?.full_name || b.profiles?.email || "—"}</td>
                  <td className="py-3 text-[var(--fg)]">{b.schedules?.disciplines?.name || "—"}</td>
                  <td className="py-3 text-[var(--fg)]">{b.schedules?.day_of_week || "—"}</td>
                  <td className="py-3 text-[var(--fg)] font-mono">{b.schedules?.time?.slice(0, 5) || "—"}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium ${b.status === "confirmed" ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"}`}>
                      {b.status === "confirmed" ? "Confirmada" : "Cancelada"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
