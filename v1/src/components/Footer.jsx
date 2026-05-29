import { WhatsappLogo, InstagramLogo, MapPin, Envelope } from "@phosphor-icons/react";

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
              <li><a href="https://tiktok.com/@henko.fitness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-pink-400 text-sm transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                TikTok</a></li>
              <li><a href="mailto:henkoofitness@gmail.com" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-blue-400 text-sm transition-colors"><Envelope size={15} weight="bold" /> henkoofitness@gmail.com</a></li>
              <li className="flex items-start gap-2 text-[var(--muted)] text-sm"><MapPin size={15} className="mt-0.5 shrink-0" /> Diogenes Carvajal 873, Paine</li>
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
