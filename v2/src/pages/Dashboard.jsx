import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import { CalendarDots, Clock, User, SignOut } from "@phosphor-icons/react";

export default function Dashboard() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    fetchBookings();
  }, [user]);

  async function fetchBookings() {
    const { data } = await supabase
      .from("bookings")
      .select("*, schedules(id, day_of_week, time, disciplines(name))")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    if (data) setBookings(data);
    setLoading(false);
  }

  async function cancelBooking(id) {
    await supabase.from("bookings").update({ status: "cancelled" }).eq("id", id);
    fetchBookings();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--border)] px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-xl text-[var(--primary)] tracking-wide">HENKO</Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--muted)]">{profile?.full_name || user?.email}</span>
            <button onClick={signOut} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
              <SignOut size={16} /> Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl text-[var(--fg)]">Mis Reservas</h1>
            <p className="text-[var(--muted)] text-sm mt-1">Administra tus clases agendadas</p>
          </div>
          <Link to="/reservar"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] font-semibold text-sm hover:brightness-110 transition-all active:scale-[0.97]">
            <CalendarDots size={18} /> Nueva reserva
          </Link>
        </div>

        {loading ? (
          <p className="text-[var(--muted)]">Cargando...</p>
        ) : bookings.length === 0 ? (
          <div className="text-center py-20">
            <CalendarDots size={48} className="mx-auto text-[var(--border)] mb-4" />
            <p className="text-[var(--muted)]">No tienes reservas aún</p>
            <Link to="/reservar" className="inline-block mt-4 text-[var(--primary)] hover:underline text-sm">Reservar ahora</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map((b) => (
              <motion.div key={b.id} layout
                className="flex items-center justify-between p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                    <Clock size={20} weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--fg)] text-sm">{b.schedules?.disciplines?.name || "Disciplina"}</p>
                    <p className="text-xs text-[var(--muted)]">
                      {b.schedules?.day_of_week} · {b.schedules?.time?.slice(0, 5)} hrs
                    </p>
                    <span className={`text-[10px] uppercase tracking-wider font-medium ${b.status === "confirmed" ? "text-green-400" : "text-red-400"}`}>
                      {b.status === "confirmed" ? "Confirmada" : "Cancelada"}
                    </span>
                  </div>
                </div>
                {b.status === "confirmed" && (
                  <button onClick={() => cancelBooking(b.id)}
                    className="px-4 py-2 text-xs rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 transition-colors">
                    Cancelar
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
