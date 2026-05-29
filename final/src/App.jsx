import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Disciplines from "./components/Disciplines";
import Planes from "./components/Planes";
import Horarios from "./components/Horarios";
import Comunidad from "./components/Comunidad";
import Galeria from "./components/Galeria";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain-overlay" />
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Disciplines />
        <Planes />
        <Horarios />
        <Comunidad />
        <Galeria />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
