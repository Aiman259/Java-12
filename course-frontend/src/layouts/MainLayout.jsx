import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="main-container">
      {/* 1. Navbar wajib ada kat sini supaya dia muncul kat semua page */}
      <Navbar />

      {/* 2. Outlet ni paling penting! Sini tempat HomePage/LoginPage akan muncul */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}