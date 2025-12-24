
import React from 'react';
import { Leaf, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-black text-stone-800 tracking-tighter">Agrix</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-600 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h5 className="font-bold text-stone-800 mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-stone-800 mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#features" className="hover:text-emerald-600 transition-colors">IoT Sensors</a></li>
              <li><a href="#features" className="hover:text-emerald-600 transition-colors">AI Platform</a></li>
              <li><a href="#order" className="hover:text-emerald-600 transition-colors">Order Now</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-stone-800 mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Contact Support</a></li>
              <li><a href="#app" className="hover:text-emerald-600 transition-colors">App Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-stone-800 mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-50 text-stone-400 text-xs gap-4 text-center">
          <p className="font-medium">Agrix © {new Date().getFullYear()} — Built for Moroccan Soil. Made for Sustainable Agriculture.</p>
          <div className="flex gap-4">
             <span className="flex items-center gap-1 font-bold">Developed in 🇲🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
