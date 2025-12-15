import { ProjectType } from './types';

export const projectSOPet: ProjectType = {
  title: 'SOPet Multi-Vendor E-Commerce Platform',
  git: '#', // Private repo
  demo: '#',
  description:
    'A comprehensive multi-vendor e-commerce platform with mobile and web interfaces, featuring vendor management, payment integration, and scalable architecture.',
  fullDescription:
    'Developed a complete multi-vendor e-commerce solution that allows multiple vendors to sell products through a unified platform. Built mobile app with React Native and web interface with Next.js, implementing complex vendor workflows, payment processing, and inventory management.',
  techStack: [
    'React Native',
    'Expo',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Stripe',
    'CI/CD',
  ],
  highlights: [
    'Multi-vendor architecture',
    'Payment gateway integration',
    'Mobile-first design',
    'Real-time inventory',
  ],
  category: 'Full-Stack',
  featured: true,
  status: 'In Progress',
};

export const projectCPESpace: ProjectType = {
  title: 'CPE Space - Full-Stack Platform',
  git: 'https://github.com/BlackBoxBanner/cpe-space-backend',
  description:
    'A comprehensive platform for computer engineering students with both frontend and backend components.',
  fullDescription:
    'Built a full-stack web application for CPE students featuring user management, course resources, and collaborative tools. Implemented modern architecture with separate frontend and backend services.',
  techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
  highlights: [
    'RESTful API design',
    'User authentication',
    'Responsive design',
    'Database optimization',
  ],
  category: 'Full-Stack',
  featured: true,
  status: 'Completed',
};

export const projectSmartPlanner: ProjectType = {
  title: 'SmartPlanner - Planning Tool',
  git: 'https://github.com/BlackBoxBanner/smartplanner',
  description:
    'An intelligent planning and task management application with modern UI and smart scheduling features.',
  fullDescription:
    'Developed a smart planning tool that helps users organize tasks, set goals, and track progress. Features intelligent scheduling suggestions and productivity analytics.',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  highlights: [
    'Smart scheduling',
    'Analytics dashboard',
    'Clean UI/UX',
    'Data persistence',
  ],
  category: 'Full-Stack',
  featured: true,
  status: 'Completed',
};

export const projectPOS: ProjectType = {
  title: 'POS System (Software Engineering)',
  git: 'https://github.com/BlackBoxBanner/pos-se',
  description:
    'A robust Point-of-Sale system built with TypeScript, focusing on scalable architecture and clean code practices.',
  fullDescription:
    'Comprehensive POS system designed with software engineering principles, featuring inventory management, sales tracking, and reporting functionalities.',
  techStack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'React'],
  highlights: [
    'Clean architecture',
    'Inventory management',
    'Sales analytics',
    'Multi-user support',
  ],
  category: 'Full-Stack',
  status: 'Completed',
};

export const projectSongRequest: ProjectType = {
  title: 'Song Request System',
  git: 'https://github.com/BlackBoxBanner/song-req',
  description:
    'A web application for managing song requests with real-time features and user interaction.',
  fullDescription:
    'Built a song request system that allows users to submit and manage song requests in real-time. Features include request queuing, user voting, and admin controls for event management.',
  techStack: ['React', 'Node.js', 'Express', 'WebSocket', 'TypeScript'],
  highlights: [
    'Real-time updates',
    'User voting system',
    'Admin dashboard',
    'Queue management',
  ],
  category: 'Full-Stack',
  status: 'Completed',
};

export const projectEpubToAudio: ProjectType = {
  title: 'EPUB to Audio Converter',
  git: 'https://github.com/BlackBoxBanner/epub2audio',
  description:
    'A tool for converting EPUB books into audio format using text-to-speech technology.',
  fullDescription:
    'Developed a conversion tool that transforms EPUB books into audio files, making literature more accessible through automated text-to-speech processing.',
  techStack: ['Python', 'Text-to-Speech API', 'EPUB Parser'],
  highlights: [
    'Accessibility focus',
    'Automated processing',
    'File format conversion',
    'Audio quality optimization',
  ],
  category: 'Tool',
  status: 'Completed',
};

export const projects: ProjectType[] = [
  projectSOPet,
  projectCPESpace,
  projectSmartPlanner,
  projectPOS,
  projectSongRequest,
  projectEpubToAudio,
];
