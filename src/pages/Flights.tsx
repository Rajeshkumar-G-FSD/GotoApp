import { Search, PlaneTakeoff, ArrowRight, Check, Bolt, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Flights() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-ambient-base border border-zinc-100">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Filters</h2>
          
          <div className="mb-6 border-b border-zinc-100 pb-6">
            <h3 className="text-sm font-semibold text-zinc-500 mb-4 uppercase tracking-wider">Stops</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Direct', price: '$450' },
                { label: '1 Stop', price: '$380' },
                { label: '2+ Stops', price: '$320' }
              ].map((stop) => (
                <label key={stop.label} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-zinc-600 group-hover:text-primary transition-colors">{stop.label}</span>
                  <span className="ml-auto text-xs font-medium text-zinc-400">{stop.price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 border-b border-zinc-100 pb-6">
            <h3 className="text-sm font-semibold text-zinc-500 mb-4 uppercase tracking-wider">Airlines</h3>
            <div className="flex flex-col gap-3">
              {['Emirates', 'Qatar Airways', 'Singapore Airlines', 'Lufthansa'].map((airline) => (
                <label key={airline} className="flex items-center gap-3 cursor-pointer group">
                   <input 
                    type="checkbox" 
                    defaultChecked={airline === 'Emirates' || airline === 'Qatar Airways'}
                    className="w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary" 
                  />
                  <span className="text-sm text-zinc-600 group-hover:text-primary">{airline}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-grow flex flex-col gap-6">
        {/* Search Summary Header */}
        <div className="bg-white rounded-2xl p-5 shadow-ambient-base flex flex-wrap items-center justify-between gap-4 border border-zinc-100">
          <div className="flex items-center gap-4">
            <div className="bg-zinc-50 p-3 rounded-lg text-primary">
              <PlaneTakeoff className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                New York (JFK) <ArrowRight className="w-4 h-4 text-zinc-400" /> London (LHR)
              </h1>
              <p className="text-sm text-zinc-500 mt-1">Oct 15 - Oct 22 • 1 Adult • Economy</p>
            </div>
          </div>
          <button className="px-6 py-2 border border-zinc-200 rounded-lg font-semibold text-sm text-primary hover:bg-zinc-50 transition-colors">
            Modify Search
          </button>
        </div>

        {/* Sorting Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-white p-1 rounded-xl shadow-ambient-base border border-zinc-100">
          {[
            { label: 'Cheapest', info: '$380 • 11h 20m', active: true },
            { label: 'Best Value', info: '$450 • 7h 15m' },
            { label: 'Fastest', info: '$520 • 6h 50m' }
          ].map((tab) => (
            <button 
              key={tab.label}
              className={`py-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                tab.active ? 'bg-primary/10 text-primary border border-primary/20' : 'hover:bg-zinc-50 text-zinc-900'
              }`}
            >
              <span className="font-bold text-sm">{tab.label}</span>
              <span className="text-xs font-normal opacity-70">{tab.info}</span>
            </button>
          ))}
        </div>

        {/* Flight Cards */}
        <div className="flex flex-col gap-4">
          {/* Featured Card */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl shadow-ambient-card overflow-hidden border border-primary/20 relative"
          >
            <div className="absolute top-0 left-0 bg-primary text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-br-lg">
              Best Value
            </div>
            <div className="p-6 flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-4 lg:mt-0">
               <div className="w-full lg:w-48 flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1610473068565-df0487002061?auto=format&fit=crop&q=80&w=100" alt="Emirates logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900">Emirates</p>
                  <p className="text-xs text-zinc-400">EK 201</p>
                </div>
              </div>

              <div className="flex-grow flex items-center justify-between w-full px-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-zinc-900">08:30</p>
                  <p className="text-sm font-medium text-zinc-500 uppercase">JFK</p>
                </div>
                <div className="flex flex-col items-center flex-grow px-8">
                  <p className="text-xs text-zinc-400 mb-1">7h 15m</p>
                  <div className="w-full flex items-center">
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                    <PlaneTakeoff className="w-5 h-5 text-primary mx-2" />
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                  </div>
                  <p className="text-xs font-bold text-primary mt-1">Direct</p>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-zinc-900">20:45<sup className="text-xs text-secondary-container ml-1">+1</sup></p>
                  <p className="text-sm font-medium text-zinc-500 uppercase">LHR</p>
                </div>
              </div>

              <div className="w-full lg:w-48 flex flex-col items-end shrink-0 lg:border-l lg:border-zinc-100 lg:pl-10">
                <p className="text-xs text-zinc-400 mb-1">per traveler</p>
                <p className="text-3xl font-bold text-zinc-900 mb-4">$450</p>
                <button className="w-full bg-secondary-container hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-sm">
                  Select
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-ambient-base p-6 flex flex-col lg:flex-row items-center gap-8 border border-zinc-100 hover:border-primary/20 transition-all">
             <div className="w-full lg:w-48 flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540339832862-4745a9805ad0?auto=format&fit=crop&q=80&w=100" alt="Qatar logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900">Qatar Airways</p>
                  <p className="text-xs text-zinc-400">QR 702</p>
                </div>
              </div>

              <div className="flex-grow flex items-center justify-between w-full px-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-zinc-900">22:00</p>
                  <p className="text-sm font-bold text-zinc-500 uppercase">JFK</p>
                </div>
                <div className="flex flex-col items-center flex-grow px-8">
                  <p className="text-xs text-zinc-400 mb-1">11h 20m</p>
                  <div className="w-full flex items-center relative">
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                    <div className="w-2 h-2 rounded-full border-2 border-primary bg-white absolute left-1/2 -translate-x-1/2"></div>
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">1 Stop (DOH)</p>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-zinc-900">14:20<sup className="text-xs text-secondary-container ml-1">+1</sup></p>
                  <p className="text-sm font-medium text-zinc-500 uppercase">LHR</p>
                </div>
              </div>

              <div className="w-full lg:w-48 flex flex-col items-end shrink-0 lg:border-l lg:border-zinc-100 lg:pl-10">
                <p className="text-xs text-zinc-400 mb-1">per traveler</p>
                <p className="text-3xl font-bold text-zinc-900 mb-4">$380</p>
                <button className="w-full border border-primary text-primary hover:bg-primary/5 font-bold py-3 rounded-xl transition-all">
                  Select
                </button>
              </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-ambient-base p-6 flex flex-col lg:flex-row items-center gap-8 border border-zinc-100 hover:border-primary/20 transition-all relative">
            <div className="absolute top-4 right-4 bg-zinc-50 text-zinc-500 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
              <Bolt className="w-3 h-3 text-secondary-container" /> FASTEST
            </div>
            <div className="w-full lg:w-48 flex items-center gap-4 shrink-0 mt-2 lg:mt-0">
                <div className="w-12 h-12 rounded bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?auto=format&fit=crop&q=80&w=100" alt="Virgin logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900">Virgin Atlantic</p>
                  <p className="text-xs text-zinc-400">VS 04</p>
                </div>
              </div>
              <div className="flex-grow flex items-center justify-between w-full px-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-zinc-900">19:30</p>
                  <p className="text-sm font-medium text-zinc-500 uppercase">JFK</p>
                </div>
                <div className="flex flex-col items-center flex-grow px-8">
                  <p className="text-xs text-zinc-400 mb-1">6h 50m</p>
                  <div className="w-full flex items-center">
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                    <PlaneTakeoff className="w-5 h-5 text-primary mx-2" />
                    <div className="h-[2px] bg-zinc-200 flex-grow"></div>
                  </div>
                  <p className="text-xs font-bold text-primary mt-1">Direct</p>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-zinc-900">07:20<sup className="text-xs text-secondary-container ml-1">+1</sup></p>
                  <p className="text-sm font-medium text-zinc-500 uppercase">LHR</p>
                </div>
              </div>
              <div className="w-full lg:w-48 flex flex-col items-end shrink-0 lg:border-l lg:border-zinc-100 lg:pl-10">
                <p className="text-xs text-zinc-400 mb-1">per traveler</p>
                <p className="text-3xl font-bold text-zinc-900 mb-4">$520</p>
                <button className="w-full border border-primary text-primary hover:bg-primary/5 font-bold py-3 rounded-xl transition-all">
                  Select
                </button>
              </div>
          </div>
        </div>

        <button className="w-fit mx-auto mt-6 px-8 py-3 bg-zinc-100 text-zinc-700 font-bold rounded-xl hover:bg-zinc-200 transition-colors">
          Load More Flights
        </button>
      </section>
    </div>
  );
}
