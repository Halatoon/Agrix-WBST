
import React from 'react';
import { Radio, Database, BrainCircuit, MessageSquareText, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const HowItWorks: React.FC = () => {
  const revealRef = useReveal({ once: true });
  
  const steps = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "1. Deployment",
      desc: "Place our high-precision Agrix sensor in your soil. It pairs instantly with our cloud via LoRaWAN."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "2. Real-time Stream",
      desc: "24/7 monitoring of moisture, NPK nutrients, temperature, and atmospheric pressure."
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "3. AI Diagnostics",
      desc: "Our neural engine compares your data against decades of Moroccan agronomical research."
    },
    {
      icon: <MessageSquareText className="w-8 h-8" />,
      title: "4. Direct Action",
      desc: "Receive actionable commands like 'Water for 15m' directly on WhatsApp or our app."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-stone-50 overflow-hidden relative">
      <div className="bg-pattern absolute inset-0"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest mb-4">The Agrix Ecosystem</h2>
            <h3 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">Data to Harvest. <br />Simply.</h3>
          </div>
          <p className="text-stone-500 text-lg max-w-sm leading-relaxed">We remove the guesswork from farming, translating complex IoT data into simple daily tasks.</p>
        </div>

        <div 
          ref={revealRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-reveal"
        >
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 h-full transition-all duration-500 hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h4>
                <p className="text-stone-500 leading-relaxed font-medium">{step.desc}</p>
                
                {/* Step number bg */}
                <span className="absolute top-6 right-8 text-7xl font-black text-stone-100 pointer-events-none group-hover:text-emerald-50 transition-colors">0{i+1}</span>
              </div>
              
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-emerald-100 pointer-events-none group-hover:text-emerald-300 transition-colors group-hover:translate-x-2">
                  <ArrowRight className="w-10 h-10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
