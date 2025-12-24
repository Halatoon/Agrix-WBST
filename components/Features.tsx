
import React from 'react';
import { Droplets, ScanFace, Microscope, ShieldAlert, LayoutDashboard, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface FeaturesProps {
  onOpenSpec: (feature: any) => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenSpec }) => {
  const revealRef = useReveal({ once: true });
  
  const solutions = [
    {
      title: "Smart Irrigation",
      desc: "Stop overwatering. Our sensors trigger irrigation only when soil water potential is actually low.",
      icon: <Droplets className="w-7 h-7" />,
      color: "emerald",
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white"
    },
    {
      title: "Disease Vision",
      desc: "Instantly identify 40+ common plant diseases by scanning leaves with your phone's camera.",
      icon: <ScanFace className="w-7 h-7" />,
      color: "blue",
      bg: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white"
    },
    {
      title: "Soil Chemistry",
      desc: "Detailed N-P-K nutrient tracking. Apply exactly what's missing, saving thousands on fertilizers.",
      icon: <Microscope className="w-7 h-7" />,
      color: "amber",
      bg: "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-600 hover:text-white"
    },
    {
      title: "Pest Sentinel",
      desc: "Autonomous monitoring for pest activity with predictive early-warning alerts for your region.",
      icon: <ShieldAlert className="w-7 h-7" />,
      color: "rose",
      bg: "bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-600 hover:text-white"
    },
    {
      title: "Field Dashboard",
      desc: "Centralize data from thousands of sensors across different geographical locations.",
      icon: <LayoutDashboard className="w-7 h-7" />,
      color: "purple",
      bg: "bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-600 hover:text-white",
      badge: "In Beta"
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Precision Suite</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">Advanced tools for <br/>modern growers.</h3>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-stone-900 font-bold px-8 py-4 bg-stone-100 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all">
            See all solutions <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal"
        >
          {solutions.map((item, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border border-stone-100 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-start group relative overflow-hidden ${item.badge ? 'opacity-80' : ''}`}>
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity rounded-full bg-${item.color}-600 blur-3xl`}></div>
              
              <div className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center mb-10 border transition-all duration-500 ${item.bg}`}>
                {item.icon}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <h4 className="text-2xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                {item.badge && <span className="bg-stone-900 text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest">{item.badge}</span>}
              </div>
              
              <p className="text-stone-500 font-medium leading-relaxed mb-10 flex-grow group-hover:text-stone-600 transition-colors">{item.desc}</p>
              
              <button 
                onClick={() => onOpenSpec(item)}
                className="text-stone-800 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform"
              >
                Technical specs <ChevronRight className="w-5 h-5 text-emerald-500" />
              </button>
            </div>
          ))}
          
          <div className="p-10 rounded-[2.5rem] bg-emerald-600 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-emerald-500/20 group">
             <h4 className="text-3xl font-black mb-4">Need a custom <br/>integration?</h4>
             <p className="opacity-80 mb-10">We build bespoke enterprise monitoring for cooperatives.</p>
             <a href="#contact" className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
               Contact Sales
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
