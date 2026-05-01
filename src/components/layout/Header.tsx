import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.postimg.cc/Jnrg4Jqr/gootoholidays-yellow.png" 
              alt="DataZync" 
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
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
          <div className="hidden lg:flex items-center gap-6 mr-4 border-r border-zinc-100 pr-6">
            <a href="tel:+919840454061" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-4 h-4 text-primary group-hover:text-white" />
              </div>
              <span className="text-sm font-bold text-zinc-700 group-hover:text-primary transition-colors">9840454061</span>
            </a>
          </div>
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
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-600 p-2 hover:bg-zinc-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary/5 text-primary'
                      : 'text-zinc-600 hover:bg-zinc-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 flex flex-col gap-4">
                <a 
                  href="tel:+919840454061" 
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                   <Phone className="w-5 h-5 text-primary" />
                   <span className="font-bold text-zinc-900">9840454061</span>
                </a>
                <div className="flex gap-3">
                  <Link 
                    to="/signin" 
                    className="flex-1 text-center py-4 bg-zinc-100 text-zinc-900 font-bold rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="flex-1 text-center py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
