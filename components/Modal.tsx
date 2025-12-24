
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.2)] overflow-hidden scale-100 transition-all duration-500 animate-[slideUp_0.4s_ease-out]">
        <div className="p-8 border-b border-stone-50 flex justify-between items-center bg-stone-50/50">
          <h3 className="text-2xl font-black text-stone-900 tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
