import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, bookings: 0, disciplines: 0 });

  useEffect(() => {
    Promise.all([
      supabase.from("profiles").select("id", { count: "exact", head: true }),
      supabase.from("bookings").select("id", { count: "exact", head: true }).eq("status", "confirmed"),
      supabase.from("disciplines").select("id", { count: "exact", head: true }),
    ]).then(([users, bookings, disciplines]) => {
      setStats({
        users: users.count || 0,
        bookings: bookings.count || 0,
        disciplines: disciplines.count || 0,
      });
    });
  }, []);

  const cards = [
    { label: "Usuarios", value: stats.users, color: "text-blue-400" },
    { label: "Reservas activas", value: stats.bookings, color: "text-green-400" },
    { label: "Disciplinas", value: stats.disciplines, color: "text-[var(--primary)]" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--fg)] mb-6">Panel de Administración</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
            <p className="text-sm text-[var(--muted)]">{c.label}</p>
            <p className={`text-4xl font-display mt-2 ${c.color}`}>{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
