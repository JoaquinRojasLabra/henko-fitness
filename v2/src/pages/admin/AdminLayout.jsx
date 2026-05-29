import { useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";
import { SignOut, GridFour, Barbell, Clock, CalendarDots } from "@phosphor-icons/react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: GridFour },
  { label: "Disciplinas", href: "/admin/disciplinas", icon: Barbell },
  { label: "Horarios", href: "/admin/horarios", icon: Clock },
  { label: "Reservas", href: "/admin/reservas", icon: CalendarDots },
];

export default function AdminLayout() {
  const { user, profile, signOut, fetchProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    if (!profile) fetchProfile(user.id);
  }, [user, profile]);

  useEffect(() => {
    if (profile && profile.role !== "admin") {
      navigate("/dashboard");
    }
  }, [profile]);

  if (!profile || profile.role !== "admin") {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
        <p className="text-[var(--muted)]">Verificando acceso...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] flex">
      <aside className="w-64 border-r border-[var(--border)] p-6 hidden lg:flex flex-col">
        <Link to="/" className="font-display text-xl text-[var(--primary)] tracking-wide mb-10">HENKO · Admin</Link>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${active ? "bg-[var(--primary)]/15 text-[var(--primary)] font-medium" : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-white/5"}`}>
                <Icon size={18} /> {item.label}
              </Link>
            );
          })}
        </nav>
        <button onClick={signOut}
          className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mt-4">
          <SignOut size={16} /> Cerrar sesión
        </button>
      </aside>

      <div className="flex-1 min-h-screen">
        <header className="border-b border-[var(--border)] px-6 py-4 flex items-center justify-between lg:hidden">
          <Link to="/" className="font-display text-lg text-[var(--primary)]">HENKO</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--muted)]">{profile?.full_name}</span>
            <button onClick={signOut} className="text-[var(--muted)] hover:text-[var(--fg)]">
              <SignOut size={18} />
            </button>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
