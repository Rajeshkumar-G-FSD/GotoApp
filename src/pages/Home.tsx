import { Plane, Train, Luggage, MapPin, Calendar, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/thailand.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" 
              alt="Tropical coastline"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/20 to-background"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md"
          >
            Discover the World with Confidence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white mb-12 max-w-2xl drop-shadow-sm"
          >
            Expert visa processing, curated holiday packages, and seamless flight bookings all in one place.
          </motion.p>

          {/* Search Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-4xl border border-zinc-200"
          >
            <div className="flex space-x-6 border-b border-zinc-200 mb-6 pb-2">
              <button className="flex items-center space-x-2 text-primary border-b-2 border-primary pb-2 -mb-[9px] font-semibold text-sm">
                <Plane className="w-5 h-5" />
                <span>Flights</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-500 hover:text-primary transition-colors pb-2 -mb-[9px] font-semibold text-sm">
                <Train className="w-5 h-5" />
                <span>Trains</span>
              </button>
              <button className="flex items-center space-x-2 text-zinc-500 hover:text-primary transition-colors pb-2 -mb-[9px] font-semibold text-sm">
                <Luggage className="w-5 h-5" />
                <span>Packages</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-zinc-500 mb-1 ml-1 text-left">From</label>
                <div className="flex items-center border border-zinc-200 rounded-lg px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary bg-zinc-50">
                  <MapPin className="w-5 h-5 text-zinc-400 mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-zinc-900 placeholder-zinc-400" placeholder="Origin city" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-zinc-500 mb-1 ml-1 text-left">To</label>
                <div className="flex items-center border border-zinc-200 rounded-lg px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary bg-zinc-50">
                  <MapPin className="w-5 h-5 text-zinc-400 mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-zinc-900 placeholder-zinc-400" placeholder="Destination" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-zinc-500 mb-1 ml-1 text-left">Dates</label>
                <div className="flex items-center border border-zinc-200 rounded-lg px-3 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary bg-zinc-50">
                  <Calendar className="w-5 h-5 text-zinc-400 mr-2" />
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-zinc-900 placeholder-zinc-400" placeholder="Add dates" />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-secondary-container text-white hover:bg-secondary-container/90 transition-colors py-3 rounded-lg font-semibold flex justify-center items-center shadow-sm">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa Simplified Banner */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl-teal border border-zinc-100 p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex items-center space-x-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-1">Visa Simplified</h2>
              <p className="text-sm text-zinc-500 max-w-md">Navigate global visa requirements with our expert guidance. Check your eligibility and apply seamlessly.</p>
            </div>
          </div>
          <div className="flex gap-4 relative z-10 w-full md:w-auto mt-6 md:mt-0">
            <button className="flex-1 md:flex-none px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-full font-semibold transition-colors">
              Check Requirements
            </button>
            <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white hover:bg-primary/95 rounded-full font-semibold transition-colors shadow-sm flex items-center justify-center">
              Start Application <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Popular Destinations</h2>
            <p className="text-zinc-500">Quick access to common visa guides.</p>
          </div>
          <button className="text-primary font-semibold flex items-center gap-1 hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-ambient-base">
            <img 
              src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=1200" 
              alt="France"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">Schengen Area</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">10-15 Days</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">France</h3>
              <p className="text-white/80 max-w-md">Comprehensive guide for tourist, business, and transit visas for the Schengen zone.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 font-display">
            <div className="flex-1 relative rounded-xl overflow-hidden group cursor-pointer shadow-ambient-base">
              <img 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=800" 
                alt="Japan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">E-Visa Available</span>
                <h3 className="text-2xl font-bold text-white">Japan</h3>
              </div>
            </div>
            <div className="flex-1 relative rounded-xl overflow-hidden group cursor-pointer shadow-ambient-base">
              <img 
                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800" 
                alt="Australia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-secondary-container/90 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">ETA Required</span>
                <h3 className="text-2xl font-bold text-white">Australia</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
