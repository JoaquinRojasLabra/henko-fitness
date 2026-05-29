import { Routes, Route } from "react-router-dom";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Disciplines from "./components/Disciplines";
import Planes from "./components/Planes";
import Horarios from "./components/Horarios";
import Comunidad from "./components/Comunidad";
import Galeria from "./components/Galeria";
import ReservaCTA from "./components/ReservaCTA";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminDisciplines from "./pages/admin/Disciplines";
import AdminSchedules from "./pages/admin/Schedules";
import AdminBookings from "./pages/admin/Bookings";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reservar" element={<Booking />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="disciplinas" element={<AdminDisciplines />} />
        <Route path="horarios" element={<AdminSchedules />} />
        <Route path="reservas" element={<AdminBookings />} />
      </Route>
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

function Landing() {
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
        <ReservaCTA />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
