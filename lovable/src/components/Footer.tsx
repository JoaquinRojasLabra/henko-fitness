import logo from "@/assets/henko-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sumi py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="HENKO FITNESS" width={40} height={40} className="h-10 w-10" loading="lazy" />
          <div>
            <p className="font-display text-lg text-foreground">
              HENKO <span className="text-primary">FITNESS</span>
            </p>
            <p className="text-xs text-muted-foreground">Paine, Región Metropolitana · Chile</p>
          </div>
        </div>

        <p className="font-serif text-sm text-muted-foreground">
          変化 — Formamos comunidad y potenciamos tu crecimiento personal 💪
        </p>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} HENKO FITNESS
        </p>
      </div>
    </footer>
  );
}
