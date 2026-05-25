import Sense from '../assets/Sense.png';
import gamedevHome from '../assets/gamedevHome.jpg';
import TMB from '../assets/TMB.png';

export const missionData = {
  capstone: { 
    id: "CID: 882-XJ // AI_CORE",
    title: '3SENSE+_MALANDAY',
    subtitle: 'Custom-trained AI architecture & feedback system.',
    img: Sense,
    body: 'A comprehensive barangay management system featuring a custom-trained RoBERTa AI architecture for advanced Taglish sentiment analysis. By choosing to build and retrain our own architecture rather than relying on a pre-trained alternative, we ensured high-accuracy local dialect processing.',
    objectives: [
      'Retrain Custom AI Architecture',
      'Implement QR-Verified Feedback Loop',
      'Deploy 3S Malanday Database Schema'
    ]
  },
  gamedev: { 
    id: "CID: 412-MK // GAME_SYS",
    title: 'PROJECT_W.A.V.E', 
    subtitle: 'A 2D side scrolling arcade shooter.',
    img: gamedevHome,
    body: 'Led the development for pollution-themed game.',
    objectives: [
      'Developed Core Gameplay Mechanics',
      'Coordinate Dev & Art assets Teams',
    ]
  },
  regression: { 
    id: "CID: 001-HF // WEB_SYS",
    title: 'TEMBONG_PC', 
    subtitle: 'Full-Stack development of a website for a PC Parts store.',
    img: TMB,
    body: 'Developed the Backend and Real-Time Visualizer for a PC parts store website.',
    objectives: [
      'Developed backend with PHP & MySQL',
      'Implemented Real-Time Data Synchronization',
      'Designed Interactive PC Visualizer'
    ]
  }
};