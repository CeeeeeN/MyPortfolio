export default function StepperNav({ activeSection }) {
    const sections = ['hero', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-[1000] font-display hidden lg:flex">
            {sections.map((sections) => 
                <a key={sections} href={`#${sections}`} className={'flex items-center gap-4 text-muted transition-all group ${activeSection === sections ? "text-tertiary" : "}'}>
                    <div className={'text-base uppercase tracking-widest opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === sections ? "opacity-100 translate-x-0" : ""}'}>
                        {sections === 'hero' ? 'about me' : sections === 'contact' ? 'contact' : sections}
                    </div>
                    <div className={'w-5 h-5 bg-border transition-all [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] group-hover:bg-tertiary group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--color-tertiary)] ${activeSection === sections ? "bg-tertiary scale-150 shadow-[0_0_10px_var(--color-tertiary)]" : }'}></div>
                </a>
            )}
        </nav>
    )
}