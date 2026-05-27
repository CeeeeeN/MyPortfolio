import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function MissionModal({ activeMission, closeModal }) {
  if (!activeMission) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[2000] flex justify-center items-center p-4 sm:p-8 backdrop-blur-sm" 
      onClick={closeModal}
    >
      <div 
        className="bg-[#050505] border-2 border-tertiary max-w-[1000px] w-full max-h-[90vh] overflow-y-auto relative custom-scrollbar flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ABORT BUTTON */}
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 sm:right-6 text-danger font-display font-black bg-black/80 px-2.5 py-1 border border-danger z-10 hover:bg-danger hover:text-black transition-colors"
        >
          [ ABORT_X ]
        </button>
        
        {/* HERO BANNER */}
        <div 
          className="w-full min-h-[250px] sm:min-h-[350px] bg-cover bg-center shrink-0 border-b-2 border-tertiary relative" 
          style={{ backgroundImage: `url(${activeMission.img})` }}
        >
        </div>
        
        {/* MODAL CONTENT */}
        <div className="p-8 sm:p-12 flex flex-col flex-grow">
          
          {/* Header Section: Role & Title */}
          <div className="mb-8">
            {activeMission.role && (
              <div className="font-display text-tertiary text-sm font-black tracking-[0.2em] uppercase mb-2">
                {activeMission.role}
              </div>
            )}
            <h2 className="font-display text-4xl sm:text-5xl text-accent uppercase font-black">
              {activeMission.title}
            </h2>
          </div>
          
          {/* Two-Column Layout for Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
            
            {/* Left Column: Description & Objectives */}
            <div>
              <p className="text-fg/90 leading-relaxed mb-10 text-[0.95rem]">
                {activeMission.body}
              </p>
              
              <div className="text-tertiary font-display text-[0.9rem] font-black mb-4 tracking-widest border-b border-tertiary/30 pb-2 inline-block">
                MISSION_OBJECTIVES
              </div>
              <div className="flex flex-col gap-3">
                {activeMission.objectives.map((obj, i) => (
                  <div key={i} className="bg-[#0a0a0a] border border-[#222] p-4 font-display text-[0.85rem] flex gap-4 items-start text-fg/90">
                    <span className="text-tertiary font-bold mt-0.5">[ OK ]</span> 
                    <span className="leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tech Stack & Action Links */}
            <div className="flex flex-col gap-10">
              
              {/* Tech Stack */}
              {activeMission.stack && activeMission.stack.length > 0 && (
                <div>
                  <div className="text-secondary font-display text-[0.9rem] font-black mb-4 tracking-widest border-b border-secondary/30 pb-2 inline-block">
                    SYSTEM_ARCHITECTURE
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activeMission.stack.map((tech, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 bg-[#111] border border-[#333] px-3 py-1.5 text-xs font-display text-fg/80"
                      >
                        {tech.icon && <FontAwesomeIcon icon={tech.icon} className={tech.color || "text-tertiary"} />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              <div className="flex gap-4">
                {activeMission.githubLink && (
                  <a 
                    href={activeMission.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 bg-surface border border-border text-fg font-display text-sm font-black py-3 px-4 flex items-center justify-center gap-3 hover:border-fg transition-colors group"
                  >
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" className="group-hover:text-white transition-colors" />
                    <span>SOURCE_CODE</span>
                  </a>
                )}
                
                {activeMission.liveLink && (
                  <a 
                    href={activeMission.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 bg-accent text-bg font-display text-sm font-black py-3 px-4 flex items-center justify-center gap-3 hover:bg-transparent hover:text-accent border border-transparent hover:border-accent transition-all"
                  >
                    <FontAwesomeIcon icon={['fas', 'link']} size="lg" />
                    <span>DEPLOY_LINK</span>
                  </a>
                )}
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}