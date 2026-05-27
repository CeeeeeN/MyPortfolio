export default function StepperNav({ activeSection }) {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-[1000] font-display hidden lg:flex">
            {sections.map((section) => (
                <a 
                    key={section} 
                    href={`#${section}`} 
                    // Changed to backticks and swapped text-muted/text-tertiary dynamically
                    className={`flex items-center gap-4 transition-all group ${activeSection === section ? 'text-tertiary' : 'text-muted'}`}
                >
                    <div 
                        // Changed to backticks
                        className={`text-base uppercase tracking-widest opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === section ? 'opacity-100 translate-x-0' : ''}`}
                    >
                        {section === 'hero' ? 'home' : section === 'contact' ? 'contact' : section === 'about' ? 'about' : section}
                    </div>
                    <div 
                        // Changed to backticks and fixed the empty string fallback
                        className={`w-5 h-5 bg-border transition-all [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] group-hover:bg-tertiary group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--color-tertiary)] ${activeSection === section ? 'bg-tertiary scale-150 shadow-[0_0_10px_var(--color-tertiary)]' : ''}`}
                    ></div>
                </a>
            ))}
        </nav>
    );
}