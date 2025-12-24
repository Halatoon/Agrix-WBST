
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import OrderSection from './components/OrderSection';
import AppSection from './components/AppSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const handleOpenSpec = (feature: any) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="min-h-screen relative selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onOpenAppModal={() => setIsAppModalOpen(true)} />
      
      <main>
        <Hero onOpenAppModal={() => setIsAppModalOpen(true)} />
        <About />
        <HowItWorks />
        <Features onOpenSpec={handleOpenSpec} />
        <OrderSection />
        <AppSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Global App Options Modal */}
      {isAppModalOpen && (
        <Modal 
          title="Choose Your Channel" 
          onClose={() => setIsAppModalOpen(false)}
        >
          <div className="space-y-8">
            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <span className="text-xl font-bold">W</span>
                </div>
                <div>
                  <h4 className="font-black text-emerald-900 text-xl">Web Application</h4>
                  <p className="text-sm text-emerald-700 font-medium">Full dashboard with analytics</p>
                </div>
              </div>
              <a 
                href="https://app.agrix.ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-stone-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all w-full text-center group-hover:scale-[1.02]"
              >
                Launch Dashboard
              </a>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-black text-stone-800 text-xl">Native Apps</h4>
                  <p className="text-sm text-stone-500 font-medium">Push notifications & offline mode</p>
                </div>
                <span className="bg-stone-900 text-white text-[10px] px-3 py-1 rounded-full uppercase font-black">Coming Soon</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button disabled className="bg-stone-200 text-stone-400 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">Android</button>
                <button disabled className="bg-stone-200 text-stone-400 py-4 rounded-2xl font-bold cursor-not-allowed text-sm">iOS (Beta)</button>
              </div>
            </div>

            <div className="text-center py-4 border-t border-stone-100">
               <p className="text-stone-500 font-bold mb-4 italic">Quickest way to start?</p>
               <a 
                href="https://wa.me/212649495374" 
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-black text-lg"
               >
                Onboard via WhatsApp →
               </a>
            </div>
          </div>
        </Modal>
      )}

      {/* Technical Spec Modal */}
      {selectedFeature && (
        <Modal 
          title={`${selectedFeature.title} Specifications`} 
          onClose={() => setSelectedFeature(null)}
        >
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-100">
              <h4 className="font-bold text-stone-800 mb-4">Technical Overview</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{selectedFeature.desc}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-stone-100 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Accuracy</p>
                <p className="font-bold text-stone-800">± 1.5%</p>
              </div>
              <div className="p-4 border border-stone-100 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Connectivity</p>
                <p className="font-bold text-stone-800">LoRaWAN / 4G</p>
              </div>
              <div className="p-4 border border-stone-100 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Battery Life</p>
                <p className="font-bold text-stone-800">3-5 Years</p>
              </div>
              <div className="p-4 border border-stone-100 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Response Time</p>
                <p className="font-bold text-stone-800">&lt; 2 Seconds</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#order" 
                onClick={() => setSelectedFeature(null)}
                className="block w-full bg-emerald-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-colors"
              >
                Request Quote for this Feature
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
