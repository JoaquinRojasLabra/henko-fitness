import { WhatsappLogo, InstagramLogo, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-red-500 tracking-tight">HENKO</span>
              <span className="text-white/30 text-sm font-light">FITNESS</span>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              CrossFit, GAP, gimnasia y halterofilia en Paine. Formamos comunidad y potenciamos tu crecimiento personal.
            </p>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Disciplinas", href: "#disciplinas" },
                { label: "Planes", href: "#planes" },
                { label: "Horarios", href: "#horarios" },
                { label: "Galería", href: "#galeria" },
                { label: "Ubicación", href: "#ubicacion" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  <WhatsappLogo size={15} weight="fill" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/henko_fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-pink-400 text-sm transition-colors duration-300"
                >
                  <InstagramLogo size={15} weight="bold" />
                  Instagram
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={15} weight="bold" className="mt-0.5 shrink-0" />
                Gilda Diaz Giron 821, Paine
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Henko Fitness. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Paine, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
