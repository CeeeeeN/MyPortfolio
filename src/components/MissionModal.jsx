<<<<<<< HEAD
export default function MissionModal({ activeMission, closeModal }) {
  if (!activeMission) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[2000] flex justify-center items-center p-8 backdrop-blur-sm" onClick={closeModal}>
      <div className="bg-[#050505] border-2 border-tertiary max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-4 right-6 text-danger font-display font-black bg-black/80 px-2.5 py-1 border border-danger z-10 hover:bg-danger hover:text-black transition-colors">
          [ ABORT_X ]
        </button>
        <div className="w-full h-[300px] bg-cover bg-center border-b-2 border-tertiary" style={{ backgroundImage: `url(${activeMission.img})` }}></div>
        
        <div className="p-12">
          <h2 className="font-display text-4xl text-accent mb-6 uppercase">{activeMission.title}</h2>
          <p className="text-fg leading-relaxed">{activeMission.body}</p>
          
          <div className="text-tertiary font-display text-[0.9rem] font-black mt-10 mb-4 tracking-widest">MISSION_OBJECTIVES</div>
          <div className="flex flex-col gap-2">
            {activeMission.objectives.map((obj, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#222] p-4 font-display text-[0.85rem] flex gap-6 items-center text-fg">
                <span className="text-tertiary font-bold">[ OK ]</span> <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
=======
export default function MissionModal({ activeMission, closeModal }) {
  if (!activeMission) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[2000] flex justify-center items-center p-8 backdrop-blur-sm" onClick={closeModal}>
      <div className="bg-[#050505] border-2 border-tertiary max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-4 right-6 text-danger font-display font-black bg-black/80 px-2.5 py-1 border border-danger z-10 hover:bg-danger hover:text-black transition-colors">
          [ ABORT_X ]
        </button>
        <div className="w-full h-[300px] bg-cover bg-center border-b-2 border-tertiary" style={{ backgroundImage: `url(${activeMission.img})` }}></div>
        
        <div className="p-12">
          <h2 className="font-display text-4xl text-accent mb-6 uppercase">{activeMission.title}</h2>
          <p className="text-fg leading-relaxed">{activeMission.body}</p>
          
          <div className="text-tertiary font-display text-[0.9rem] font-black mt-10 mb-4 tracking-widest">MISSION_OBJECTIVES</div>
          <div className="flex flex-col gap-2">
            {activeMission.objectives.map((obj, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#222] p-4 font-display text-[0.85rem] flex gap-6 items-center text-fg">
                <span className="text-tertiary font-bold">[ OK ]</span> <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> c03efe5 (additions)
}