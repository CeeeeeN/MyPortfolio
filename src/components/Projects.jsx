import { missionData } from '../services/PortfolioData';

export default function Projects({ setActiveMission }) {
  return (
    <section id="projects" className="min-h-screen pt-32 pb-16 px-[10%] flex flex-col justify-center border-b border-border">
      <div className="mb-16 border-l-4 border-tertiary pl-8">
        <h2 className="font-display text-5xl font-black uppercase text-fg">PROJECT_BOARD</h2>
        <div className="font-display text-xs text-tertiary mt-2">SCHOOL_PROJECTS // PERSONAL_PROJECTS</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Object.entries(missionData).map(([key, data]) => (
          <div key={key} onClick={() => setActiveMission(data)} className="clip-card bg-surface border border-border cursor-pointer hover:border-tertiary hover:-translate-y-2 transition-all group">
            <div className="h-[180px] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" style={{ backgroundImage: `url(${data.img})` }}></div>
            <div className="p-6">
              <div className="font-display text-[0.6rem] text-muted">{data.id}</div>
              <h3 className="font-display text-xl text-accent uppercase my-2">{data.title}</h3>
              <p className="text-[0.8rem] text-muted">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div> 
    </section>
  );
}