import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    services: [
      { name: 'Visa Requirements', path: '/visas' },
      { name: 'Flight Status', path: '/flights' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
    other: [
      { name: 'Help Center', path: '/help' },
    ]
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="https://i.postimg.cc/Jnrg4Jqr/gootoholidays-yellow.png" 
                alt="DataZync" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-zinc-600 text-sm max-w-xs leading-relaxed mb-6">
              Expert guidance for your global travel. We simplify visas, flights, and holiday packages with transparency and trust.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
            <nav className="flex flex-col gap-4">
              {links.services.map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-primary text-sm transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
             <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Reach Us</h4>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-zinc-500 leading-relaxed font-medium">
                    <p>No:2/305, Puzgalanthi salai ki,</p>
                    <p>J.J nagar east, Mugappair east,</p>
                    <p>Chennai 600037</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919840454061" className="text-sm text-zinc-500 hover:text-primary transition-colors font-bold">
                    Nizhanth - 9840454061
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-zinc-500 font-medium">contact@gotoholidays.com</span>
                </div>
             </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {links.legal.concat(links.other).map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-primary text-sm transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs font-medium">
            © 2026 DataZync. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-xs text-zinc-400">Follow us</span>
             {/* Simple social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
