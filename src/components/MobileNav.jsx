import { useState } from 'react';

export default function MobileNav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  return (
    <div className="lg:hidden fixed top-6 right-6 z-[3000]">
      
      {/* Menu Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#050505] border border-tertiary text-tertiary px-4 py-2 z-[3001] relative shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:bg-tertiary hover:text-black transition-colors"
      >
        <div className="font-display text-xs font-black tracking-widest">
          {isOpen ? '[ ABORT ]' : '[ MENU ]'}
        </div>
      </button>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 flex flex-col justify-center px-12 z-[3000] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute top-10 left-8 border-l-2 border-tertiary pl-4">
           <div className="font-display text-xl text-fg font-black">SYSTEM_MENU</div>
           <div className="font-display text-xs text-tertiary mt-1">UPLINK_ACTIVE</div>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <a 
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-6 w-fit"
            >
              <span className={`font-display text-sm tracking-widest transition-colors ${activeSection === section ? 'text-tertiary' : 'text-fg/30 group-hover:text-tertiary'}`}>
                0{i + 1}
              </span>
              <span className={`font-display text-3xl sm:text-4xl font-black uppercase tracking-[0.15em] transition-all ${activeSection === section ? 'text-tertiary translate-x-2' : 'text-fg/80 group-hover:text-fg group-hover:translate-x-2'}`}>
                {section === 'hero' ? 'HOME' : section}
              </span>
            </a>
          ))}
        </div>
        
        {/* Decorative Bottom Border */}
        <div className="absolute bottom-10 left-8 right-8 border-t border-dashed border-tertiary/30 pt-4 flex justify-between font-display text-[0.65rem] text-tertiary/50 uppercase tracking-widest">
            <span>SECURE_CONNECTION</span>
            <span>V_1.0.0</span>
        </div>
      </div>
      
    </div>
  );
}