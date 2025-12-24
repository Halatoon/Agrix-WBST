
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const revealRef = useReveal({ once: true });
  const WHATSAPP_NUMBER = "+212 649 49 53 74";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-0"></div>
      
      <div ref={revealRef} className="container mx-auto px-6 relative z-10 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Get in Touch</h2>
              <h3 className="text-5xl font-black text-stone-900 leading-tight">Let's grow <br/>together.</h3>
            </div>
            
            <p className="text-stone-500 text-xl font-medium leading-relaxed max-w-lg">
              Have questions about our technology or need custom solutions for your farm? Our team is ready to help you optimize your operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { icon: <Mail />, label: "Email", val: "contact@agrix.ma", link: "mailto:contact@agrix.ma" },
                { icon: <Phone />, label: "Phone", val: "+212 522 00 00 00", link: "tel:+212522000000" },
                { icon: <MessageSquare />, label: "WhatsApp", val: WHATSAPP_NUMBER, link: `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '')}` },
                { icon: <MapPin />, label: "Location", val: "Technopark, Casablanca", link: "#" }
              ].map((item, i) => (
                <a key={i} href={item.link} className="flex items-center gap-5 group transition-transform hover:translate-x-1">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-stone-900 font-bold text-sm lg:text-base group-hover:text-emerald-600 transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-stone-100">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                </div>
                <h4 className="text-3xl font-black text-stone-900 mb-4">Message Sent!</h4>
                <p className="text-stone-500 text-lg mb-8">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all"
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-700 ml-1">Name</label>
                    <input type="text" required className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="Ahmed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-700 ml-1">Email</label>
                    <input type="email" required className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="ahmed@farm.ma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-1">Message</label>
                  <textarea rows={5} required className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all resize-none" placeholder="How can we help your farm?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-4 shadow-xl shadow-emerald-600/20 disabled:opacity-50 group"
                >
                  {isSubmitting ? <span className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></span> : <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
