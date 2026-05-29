import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signUp(email, password, fullName);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg)]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm text-center">
          <div className="size-16 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-[var(--primary)]">✓</span>
          </div>
          <h2 className="font-display text-2xl text-[var(--fg)] mb-2">Revisa tu email</h2>
          <p className="text-[var(--muted)] text-sm mb-6">Te enviamos un link de confirmación a <strong>{email}</strong></p>
          <Link to="/login" className="text-[var(--primary)] hover:underline text-sm">Ir a iniciar sesión</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg)]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl text-[var(--primary)] tracking-wide">HENKO</Link>
          <p className="text-[var(--muted)] text-sm mt-2">Crea tu cuenta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Nombre completo</label>
            <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] transition-colors" />
          </div>
          <div>
            <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] transition-colors" />
          </div>
          <div>
            <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Contraseña</label>
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] transition-colors" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] font-semibold hover:brightness-110 transition-all active:scale-[0.97] disabled:opacity-50">
            {loading ? "Creando..." : "Crear cuenta"}
          </button>
        </form>
        <p className="text-center text-sm text-[var(--muted)] mt-6">
          ¿Ya tienes cuenta? <Link to="/login" className="text-[var(--primary)] hover:underline">Inicia sesión</Link>
        </p>
      </motion.div>
    </div>
  );
}
