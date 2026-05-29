import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Planes", href: "#planes" },
  { label: "Horarios", href: "#horarios" },
  { label: "Galería", href: "#galeria" },
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
        className={`flex items-center justify-between px-5 py-2.5 rounded-full border w-full max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[#0a0a0a]/85 backdrop-blur-2xl border-white/10"
            : "bg-[#0a0a0a]/40 backdrop-blur-sm border-white/5"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <span className="text-red-500 text-xl font-bold tracking-tight">HENKO</span>
          <span className="text-white/40 text-sm font-light hidden sm:inline">FITNESS</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planes"
            className="ml-3 px-4 py-1.5 text-sm font-medium bg-red-600 hover:bg-red-500 text-white rounded-full transition-all duration-300 active:scale-[0.97]"
          >
            Plans
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative size-9 flex items-center justify-center text-white"
          aria-label="Menu"
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="absolute"
          >
            <List size={22} weight="bold" />
          </motion.div>
          <motion.div
            animate={{ rotate: open ? 0 : 45, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="absolute"
          >
            <X size={22} weight="bold" />
          </motion.div>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setOpen(false)}
                className="text-3xl font-light text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#planes"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + links.length * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full text-lg font-medium"
            >
              Plans
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
