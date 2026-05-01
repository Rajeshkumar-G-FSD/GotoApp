import { Link } from 'react-router-dom';

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
    <footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="https://i.postimg.cc/Jnrg4Jqr/gootoholidays-yellow.png" 
                alt="Goto Holidays" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs">
              Expert guidance for your global travel. We simplify visas, flights, and holiday packages.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-zinc-900 mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {links.services.map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-secondary-container text-sm underline underline-offset-4 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1">
             <h4 className="font-bold text-zinc-900 mb-4">Legal</h4>
            <div className="flex flex-col gap-3">
              {links.legal.map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-secondary-container text-sm underline underline-offset-4 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-zinc-900 mb-4">Support</h4>
            <div className="flex flex-col gap-3">
              {links.other.map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-secondary-container text-sm underline underline-offset-4 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2024 Goto Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
