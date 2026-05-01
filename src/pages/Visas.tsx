import { Search, Globe, FileText, UploadCloud, PlaneTakeoff, ShieldCheck, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Hotel } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';

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

function ModernCalendar({ selectedDate, onSelect, onClose }: { selectedDate: Date | null, onSelect: (date: Date) => void, onClose: () => void }) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  return (
    <div className="p-4 w-72">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="font-bold text-zinc-900">{format(currentMonth, 'MMMM yyyy')}</h3>
        <div className="flex gap-1">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
            <ChevronLeft className="w-4 h-4 text-zinc-600" />
          </button>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
            <ChevronRight className="w-4 h-4 text-zinc-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-[10px] font-bold text-zinc-400 text-center uppercase py-1">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          
          return (
            <button
              key={idx}
              onClick={() => {
                onSelect(day);
                onClose();
              }}
              className={`
                h-8 text-xs rounded-lg flex items-center justify-center transition-all
                ${!isCurrentMonth ? 'text-zinc-300' : 'text-zinc-700 hover:bg-zinc-100 font-medium'}
                ${isSelected ? 'bg-primary text-white hover:bg-primary/90 font-bold shadow-sm' : ''}
                ${isToday(day) && !isSelected ? 'border border-primary/30 text-primary font-bold' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Visas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activePicker, setActivePicker] = useState<'start' | 'end' | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExplore = () => {
    if (searchQuery) {
      setShowResults(true);
      setTimeout(() => {
        const element = document.getElementById('visa-results');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setActivePicker(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-zinc-50 border-b border-zinc-200 py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/thailand.mp4" type="video/mp4" />
          </video>
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
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Which country would you like to <span className="text-primary">explore?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12"
          >
            Clear, up-to-date documentation requirements to ensure your journey begins with confidence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-6xl mx-auto bg-white rounded-3xl lg:rounded-full p-2 shadow-xl border border-zinc-200 flex flex-col lg:flex-row items-stretch lg:items-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-100 relative"
          >
            {/* Country Search Input Container */}
            <div className="flex-1 flex flex-col relative" ref={dropdownRef}>
              <div className="flex items-center px-6 py-4 lg:py-2 min-w-[200px]">
                <Globe className="w-6 h-6 text-primary mr-3 shrink-0" />
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder-zinc-400 font-bold text-base md:text-lg lg:text-sm" 
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
                    className="absolute top-full left-0 lg:left-6 mt-2 w-full lg:w-[400px] bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden z-[100] text-left"
                  >
                    <div className="max-h-[400px] overflow-y-auto">
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
                            <div className="flex flex-col items-start lg:flex-row lg:items-baseline gap-1 lg:gap-2">
                              <span className="font-bold text-zinc-900 text-base">{country.name}</span>
                              {country.type && (
                                <span className="text-xs text-zinc-400 font-medium">({country.type})</span>
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

            <div className="flex-1 flex items-center px-6 py-4 lg:py-2 min-w-[200px]">
               <select className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 p-0 cursor-pointer text-base md:text-lg lg:text-sm font-bold">
                  <option value="">Purpose Of Travel</option>
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="transit">Transit</option>
                </select>
            </div>

            {/* Date Pickers Container */}
            <div className="flex-[1.5] flex items-center px-6 py-4 lg:py-2 min-w-[320px] relative" ref={pickerRef}>
              <CalendarIcon className="w-5 h-5 text-primary mr-3 shrink-0" />
              <div className="flex items-center gap-2 flex-1 relative">
                {/* Start Date */}
                <div className="flex-1 relative">
                  <button 
                    onClick={() => setActivePicker(activePicker === 'start' ? null : 'start')}
                    className={`w-full text-left py-2 text-base md:text-lg lg:text-sm font-bold transition-colors ${startDate ? 'text-zinc-900' : 'text-zinc-400'}`}
                  >
                    {startDate ? format(startDate, 'MMM dd, yyyy') : 'Start Date'}
                  </button>
                  <AnimatePresence>
                    {activePicker === 'start' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-zinc-100 z-[100] overflow-hidden"
                      >
                        <ModernCalendar 
                          selectedDate={startDate} 
                          onSelect={setStartDate} 
                          onClose={() => setActivePicker(null)} 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <span className="text-zinc-300 font-bold">→</span>

                {/* End Date */}
                <div className="flex-1 relative">
                  <button 
                    onClick={() => setActivePicker(activePicker === 'end' ? null : 'end')}
                    className={`w-full text-left py-2 text-base md:text-lg lg:text-sm font-bold transition-colors ${endDate ? 'text-zinc-900' : 'text-zinc-400'}`}
                  >
                    {endDate ? format(endDate, 'MMM dd, yyyy') : 'End Date'}
                  </button>
                  <AnimatePresence>
                    {activePicker === 'end' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-zinc-100 z-[100] overflow-hidden"
                      >
                        <ModernCalendar 
                          selectedDate={endDate} 
                          onSelect={setEndDate} 
                          onClose={() => setActivePicker(null)} 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="px-2 py-2 lg:py-1 shrink-0">
              <button 
                onClick={handleExplore}
                className="w-full lg:w-auto bg-primary hover:bg-primary/95 text-white px-10 py-4 lg:py-3 rounded-2xl lg:rounded-full font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Explore
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.section 
            id="visa-results"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-zinc-50 py-20 px-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Left Column: Requirements */}
                <div className="flex-grow space-y-12">
                  <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-zinc-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">Tourist Visa - 30 Days (Single Entry).</h2>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-zinc-100">
                        <span className="text-sm font-bold text-zinc-600">Show prices with taxes</span>
                        <div className="w-10 h-5 bg-primary rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-zinc-700 font-bold text-sm bg-white border border-zinc-200 px-5 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors">
                        <Globe className="w-4 h-4" /> Share info
                      </button>
                      <button className="bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                        Apply Visa <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Traveller Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wider">1. Traveller Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Passport front', desc: 'Passport must be valid for at least 6 months from the date of travel.' },
                        { title: 'Passport back', desc: 'Clear and full-page scan.' },
                        { title: 'Passport Cover', desc: 'Upload passport cover page' },
                        { title: 'Photograph', desc: 'The photo must be recent (not older than 3 months).' },
                      ].map((doc, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                            <FileText className="w-5 h-5 text-primary group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 mb-1">{doc.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{doc.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Travel Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wider">2. Travel Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Hotel Reservation Document (JPG)', desc: 'Must show a valid hotel reservation covering the entire stay duration.', icon: Hotel },
                        { title: 'Flight Ticket (Arrival)', desc: 'Upload confirmed arrival ticket', icon: PlaneTakeoff },
                        { title: 'Flight Ticket (Return)', desc: 'Upload confirmed return ticket', icon: PlaneTakeoff },
                      ].map((doc, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                            <doc.icon className="w-5 h-5 text-primary group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 mb-1">{doc.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{doc.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Miscellaneous */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wider">3. Miscellaneous</h3>
                    <div className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group max-w-md">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <FileText className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-1">Birth certificate</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">Birth certificate to be provided, for traveller below 18 years</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar: Visa Options */}
                <div className="w-full lg:w-[420px] shrink-0 space-y-6">
                  {[
                    { title: 'Tourist Visa - 30 Days (Single Entry).', time: '4 working days', validity: '60 days post issue', price: '₹6,959', active: true },
                    { title: 'Tourist Visa - 60 Days (Multiple Entries).', time: '4 working days', validity: '60 days post issue', price: '₹18,680', recommended: true },
                    { title: 'Tourist Visa - 60 Days (Single Entry).', time: '4 working days', validity: '60 days post issue', price: '₹12,040', recommended: true },
                    { title: 'Tourist Visa - Express - 30 Days (Single Entry).', time: '2 working days', validity: '60 days post issue', price: '₹8,400' },
                  ].map((option, idx) => (
                    <div key={idx} className={`relative rounded-3xl border-2 transition-all p-6 ${option.active ? 'border-primary bg-primary/5' : 'border-white bg-white hover:border-zinc-200'}`}>
                      {option.recommended && (
                        <div className="absolute top-0 left-0 right-0 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-t-[22px] flex items-center justify-center gap-2">
                           ✨ RECOMMENDED FOR YOUR TRAVEL ✨
                        </div>
                      )}
                      <div className={`mt-2 ${option.recommended ? 'pt-4' : ''}`}>
                        <div className="flex items-start justify-between gap-4 mb-6">
                           <h4 className="font-black text-zinc-900 tracking-tight leading-tight">{option.title}</h4>
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${option.active ? 'border-primary' : 'border-zinc-200'}`}>
                             {option.active && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-zinc-100 mb-6">
                          <div>
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Processing time</span>
                            <span className="text-sm font-bold text-primary flex items-center gap-1">
                              {option.time} <Globe className="w-3 h-3 opacity-50" />
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Visa validity</span>
                            <span className="text-sm font-bold text-zinc-900">{option.validity}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                           <span className="text-2xl font-black text-zinc-900">{option.price}</span>
                           <Globe className="w-4 h-4 text-zinc-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full bg-zinc-900 text-white font-black py-5 rounded-3xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3 shadow-xl">
                    <Globe className="w-5 h-5 text-zinc-400" />
                    For active orders query
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* How it works */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">Four simple steps to secure your travel documentation</h2>
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
