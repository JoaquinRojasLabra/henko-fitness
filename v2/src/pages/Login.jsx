import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl text-[var(--primary)] tracking-wide">HENKO</Link>
          <p className="text-[var(--muted)] text-sm mt-2">Ingresa a tu cuenta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] transition-colors" />
          </div>
          <div>
            <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Contraseña</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] outline-none focus:border-[var(--primary)] transition-colors" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-full bg-[var(--primary)] text-[var(--primary-fg)] font-semibold hover:brightness-110 transition-all active:scale-[0.97] disabled:opacity-50">
            {loading ? "Entrando..." : "Ingresar"}
          </button>
        </form>
        <p className="text-center text-sm text-[var(--muted)] mt-6">
          ¿No tienes cuenta? <Link to="/register" className="text-[var(--primary)] hover:underline">Regístrate</Link>
        </p>
      </motion.div>
    </div>
  );
}
