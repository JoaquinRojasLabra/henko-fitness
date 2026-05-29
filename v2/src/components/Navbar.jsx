import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import henkoLogo from "../assets/henko-logo.png";

const links = [
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Planes", href: "#planes" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Reserva", href: "#reserva" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex items-center justify-between px-5 py-2.5 rounded-full border w-full max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[var(--bg)]/85 backdrop-blur-2xl border-[var(--border)]"
            : "bg-[var(--bg)]/40 backdrop-blur-sm border-white/5"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img src={henkoLogo} alt="HENKO FITNESS" className="size-9 object-contain" />
          <span className="text-[var(--primary)] text-xl font-display tracking-wide">HENKO</span>
          <span className="text-[var(--muted)] text-sm font-sans hidden sm:inline">FITNESS</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className="px-3.5 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] rounded-full hover:bg-white/5 transition-all duration-300">
              {link.label}
            </a>
          ))}
          <a href="https://instagram.com/henko_fitness" target="_blank" rel="noreferrer"
            className="ml-2 px-3 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            IG
          </a>
          <a href="/login"
            className="ml-1 px-4 py-1.5 text-sm font-semibold bg-[var(--primary)] text-[var(--primary-fg)] rounded-full transition-all duration-300 hover:brightness-110 active:scale-[0.97]">
            Acceder
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden relative size-9 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-0.5 w-6 bg-[var(--fg)] rounded origin-center transition-transform" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-6 bg-[var(--fg)] rounded" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="block h-0.5 w-6 bg-[var(--fg)] rounded origin-center transition-transform" />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 top-0 z-30 bg-[var(--bg)]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setOpen(false)}
                className="text-3xl font-light text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                {link.label}
              </motion.a>
            ))}
            <motion.a href="/login"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + links.length * 0.08, duration: 0.5 }}
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 bg-[var(--primary)] text-[var(--primary-fg)] rounded-full text-lg font-semibold">
              Acceder
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
