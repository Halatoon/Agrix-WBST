
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart, Leaf, ChevronRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenAppModal: () => void;
}

const StatCounter = ({ end, label }: { end: number, label: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center group cursor-default">
      <p className="text-4xl font-black text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">{count}%</p>
      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] mt-1 group-hover:text-stone-500 transition-colors duration-300">{label}</p>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onOpenAppModal }) => {
  const WHATSAPP_NUMBER = "+212649495374";
  
  const handleWhatsAppHeroOrder = () => {
    const text = encodeURIComponent("Hello Agrix! I'm interested in ordering your smart sensors. Please contact me.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/40 -z-10 skew-x-12 transform translate-x-48 hidden lg:block transition-transform duration-1000 ease-out"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lime-200/30 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center gap-3 bg-white border border-emerald-100 shadow-sm px-5 py-2 rounded-full text-sm font-semibold text-emerald-700 hover:border-emerald-300 transition-all cursor-default">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            Precision Agriculture in Morocco
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black text-stone-900 leading-[1.05] tracking-tight">
            Smart Farming <br />
            <span className="gradient-text">Starts from the Soil.</span>
          </h1>
          
          <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-medium">
            Join the 500+ Moroccan farms using AI and IoT to eliminate water waste and maximize harvests.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a 
              href="#order"
              className="flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-stone-800 hover:shadow-2xl hover:shadow-stone-900/10 transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5" />
              Order Sensor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            
            <button 
              onClick={handleWhatsAppHeroOrder}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[#21be5b] hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Order via WhatsApp
            </button>

            <button 
              onClick={onOpenAppModal}
              className="flex items-center justify-center gap-3 bg-white text-emerald-600 border-2 border-emerald-100 px-8 py-5 rounded-2xl font-bold text-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-300 shadow-xl shadow-stone-200/50 group"
            >
              Access Dashboard
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex items-center gap-12 pt-10">
            <StatCounter end={40} label="Water Saved" />
            <div className="w-px h-12 bg-stone-200"></div>
            <StatCounter end={25} label="Yield Increase" />
            <div className="w-px h-12 bg-stone-200"></div>
            <StatCounter end={100} label="Local Parts" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-[slideInRight_1s_ease-out]">
          <div className="relative z-10 w-full max-w-lg animate-float">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[12px] border-white group">
              <img 
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1000&auto=format&fit=crop" 
                alt="Agrix Technology" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
            </div>
            
            {/* Mockup Floating Badges */}
            <div className="absolute -top-8 -left-8 glass p-5 rounded-3xl shadow-2xl z-20 border border-emerald-100 flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <Leaf className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Soil Moisture</p>
                <p className="text-xl font-black text-emerald-600 leading-tight">Optimal 22%</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-2xl z-20 border border-emerald-100 hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <p className="text-xs font-bold text-stone-500">Alert Detected</p>
              </div>
              <p className="text-lg font-bold text-stone-800 leading-tight">Nutrient Deficit in <br/>North Section B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
