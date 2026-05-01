import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Visas', path: '/visas' },
    { name: 'Flights', path: '/flights' },
    { name: 'Packages', path: '/packages' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100 shadow-sm shadow-teal-900/5 antialiased">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary">
            Goto Holidays
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-200 px-3 py-2 rounded-md font-medium text-sm hover:bg-zinc-50 ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary rounded-none'
                    : 'text-zinc-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <button className="text-zinc-600 hover:text-primary p-2 rounded-full hover:bg-zinc-50 transition-all duration-200 active:scale-95">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-zinc-600 hover:text-primary p-2 rounded-full hover:bg-zinc-50 transition-all duration-200 active:scale-95">
              <User className="w-5 h-5" />
            </button>
          </div>
          <Link to="/signin" className="text-primary font-semibold text-sm hover:bg-zinc-50 px-4 py-2 rounded-md transition-all duration-200 active:scale-95">
            Sign In
          </Link>
          <Link 
            to="/dashboard" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-4 py-2 rounded-md transition-all duration-200 active:scale-95 shadow-sm"
          >
            Dashboard
          </Link>
          <button className="md:hidden text-zinc-600 p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
