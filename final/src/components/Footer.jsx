import { WhatsappLogo, InstagramLogo, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl text-[var(--primary)] tracking-wide">HENKO</span>
              <span className="text-[var(--muted)] text-sm">FITNESS</span>
            </div>
            <p className="text-[var(--muted)] text-sm max-w-sm leading-relaxed">
              <span className="font-serif text-[var(--fg)]">変化</span> — Formamos comunidad y potenciamos tu crecimiento personal. Paine, Chile.
            </p>
          </div>
          <div>
            <h4 className="text-[var(--muted)] text-xs uppercase tracking-[0.15em] font-medium mb-4 font-display">Navegación</h4>
            <ul className="space-y-2.5">
              {[{label:"Disciplinas",href:"#disciplinas"},{label:"Planes",href:"#planes"},{label:"Horarios",href:"#horarios"},{label:"Comunidad",href:"#comunidad"},{label:"Galería",href:"#galeria"},{label:"Ubicación",href:"#ubicacion"}].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[var(--muted)] hover:text-[var(--fg)] text-sm transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--muted)] text-xs uppercase tracking-[0.15em] font-medium mb-4 font-display">Contacto</h4>
            <ul className="space-y-2.5">
              <li><a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-green-400 text-sm transition-colors"><WhatsappLogo size={15} weight="fill" /> WhatsApp</a></li>
              <li><a href="https://instagram.com/henko_fitness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-pink-400 text-sm transition-colors"><InstagramLogo size={15} weight="bold" /> Instagram</a></li>
              <li className="flex items-start gap-2 text-[var(--muted)] text-sm"><MapPin size={15} className="mt-0.5 shrink-0" /> Gilda Díaz Girón 821, Paine</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted)]/50 text-xs">&copy; {new Date().getFullYear()} HENKO FITNESS · Paine, Chile</p>
        </div>
      </div>
    </footer>
  );
}
