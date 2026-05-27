import Sense from '../assets/Sense.png';
import gamedevHome from '../assets/gamedevHome.jpg';
import TMB from '../assets/TMB.png';
import BorrowIT from '../assets/BorrowIT.png';

export const missionData = {
  capstone: { 
    id: "CID: 882-XJ // AI_CORE",
    title: '3SENSE+_MALANDAY',
    role: 'LEAD_DEVELOPER',
    subtitle: 'Custom-trained AI architecture & feedback system.',
    img: Sense,
    body: 'A comprehensive barangay management system featuring a custom-trained RoBERTa AI architecture for advanced Taglish sentiment analysis. By choosing to build and retrain our own architecture rather than relying on a pre-trained alternative, we ensured high-accuracy local dialect processing.',
    objectives: [
      'Retrain Custom AI Architecture',
      'Implement QR-Verified Feedback Loop',
      'Deploy 3S Malanday Database Schema'
    ],
    stack: [
      { name: 'React', icon: ['fab', 'react'], color: 'text-[#61DAFB]' },
      { name: 'Python', icon: ['fab', 'python'], color: 'text-[#3776AB]' },
      { name: 'Firebase', icon: ['fas', 'database'], color: 'text-[#FFCA28]' },
      { name: 'JavaScript', icon: ['fab', 'square-js'], color: 'text-[#FFCA28]' },
      { name: 'Classify', icon: ['fas', 'brain'], color: 'text-tertiary' }
    ],
    githubLink: 'https://github.com/CeeeeeN/3Sense', 
    liveLink: 'https://www.3s-sense.site'
  },
  gamedev: { 
    id: "CID: 412-MK // GAME_SYS",
    title: 'PROJECT_W.A.V.E',
    role: 'LEAD_DEVELOPER',
    subtitle: 'A 2D side scrolling arcade shooter.',
    img: gamedevHome,
    body: 'Led the development for pollution-themed game.',
    objectives: [
      'Developed Core Gameplay Mechanics',
      'Coordinate Dev & Art assets Teams',
    ],
    stack: [
      { name: 'Unity', icon: ['fab', 'unity'], color: 'text-[#61DAFB]' },
      { name: 'C#', icon: ['fas', 'code'], color: 'text-[#3776AB]' }
    ],
    githubLink: 'https://github.com/your-repo-link', 
  },
  regression: { 
    id: "CID: 001-HF // WEB_SYS",
    title: 'TEMBONG_PC', 
    role: 'BACKEND_DEVELOPER',
    subtitle: 'Full-Stack development of a website for a PC Parts store.',
    img: TMB,
    body: 'Developed the Backend and Real-Time Visualizer for a PC parts store website.',
    objectives: [
      'Developed backend with PHP & MySQL',
      'Implemented Real-Time Data Synchronization',
      'Designed Interactive PC Visualizer'
    ],
    stack: [
      { name: 'PHP', icon: ['fab', 'php'], color: 'text-[#777BB4]' },
      { name: 'MySQL', icon: ['fas', 'database'], color: 'text-[#00758F]' },
      { name: 'JavaScript', icon: ['fab', 'square-js'], color: 'text-[#FFCA28]' },
      { name: 'CSS', icon: ['fab', 'css'], color: 'text-[#2965f1]' }
    ],
    githubLink: 'https://github.com/CeeeeeN/TembongPC',
  },
  borrow: { 
    id: "CID: 003-PG // SOFT_DEV",
    title: 'BORROW_IT', 
    role: 'BACKEND_DEVELOPER',
    subtitle: 'Full-Stack development of a system for the subject of Software Development.',
    img: BorrowIT,
    body: 'The website features an CE equipment borrowing system, allowing students to reserve their borrowed items online and also features a log to keep track of the borrowed items.',
    objectives: [
      'Developed backend with PHP & MySQL',
      'Implemented Real-Time Data Synchronization',
      'implemented a log to keep track of the borrowed items'
    ],
    stack: [
      { name: 'PHP', icon: ['fab', 'php'], color: 'text-[#777BB4]' },
      { name: 'MySQL', icon: ['fas', 'database'], color: 'text-[#00758F]' },
      { name: 'JavaScript', icon: ['fab', 'square-js'], color: 'text-[#FFCA28]' },
      { name: 'CSS', icon: ['fab', 'css'], color: 'text-[#2965f1]' }
    ],
    githubLink: 'https://github.com/CeeeeeN/BorrowIT',
  }
};