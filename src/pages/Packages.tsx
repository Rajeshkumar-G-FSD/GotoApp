import { Calendar, Users, Mountain, Hotel, Utensils, Train, FileCheck, Headset, ArrowRight, Verified, CheckCircle2, History, MoreHorizontal, Globe, User, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Packages() {
  return (
    <div className="w-full">
      {/* Hero Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?auto=format&fit=crop&q=80&w=1200" alt="Swiss Alps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=600" alt="Swiss train" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=600" alt="Chalet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
          <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" alt="Lake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-sm text-zinc-900 shadow-sm">
                View All 24 Photos
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-12 relative">
        {/* Left Column: Details */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
          {/* Header & Quick Stats */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-zinc-100 text-zinc-600 font-bold text-xs px-3 py-1 rounded-full border border-zinc-200">Europe</span>
              <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Verified className="w-3 h-3" /> Expert Guided
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">Majestic Swiss Alps Explorer</h1>
            <p className="text-lg text-zinc-500 mt-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zinc-400" /> Zurich, Interlaken, Zermatt, Geneva
            </p>
            <div className="grid grid-cols-3 gap-4 mt-10 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="flex flex-col gap-1">
                <Calendar className="w-7 h-7 text-primary mb-2" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Duration</span>
                <span className="text-xl font-bold text-zinc-900">8 Days</span>
              </div>
              <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                <Users className="w-7 h-7 text-primary mb-2" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Group Size</span>
                <span className="text-xl font-bold text-zinc-900">Max 12</span>
              </div>
              <div className="flex flex-col gap-1">
                <Mountain className="w-7 h-7 text-primary mb-2" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Activity Level</span>
                <span className="text-xl font-bold text-zinc-900">Moderate</span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Journey Overview</h2>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Experience the breathtaking beauty of the Swiss Alps on this meticulously curated 8-day adventure. From the vibrant streets of Zurich to the shadow of the iconic Matterhorn, this journey combines exhilarating outdoor activities with the luxurious comfort of premium alpine lodges. Traverse deep valleys on the legendary Glacier Express, hike through pristine alpine meadows, and savor authentic local cuisine in charming mountain villages.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Hotel, title: 'Premium Accommodation', desc: '7 nights in handpicked 4-star alpine lodges and boutique hotels.' },
                { icon: Utensils, title: 'Daily Meals', desc: 'All breakfasts, 4 lunches, and 5 curated dinner experiences.' },
                { icon: Train, title: 'Internal Transport', desc: 'First-class Swiss Travel Pass including the Glacier Express.' },
                { icon: FileCheck, title: 'Visa Assistance', desc: 'Complimentary consultation and document review for Schengen visa.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-zinc-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-zinc-900 mb-10">Day-by-Day Itinerary</h2>
            <div className="relative pl-8 border-l-2 border-zinc-100 flex flex-col gap-10">
              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm ring-4 ring-white">1</div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-zinc-900">Arrival in Zurich</h3>
                    <span className="bg-zinc-50 text-zinc-500 font-bold text-[10px] px-2 py-1 rounded uppercase tracking-wider">Welcome</span>
                  </div>
                  <p className="text-zinc-500 mb-6">Arrive at Zurich Airport where your guide will meet you. Private transfer to your boutique hotel overlooking Lake Zurich. Evening welcome dinner with the group to review the adventure ahead.</p>
                  <img src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=800" alt="Zurich" className="w-full h-48 rounded-xl object-cover" />
                </div>
              </div>

               <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center font-bold text-xs ring-4 ring-white">2</div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">The GoldenPass Line to Interlaken</h3>
                  <p className="text-zinc-500 font-display">Board the panoramic GoldenPass train. Journey through lush valleys and past spectacular lakes to Interlaken, nestled between Lake Thun and Lake Brienz. Afternoon free for independent exploration or an optional funicular ride up Harder Kulm.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-zinc-50 text-zinc-300 flex items-center justify-center ring-4 ring-white">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <button className="w-full py-4 rounded-xl border-2 border-dashed border-zinc-200 text-primary font-bold hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                  View Full 8-Day Itinerary
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28 bg-white rounded-3xl p-8 shadow-2xl border border-zinc-100">
            <div className="mb-8">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Starting from</span>
              <div className="flex items-baseline gap-2 mt-1">
                <h2 className="text-4xl font-bold text-zinc-900">$3,250</h2>
                <span className="text-zinc-500 font-medium">/ person</span>
              </div>
              <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> No hidden fees
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="border border-zinc-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer bg-zinc-50">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 block">Select Dates</label>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Sep 15 - Sep 22, 2024</span>
                  <Calendar className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
              <div className="border border-zinc-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer bg-zinc-50">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 block">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">2 Adults</span>
                  <Users className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
            </div>

            <button className="w-full bg-secondary-container hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] flex justify-center items-center gap-2">
              Request to Book
            </button>
            <p className="text-center text-xs font-medium text-zinc-400 mt-4">
              You won't be charged yet.
            </p>

            <hr className="my-8 border-zinc-100" />

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                <Headset className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">Need help deciding?</h4>
                <button className="text-xs font-bold text-primary hover:underline mt-1">Contact our travel experts</button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Adventures */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Similar Adventures</h2>
              <p className="text-zinc-500 mt-2">Explore more curated experiences in Europe.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Parisian Romance', days: '5 Days', price: '$1,890', img: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=800' },
              { title: 'Italian Riviera', days: '10 Days', price: '$4,100', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800' },
              { title: 'Greek Antiquity', days: '7 Days', price: '$2,650', img: 'https://images.unsplash.com/photo-1503152397458-7c2808299027?auto=format&fit=crop&q=80&w=800' }
            ].map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-56 overflow-hidden">
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                   <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-zinc-900">{pkg.title}</h3>
                    <span className="bg-primary/10 text-primary font-bold text-[10px] px-2 py-1 rounded italic">{pkg.days}</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-6 line-clamp-2">Discover the magic of historical landmarks and gourmet dining with private guides.</p>
                   <div className="flex justify-between items-center pt-4 border-t border-zinc-50">
                    <span className="font-bold text-zinc-900">From {pkg.price}</span>
                    <button className="text-primary font-bold text-sm hover:underline">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// End of component
