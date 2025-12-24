
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const revealRef = useReveal({ once: true });
  
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-6 reveal">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Our Mission</h2>
          <h3 className="text-4xl md:text-6xl font-black text-stone-900 mb-8 leading-tight">Empowering Moroccan <br/>Agriculture with Data.</h3>
          <p className="text-xl text-stone-500 leading-relaxed font-medium">
            Agrix was founded in the heart of Morocco with a simple vision: to make sustainable farming accessible to every farmer. In a land where water is our most precious resource, we use AI and IoT to ensure not a single drop is wasted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-reveal active">
          {[
            {
              title: "Local Expertise",
              desc: "Engineered specifically for Moroccan soil types and climatic conditions.",
              icon: "🇲🇦"
            },
            {
              title: "Sustainability First",
              desc: "Our primary metric is water conservation and chemical reduction.",
              icon: "🌱"
            },
            {
              title: "Inclusive Design",
              desc: "Intuitive interfaces and WhatsApp integration for all tech skill levels.",
              icon: "🤝"
            }
          ].map((item, i) => (
            <div key={i} className="bg-stone-50 p-12 rounded-[2.5rem] hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 group border border-transparent hover:border-emerald-100">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
              <h4 className="text-2xl font-black text-stone-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-stone-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
