import { LayoutDashboard, BookOpen, Map, FolderOpen, Settings, Plane, History, CheckCircle2, RefreshCw, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard, active: true },
    { name: 'My Bookings', icon: BookOpen },
    { name: 'Visa Tracker', icon: Map },
    { name: 'Documents', icon: FolderOpen },
    { name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Upcoming Trips', value: '2', sub: 'booked', icon: Plane, bg: 'bg-primary/10', text: 'text-primary' },
    { label: 'Active Visas', value: '1', sub: 'in progress', icon: FolderOpen, bg: 'bg-secondary-container/10', text: 'text-secondary-container' },
    { label: 'Travel Points', value: '4,250', sub: 'pts', icon: History, bg: 'bg-zinc-100', text: 'text-zinc-600' },
  ];

  const bookings = [
    { 
      title: 'Paris Getaway', 
      date: 'Oct 15 - Oct 22, 2024', 
      status: 'Upcoming', 
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      flight: 'Confirmed',
      hotel: 'Confirmed'
    },
    { 
      title: 'Tokyo Explorer', 
      date: 'Mar 10 - Mar 24, 2024', 
      status: 'Completed', 
      img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-zinc-200 bg-white py-8 sticky top-0 h-screen shrink-0">
        <div className="px-6 mb-10">
          <img src="https://i.postimg.cc/Jnrg4Jqr/gootoholidays-yellow.png" alt="Goto Holidays" className="h-12 w-auto" />
        </div>

        <div className="px-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-100">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Sarah" />
            </div>
            <div>
              <div className="font-bold text-zinc-900 text-sm">Sarah Jenkins</div>
              <div className="text-xs text-zinc-500">Expert Guidance</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-4">
          {sidebarLinks.map((link) => (
            <button 
              key={link.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                link.active 
                  ? 'bg-primary/10 text-primary font-bold shadow-sm' 
                  : 'text-zinc-500 hover:bg-zinc-50 hover:text-primary'
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm">{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="px-6 mt-auto">
          <button className="w-full py-4 bg-secondary-container hover:bg-orange-600 text-white rounded-2xl font-bold transition-all shadow-lg active:scale-[0.98]">
            Plan New Trip
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Welcome Header */}
          <header>
            <h1 className="text-4xl font-bold text-zinc-900 mb-2 font-display">Welcome back, Sarah</h1>
            <p className="text-lg text-zinc-500">Here is an overview of your upcoming travels and visa statuses.</p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-ambient-base border border-zinc-100 relative overflow-hidden flex flex-col gap-4 group"
              >
                <div className={`absolute -right-6 -top-6 w-24 h-24 ${stat.bg} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-all`}></div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${stat.bg} ${stat.text} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-zinc-900">{stat.value}</span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Bookings */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">My Bookings</h2>
                <button className="text-primary font-bold text-sm hover:underline">View All</button>
              </div>

              <div className="space-y-6">
                {bookings.map((booking, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-2xl overflow-hidden shadow-ambient-base border border-zinc-100 flex flex-col sm:flex-row transition-all ${
                      booking.status === 'Completed' ? 'opacity-70 hover:opacity-100 grayscale-[0.3] hover:grayscale-0' : ''
                    }`}
                  >
                    <div className="sm:w-1/3 h-48 sm:h-auto relative shrink-0">
                      <img src={booking.img} alt={booking.title} className="w-full h-full object-cover" />
                      {booking.status === 'Upcoming' && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-zinc-900 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">Upcoming</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-zinc-900">{booking.title}</h3>
                          {booking.status === 'Upcoming' && <button className="text-zinc-400 hover:text-primary"><Settings className="w-4 h-4" /></button>}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-6">
                           <History className="w-4 h-4" />
                           <span>{booking.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                        {booking.status === 'Upcoming' ? (
                          <>
                             <div className="flex items-center gap-4">
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Flight</span>
                                <span className="text-xs font-bold text-primary flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Confirmed</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Hotel</span>
                                <span className="text-xs font-bold text-primary flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Confirmed</span>
                              </div>
                            </div>
                            <button className="text-secondary-container font-bold text-sm hover:underline">Itinerary</button>
                          </>
                        ) : (
                          <>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 px-2 py-1 rounded">Completed</span>
                            <button className="text-primary font-bold text-sm hover:underline">Rebook</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Visa Tracker */}
            <div className="lg:col-span-5 space-y-8">
               <h2 className="text-2xl font-bold text-zinc-900">Visa Application Tracker</h2>
               
               <div className="bg-white rounded-3xl p-8 shadow-2xl border-l-8 border-l-secondary-container border border-zinc-50 relative">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Schengen Visa (France)</h3>
                      <p className="text-xs font-medium text-zinc-400 mt-1">Application ID: FR-8924-VL</p>
                    </div>
                    <span className="bg-orange-50 text-secondary-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border border-orange-100">
                      <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
                      Under Review
                    </span>
                  </div>

                  <div className="relative pl-6 border-l-2 border-zinc-100 ml-3 space-y-10">
                    <div className="relative">
                      <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-white shadow-sm">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Documents Submitted</h4>
                      <p className="text-xs text-zinc-400 mt-1">Sep 12, 2024</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-secondary-container text-white flex items-center justify-center ring-4 ring-white shadow-sm">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Embassy Review</h4>
                      <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Currently processing at the Consulate General of France in New York. Usually takes 5-7 business days.</p>
                    </div>

                    <div className="relative opacity-30">
                       <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-zinc-200 text-white flex items-center justify-center ring-4 ring-white">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Approved & Dispatched</h4>
                      <p className="text-xs text-zinc-400 mt-1">Pending decision</p>
                    </div>
                  </div>

                  <button className="w-full mt-12 py-3 border-2 border-zinc-100 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm text-zinc-600 hover:bg-zinc-50 hover:border-zinc-200 transition-all">
                    <Eye className="w-4 h-4" /> View Full Application
                  </button>
               </div>

               <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary mb-1">Need help Sarah?</h4>
                    <p className="text-xs text-primary/70">Connect with your dedicated visa officer.</p>
                  </div>
                  <button className="w-10 h-10 bg-primary rounded-xl text-white flex items-center justify-center shadow-lg shadow-primary/20">
                    <ExternalLink className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
