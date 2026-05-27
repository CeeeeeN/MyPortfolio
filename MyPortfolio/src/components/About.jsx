import React from 'react';

// Sub-component for the monospaced command output.
const LogParagraph = ({ children }) => (
  <p className="text-sm font-mono text-fg/80 leading-relaxed max-w-[500px]">
    {children}
  </p>
);

// Sub-component for a highlighted term.
const Highlight = ({ children, color }) => (
  <span className={color === 'cyan' ? 'text-secondary' : 'text-accent'}>
    {children}
  </span>
);

export default function About() {
  const profileData = {
    operator: 'CHAELSY BENJ JUMAWAN',
    role: 'DEVELOPER // GAME_PROGRAMMER',
    location: 'Valenzuela City // Metro Manila',
    status: 'OPEN FOR INTERNSHIP',
  };

  const educationData = [
    {
      year: '2023 – Present',
      school: 'Pamantasan ng Lungsod ng Valenzuela | B.S. Information Technology',
      achievements: ''
    },
    {
      year: '2021 – 2023',
      school: 'Electron College of Technical Education | ICT Strand',
      achievements: 'Academic Excellence Award with High Honors'
    }
  ];

  const interestsData = [
    { title: 'Game Development', desc: 'Creating engaging and interactive games for various platforms.' },
    { title: 'Web Development', desc: 'Building modern web applications with a focus on user experience and back-end server functionality.' },
    { title: 'Software Engineering', desc: 'Designing and implementing robust software solutions.' },
    { title: 'CyberSecurity', desc: 'Protecting digital assets and information from cyber threats.' }
  ];

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 px-[10%] flex flex-col justify-center border-b border-border">
      
      {/* SECTION HEADER */}
      <div className="mb-16 border-l-4 border-tertiary pl-8">
        <h2 className="font-display text-5xl font-black uppercase text-fg">ABOUT_ME</h2>
        <div className="font-display text-xs text-tertiary mt-2">SYSTEM_PROFILE // ACCESS_ESTABLISHED</div>
      </div>

      {/* PART 1: TOP PROFILE & LOG GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch max-w-[1200px] mx-auto w-full mb-8">
        
        {/* Left Column: OperatorProfile Card */}
        <div className="bg-surface border border-border p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,65,0.05)] flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 mb-10 flex items-center justify-center rounded-full border-2 border-border shadow-[0_0_20px_rgba(0,240,255,0.15)] bg-[#0a0a0a]">
            {/* Default Avatar Silhouette */}
            <svg className="w-24 h-24 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_10px_var(--color-tertiary)]" />
          </div>

          <div className="space-y-6 w-full max-w-[380px] text-sm">
            <div className="flex justify-between font-display border-b border-border/50 pb-2">
              <span className="text-muted">OPERATOR</span>
              <span className="text-accent font-black tracking-widest uppercase">{profileData.operator}</span>
            </div>
            <div className="flex justify-between font-display border-b border-border/50 pb-2">
              <span className="text-muted">ROLE</span>
              <span className="text-secondary font-black uppercase">{profileData.role}</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted font-display">LOCATION</span>
              <span className="text-fg">{profileData.location}</span>
            </div>
            <div className="flex justify-between items-center font-display pt-2">
              <span className="text-muted">STATUS</span>
              <span className="text-tertiary px-3 py-1 border border-tertiary text-xs font-black shadow-[0_0_5px_rgba(0,255,65,0.2)]">
                {profileData.status}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: user_profile.log Command Section */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-display text-[0.85rem] flex flex-col min-w-0">
          <div className="bg-[#252526] px-4 py-2.5 flex justify-between items-center text-[#858585] text-[0.75rem] border-b border-[#111]">
            <div>_ user_profile.log</div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
          </div>

          <div className="flex py-6 flex-grow">
            <div className="px-4 text-[#5a5a5a] text-right select-none border-r border-[#333] leading-[2]">
              {Array.from({ length: 12 }, (_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="px-6 space-y-6 text-[#d4d4d4] font-mono whitespace-pre-wrap break-words leading-[2]">
              <div><span className="text-fg/50">-&gt;</span> whoami</div>
              <LogParagraph>
                I am a 3rd year IT Student at Pamantasan ng Lungsod ng Valenzuela, passionate in software development and game design. focusing on crafting immersive digital experiences and innovative solutions.
              </LogParagraph>
              <div><span className="text-fg/50">-&gt;</span> cat mission.txt</div>
              <LogParagraph>
                Actively learning and improving my skills. Currently focused on <Highlight color="cyan">Full-Stack Development</Highlight> and <Highlight color="orange">Game Development</Highlight>.
              </LogParagraph>
              <div className="text-tertiary/70 italic">// ACCESS_SYNC_ESTABLISHED...</div>
              <div><span className="text-danger animate-[blink_1s_step-end_infinite]">_</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* THEMATIC DIVIDER */}
      <div className="w-full relative py-16 max-w-[1200px] mx-auto">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dashed border-border/70"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-bg px-6 font-display text-[0.65rem] text-muted uppercase tracking-[0.2em] border border-border/50 py-1">
            [ SYSTEM_LOGS_EXPANDED ]
          </span>
        </div>
      </div>

      {/* PART 2: EDUCATION & INTERESTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1200px] mx-auto w-full">
        
        {/* Education Timeline */}
        <div>
          <h3 className="font-display text-2xl font-black text-fg mb-8 border-b-2 border-border/50 pb-2 inline-block">
            ACADEMIC_RECORDS
          </h3>
          
          <div className="space-y-10 border-l-2 border-tertiary/40 ml-3 mt-4">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot */}
                <div className="absolute w-3.5 h-3.5 bg-bg border-2 border-tertiary rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_var(--color-tertiary)] group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="font-display text-[0.75rem] text-tertiary mb-1.5 tracking-widest">{item.year}</div>
                <div className="font-display text-accent text-lg mb-2 leading-tight">{item.school}</div>
                <div className="text-sm text-fg/80 whitespace-pre-line border-l-2 border-border/50 pl-3">
                  {item.achievements}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Into List */}
        <div>
          <h3 className="font-display text-2xl font-black text-fg mb-8 border-b-2 border-border/50 pb-2 inline-block">
            ACTIVE_INTERESTS
          </h3>
          
          <div className="grid gap-6 mt-4">
            {interestsData.map((interest, index) => (
              <div key={index} className="bg-surface/40 border border-border p-5 hover:border-secondary/50 hover:bg-surface/80 transition-all group [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
                <h4 className="font-display text-secondary text-base font-bold mb-2 flex items-center gap-3">
                  <span className="text-secondary/50 text-xs">{`0${index + 1}`}</span>
                  {interest.title}
                </h4>
                <p className="text-sm text-fg/70 pl-7">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}