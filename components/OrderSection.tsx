
import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const OrderSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Casablanca',
    farmType: 'Home garden',
    sensors: '1',
    contactMethod: 'WhatsApp',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hello Agrix! I'm ${formData.name || 'interested'} from ${formData.city}. I'd like to order ${formData.sensors} sensor(s) for my ${formData.farmType}. Please contact me via ${formData.contactMethod}.`);
    window.open(`https://wa.me/212649495374?text=${text}`, '_blank');
  };

  return (
    <section id="order" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 blur-[120px] rounded-full -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="bg-white text-stone-900 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-4" />
                <h3 className="text-3xl font-bold">Request Received!</h3>
                <p className="text-stone-600">Thanks! We’ll contact you within 24–48h on your chosen channel.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-emerald-600 font-bold border-b-2 border-emerald-600"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-3xl font-extrabold mb-2">Order Online</h3>
                  <p className="text-stone-500">Submit your interest and our team will get back to you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Full Name *</label>
                    <input 
                      type="text" required 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      placeholder="Ahmed Mansour"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" required 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      placeholder="+212 6..."
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">City / Region</label>
                    <select 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    >
                      {['Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Fes', 'Tangier', 'Meknes', 'Other'].map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Farm Type</label>
                    <select 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formData.farmType}
                      onChange={e => setFormData({...formData, farmType: e.target.value})}
                    >
                      {['Home garden', 'Small farm', 'Medium farm', 'Cooperative'].map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Number of Sensors</label>
                    <input 
                      type="number" min="1" max="20"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formData.sensors}
                      onChange={e => setFormData({...formData, sensors: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Preferred Contact</label>
                    <div className="flex gap-4">
                      {['WhatsApp', 'Call'].map(method => (
                        <button 
                          key={method}
                          type="button"
                          onClick={() => setFormData({...formData, contactMethod: method})}
                          className={`flex-1 py-3 rounded-xl border font-semibold transition-all ${formData.contactMethod === method ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-stone-600 border-stone-200'}`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  {isSubmitting ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : <Send className="w-5 h-5" />}
                  Submit Order Request
                </button>
              </form>
            )}
          </div>

          {/* WhatsApp Side */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-emerald-400 font-bold uppercase tracking-widest mb-4">Express Order</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Prefer a Direct Chat?</h3>
              <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-md">
                Skip the form and chat with our sales team directly on WhatsApp. We typically respond in under 15 minutes during business hours.
              </p>
              
              <button 
                onClick={handleWhatsAppOrder}
                className="group inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-2xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                Order via WhatsApp
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700">
                <p className="text-3xl font-bold mb-1">24h</p>
                <p className="text-sm text-stone-500 font-bold uppercase">Dispatch Time</p>
              </div>
              <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700">
                <p className="text-3xl font-bold mb-1">Free</p>
                <p className="text-sm text-stone-500 font-bold uppercase">Setup Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
