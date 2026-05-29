import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import { CalendarDots, ArrowLeft } from "@phosphor-icons/react";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export default function Booking() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [selectedDiscipline, setSelectedDiscipline] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    supabase.from("disciplines").select("*").then(({ data }) => {
      if (data) setDisciplines(data);
    });
    fetchSchedules();
  }, []);

  useEffect(() => { fetchSchedules(); }, [selectedDiscipline, selectedDay]);

  async function fetchSchedules() {
    let query = supabase
      .from("schedules")
      .select("*, disciplines(name)")
      .order("day_of_week")
      .order("time");

    if (selectedDiscipline !== "all") {
      query = query.eq("discipline_id", selectedDiscipline);
    }
    if (selectedDay !== "all") {
      query = query.eq("day_of_week", selectedDay);
    }

    const { data } = await query;
    if (data) setSchedules(data);
  }

  async function handleBooking(scheduleId) {
    setLoading(true);
    setMessage(null);
    try {
      const { data: schedule } = await supabase
        .from("schedules")
        .select("quota")
        .eq("id", scheduleId)
        .single();

      const { count } = await supabase
        .from("bookings")
        .select("id", { count: "exact", head: true })
        .eq("schedule_id", scheduleId)
        .eq("status", "confirmed");

      if (count >= schedule.quota) {
        setMessage({ type: "error", text: "No hay cupos disponibles para este horario." });
        return;
      }

      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        schedule_id: scheduleId,
        status: "confirmed",
      });

      if (error) throw error;
      setMessage({ type: "success", text: "Reserva confirmada. Te esperamos!" });
      setBooking(scheduleId);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--border)] px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-xl text-[var(--primary)] tracking-wide">HENKO</Link>
          <Link to="/dashboard"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            <ArrowLeft size={16} /> Mis reservas
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="font-display text-3xl text-[var(--fg)] mb-2 text-center">Reserva tu Clase</h1>
        <p className="text-[var(--muted)] text-sm mb-8 text-center">Selecciona disciplina y horario</p>

        {message && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className={`mb-6 px-4 py-3 rounded-2xl text-sm ${message.type === "success" ? "bg-green-400/10 text-green-400 border border-green-400/20" : "bg-red-400/10 text-red-400 border border-red-400/20"}`}>
            {message.text}
          </motion.div>
        )}

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button onClick={() => setSelectedDiscipline("all")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${selectedDiscipline === "all" ? "bg-[var(--primary)] text-[var(--primary-fg)]" : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]"}`}>
            Todas
          </button>
          {disciplines.map((d) => (
            <button key={d.id} onClick={() => setSelectedDiscipline(d.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${selectedDiscipline === d.id ? "bg-[var(--primary)] text-[var(--primary-fg)]" : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]"}`}>
              {d.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <button onClick={() => setSelectedDay("all")}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${selectedDay === "all" ? "bg-white/10 text-[var(--fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}>
            Todos los días
          </button>
          {days.map((d) => (
            <button key={d} onClick={() => setSelectedDay(d)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${selectedDay === d ? "bg-white/10 text-[var(--fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}>
              {d}
            </button>
          ))}
        </div>

        {schedules.length === 0 ? (
          <p className="text-center text-[var(--muted)]">No hay horarios disponibles para esta selección.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {schedules.map((s) => {
              const isBooked = booking === s.id;
              return (
                <motion.div key={s.id} layout
                  className={`p-4 rounded-2xl border transition-all ${isBooked ? "border-green-500/40 bg-green-500/5" : "border-[var(--border)] bg-[var(--card)]"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-sm text-[var(--fg)]">{s.disciplines?.name}</span>
                    <span className="text-[10px] text-[var(--muted)]">{s.day_of_week}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg text-[var(--primary)]">{s.time?.slice(0, 5)}</span>
                    <span className="text-xs text-[var(--muted)]">{s.duration} min</span>
                  </div>
                  <button onClick={() => handleBooking(s.id)} disabled={loading || isBooked}
                    className={`mt-3 w-full py-2 rounded-full text-xs font-semibold transition-all active:scale-[0.97] ${isBooked ? "bg-green-500/20 text-green-400" : "bg-[var(--primary)] text-[var(--primary-fg)] hover:brightness-110 disabled:opacity-50"}`}>
                    {loading ? "Reservando..." : isBooked ? "Reservada ✓" : "Reservar"}
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
