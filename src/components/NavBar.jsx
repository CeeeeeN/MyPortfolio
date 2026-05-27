export default function Navbar() {
  return (
    // Updated padding to match the global fix: px-4 on mobile, px-8 on tablet, px-[10%] on desktop
    <header className="fixed top-0 left-0 w-full z-[1000] px-4 sm:px-8 md:px-[10%] pt-6 pointer-events-none">
      <div className="flex justify-between items-start font-display text-xs sm:text-sm font-black tracking-widest uppercase">
        
        {/* Left Side: Primary Identifier (Always visible) */}
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="text-fg">CEE_P1 //</span>
          <span className="text-tertiary">ACTIVE</span>
        </div>

        {/* Right Side: System Status 
            Added 'hidden sm:flex' -> This hides it on phones, but shows it on tablets/desktops 
            so it doesn't collide with your new [ MENU ] button! 
        */}
        <div className="hidden sm:flex flex-col items-end gap-1 pointer-events-auto">
          <span className="text-tertiary">LINK_ESTABLISHED //</span>
          <span className="text-secondary">SECURE</span>
        </div>

      </div>
    </header>
  );
}