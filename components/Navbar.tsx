
import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAppModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Track active section for navigation highlighting
    const sections = ['home', 'how-it-works', 'features', 'order', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Workflow', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Solutions', href: '#features', id: 'features' },
    { name: 'Ordering', href: '#order', id: 'order' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3 px-6' : 'py-6 px-6'}`}>
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-0'}`}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-500/20">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-stone-900">Agrix</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all uppercase tracking-widest relative group py-2
                ${activeSection === link.id ? 'text-emerald-600' : 'text-stone-500 hover:text-emerald-500'}
              `}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <button 
            onClick={onOpenAppModal}
            className="bg-stone-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/20 transition-all duration-300 flex items-center gap-2 ml-4"
          >
            Go to App
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center bg-stone-100 rounded-xl text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div className={`md:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[-1] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-0 left-0 bottom-0 w-[80%] bg-white shadow-2xl z-[101] p-8 flex flex-col transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-2 mb-12">
          <Leaf className="w-6 h-6 text-emerald-600" />
          <span className="text-2xl font-black text-stone-900">Agrix</span>
        </div>
        
        <div className="flex flex-col gap-6 mb-12">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-2xl font-black transition-colors ${activeSection === link.id ? 'text-emerald-600' : 'text-stone-900 hover:text-emerald-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => { onOpenAppModal(); setIsMobileMenuOpen(false); }}
          className="mt-auto bg-emerald-600 text-white px-6 py-5 rounded-[1.5rem] font-black text-xl w-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-3"
        >
          Go to App
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
