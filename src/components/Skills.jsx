import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Skills() {
  // Inline SVG Icons mapped to the visual references in your image
  const icons = {
    code: <FontAwesomeIcon icon="fa-solid fa-code" size="lg" />,
    web: <FontAwesomeIcon icon="fa-brands fa-html5" size="lg" />,
    java: <FontAwesomeIcon icon="fa-brands fa-square-js" size="lg" />,
    php: <FontAwesomeIcon icon="fa-brands fa-php" size="lg" />,
    react: <FontAwesomeIcon icon="fa-brands fa-react" size='lg' />,
    sql: <FontAwesomeIcon icon="fa-solid fa-database" size='lg' />,
    python: <FontAwesomeIcon icon="fa-brands fa-python" size='lg' />,
    gamepad: <FontAwesomeIcon icon="fa-solid fa-gamepad" size="lg" />
  };

  // Node Configuration mapping your real skills to the Cyberpunk aliases
  const nodes = [
    { id: 'core', title: 'CORE_LOGIC', lvl: 'Beginner', x: '50%', y: '50%', icon: icons.code, subtitle: 'Fundamentals' },
    { id: 'web', title: 'WEB_DEV', lvl: 'Intermediate', x: '30%', y: '38%', icon: icons.web, subtitle: 'HTML5 / CSS3' },
    { id: 'react', title: 'REACT_JS', lvl: 'Beginner', x: '15%', y: '15%', icon: icons.react, subtitle: 'React.js' },
    { id: 'javascript', title: 'JAVASCRIPT', lvl: 'Learning', x: '35%', y: '12%', icon: icons.java, subtitle: 'JavaScript' },
    { id: 'php', title: 'PHP', lvl: 'Beginner', x: '12%', y: '40%', icon: icons.php, subtitle: 'PHP' },
    { id: 'SQL', title: 'SQL', lvl: 'Beginner', x: '30%', y: '65%', icon: icons.sql, subtitle: 'SQL / NoSQL' },
    { id: 'python', title: 'Python', lvl: 'Learning', x: '70%', y: '35%', icon: icons.python, subtitle: 'Python / ML' },
    { id: 'game', title: 'GAME_DEV', lvl: 'Beginner', x: '70%', y: '65%', icon: icons.gamepad, subtitle: 'Unity / C#' }
  ];

  return (
    <section id="skills" className="min-h-screen pt-32 pb-16 flex flex-col justify-center border-b border-border">
      
      <div className="mb-8 border-l-4 border-tertiary pl-8 mx-[10%]">
        <h2 className="font-display text-5xl font-black uppercase text-fg">NEURAL_SKILLS</h2>
        <div className="font-display text-xs text-tertiary mt-2">SYSTEM_MODULES // LEVEL_50</div>
      </div>
      
      {/* Scrollable Container for Mobile Safety */}
      <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
        <div className="relative min-w-[900px] max-w-[1200px] h-[600px] mx-auto">
          
          {/* Background Nodes Grid (Dots) */}
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>

          {/* Skill Nodes */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10 hover:scale-105 transition-transform duration-300"
              style={{ left: node.x, top: node.y, width: '180px', height: '120px' }}
            >
              {/* Green Outer Chamfered Border */}
              <div className="absolute inset-0 bg-tertiary shadow-[0_0_15px_var(--color-tertiary)] opacity-80 group-hover:opacity-100 transition-opacity [clip-path:polygon(15px_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%,0_15px)]"></div>
              
              {/* Dark Inner Background */}
              <div className="absolute inset-[2px] bg-[#050505] group-hover:bg-[#111] transition-colors [clip-path:polygon(14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%,0_14px)] flex flex-col items-center justify-center p-2">
                
                <div className="text-tertiary mb-1.5 transform group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                
                <div className="text-tertiary font-display text-sm font-black tracking-widest uppercase">
                  {node.title}
                </div>
                
                <div className="text-muted font-display text-xs mt-1 flex flex-col gap-1">
                  <span>LVL {node.lvl}</span>
                  <span className="text-xs text-accent italic">
                    {node.subtitle}
                  </span>
                </div>
                
              </div>
            </div>
          ))}

        </div>
      </div>
      
    </section>
  );
}