import { Search, Globe, FileText, UploadCloud, PlaneTakeoff, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

const countries = [
  { name: 'Algeria', type: 'Sticker', flag: '🇩🇿' },
  { name: 'Argentina', type: 'Sticker Visa', flag: '🇦🇷' },
  { name: 'Armenia', type: '', flag: '🇦🇲' },
  { name: 'Australia', type: '', flag: '🇦🇺' },
  { name: 'Austria', type: '', flag: '🇦🇹' },
  { name: 'Azerbaijan', type: '', flag: '🇦🇿' },
  { name: 'Bahrain', type: 'E-Visa', flag: '🇧🇭' },
  { name: 'Bangladesh', type: 'Sticker', flag: '🇧🇩' },
  { name: 'Belgium', type: 'Schengen', flag: '🇧🇪' },
  { name: 'Brazil', type: '', flag: '🇧🇷' },
  { name: 'Canada', type: 'ETA/Visa', flag: '🇨🇦' },
  { name: 'France', type: 'Schengen', flag: '🇫🇷' },
  { name: 'Germany', type: 'Schengen', flag: '🇩🇪' },
  { name: 'Japan', type: 'E-Visa', flag: '🇯🇵' },
  { name: 'United Kingdom', type: 'Standard Visitor', flag: '🇬🇧' },
  { name: 'United States', type: 'B1/B2', flag: '🇺🇸' },
];

export default function Visas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-zinc-50 border-b border-zinc-200 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=2000" 
            alt="Airplane wings"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-zinc-50/95 to-zinc-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            Expert Guidance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
          >
            Which country would you like to <span className="text-primary">explore?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10"
          >
            Clear, up-to-date documentation requirements to ensure your journey begins with confidence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-5xl mx-auto bg-white rounded-full p-2 shadow-lg border border-zinc-200 flex flex-wrap md:flex-nowrap items-center divide-y md:divide-y-0 md:divide-x divide-zinc-100 relative"
          >
            {/* Country Search Input Container */}
            <div className="flex-1 flex flex-col relative" ref={dropdownRef}>
              <div className="flex items-center px-6 py-2 min-w-[200px]">
                <Globe className="w-6 h-6 text-primary mr-3" />
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder-zinc-400" 
                  placeholder="Search for a country" 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                />
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-full md:w-[400px] bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden z-50 text-left"
                  >
                    <div className="max-h-[350px] overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.name}
                            onClick={() => {
                              setSearchQuery(country.name);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-4 px-6 py-4 hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-none"
                          >
                            <span className="text-2xl">{country.flag}</span>
                            <div className="flex items-baseline gap-2">
                              <span className="font-bold text-zinc-900">{country.name}</span>
                              {country.type && (
                                <span className="text-sm text-zinc-400 font-medium">({country.type})</span>
                              )}
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-6 py-8 text-center text-zinc-500">
                          No countries found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex-1 flex items-center px-6 py-2 min-w-[200px]">
               <select className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 p-0 cursor-pointer text-sm font-medium">
                  <option value="">Purpose Of Travel</option>
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="transit">Transit</option>
                </select>
            </div>
            <div className="flex-1 flex items-center px-6 py-2 min-w-[300px]">
              <Search className="w-5 h-5 text-zinc-400 mr-2" />
              <div className="flex items-center gap-2 flex-1">
                <input className="w-full bg-transparent border-none focus:ring-0 text-sm text-zinc-900 px-0 font-medium" placeholder="Start Date" />
                <span className="text-zinc-300">→</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-sm text-zinc-900 px-0 font-medium" placeholder="End Date" />
              </div>
            </div>
            <div className="px-2 py-1">
              <button className="bg-primary hover:bg-primary/95 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 whitespace-nowrap shadow-sm group">
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Explore
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">How It Works</h2>
            <p className="text-zinc-500">Four simple steps to secure your travel documentation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-zinc-100 z-0"></div>
            
            {[
              { icon: Globe, title: 'Select Country', desc: 'Enter your destination to see specific entry rules.', active: true },
              { icon: FileText, title: 'Check Requirements', desc: 'Review required documents and eligibility criteria.', active: true, pulse: true },
              { icon: UploadCloud, title: 'Upload Documents', desc: 'Securely submit your paperwork for expert review.' },
              { icon: PlaneTakeoff, title: 'Track Application', desc: 'Monitor real-time status updates on your visa.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-ambient-base border-4 border-zinc-50 transition-all duration-300 ${step.active ? (step.pulse ? 'bg-primary text-white scale-110 shadow-xl' : 'bg-white text-primary') : 'bg-white text-zinc-200'}`}>
                  <step.icon className="w-10 h-10" />
                  {step.pulse && <div className="absolute -right-1 -top-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse border-2 border-white"></div>}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${step.active ? 'text-zinc-900' : 'text-zinc-300'}`}>{step.title}</h3>
                <p className={`text-sm ${step.active ? 'text-zinc-500' : 'text-zinc-200'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <ShieldCheck className="w-20 h-20 text-white/80 mb-8" />
          <h2 className="text-4xl font-bold text-white mb-4">Complex Application?</h2>
          <p className="text-xl text-white/90 mb-12">Our visa experts are ready to navigate the regulations for you. Ensure your documentation is perfect before submission.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-secondary-container hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-2xl transition-all shadow-xl hover:shadow-orange-500/20 active:scale-[0.98]">
              Speak to an Expert
            </button>
            <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold px-12 py-5 rounded-2xl transition-all">
              Browse FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
