import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Plane, Crown, Home as HomeIcon, Info, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          <Plane className="stat-icon-small text-accent" color="#10b981" />
          <span>Ethiopian Airlines Fleet</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><HomeIcon size={16} /> Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Info size={16} /> About</span>
          </NavLink>
          <NavLink to="/fleet" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Plane size={16} /> Fleet</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={16} /> Contact</span>
          </NavLink>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Crown size={16} /> Admin Portal</span>
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fleet" element={<UserDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
