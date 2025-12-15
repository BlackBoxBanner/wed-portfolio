import { ExperienceType } from './types';

export const experienceSOPet: ExperienceType = {
  country: 'Thailand',
  city: 'Bangkok',
  company: 'SOPet Co., Ltd',
  title: 'Full-Stack Developer',
  current: true,
  fromMonth: 'January',
  fromYear: 2024,
  type: 'Contract',
  description:
    'Led the development of a comprehensive multi-vendor e-commerce platform, creating both mobile and web applications with complex vendor management workflows, payment integration, and scalable architecture.',
  achievements: [
    'Built complete multi-vendor e-commerce system from scratch',
    'Implemented mobile app with React Native (Expo) for vendors and customers',
    'Developed web admin panel with Next.js for platform management',
    'Integrated Stripe payment gateway for secure transactions',
    'Designed and implemented scalable database schema',
    'Set up CI/CD pipeline for automated deployment',
  ],
  skills: [
    'React Native',
    'Expo',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Stripe',
    'CI/CD',
  ],
};

export const experienceCPEAdmin: ExperienceType = {
  country: 'Thailand',
  city: 'Bangkok',
  company: "King Mongkut's University of Technology Thonburi CPE",
  title: 'Server Administrator',
  current: false,
  fromMonth: 'August',
  fromYear: 2024,
  toYear: 2025,
  toMonth: 'June',
  type: 'Academic',
  description:
    'Managing and maintaining server infrastructure for the Computer Engineering department, ensuring system reliability, security, and optimal performance for academic operations.',
  achievements: [
    'Maintain server infrastructure for CPE department',
    'Ensure system security and performance optimization',
    'Troubleshoot and resolve technical issues',
    'Support faculty and student computing needs',
  ],
  skills: [
    'Linux',
    'Server Management',
    'Network Administration',
    'System Security',
  ],
};

export const experienceKMUTTAcademicProject: ExperienceType = {
  country: 'Thailand',
  city: 'Bangkok',
  company: "King Mongkut's University of Technology Thonburi (KMUTT)",
  title: 'Full-stack Developer (Academic Project)',
  current: false,
  fromMonth: 'August',
  fromYear: 2024,
  toYear: 2025,
  toMonth: 'June',
  type: 'Academic',
  description:
    'Part of 4th-year Computer Engineering coursework, developing a full-stack web application requested by another university department, showcasing interdisciplinary collaboration and problem-solving skills.',
  achievements: [
    'Collaborated with university department to understand requirements',
    'Developed custom web application solution',
    'Applied software engineering best practices',
    'Delivered project meeting academic and functional requirements',
  ],
  skills: [
    'Full-Stack Development',
    'Requirements Analysis',
    'Project Management',
    'Team Collaboration',
  ],
};

export const experienceFITIntern: ExperienceType = {
  country: 'Japan',
  city: 'Fukuoka',
  company: 'Fukuoka Institute of Technology',
  title: 'Data Analyst Intern',
  current: false,
  fromMonth: 'June',
  fromYear: 2024,
  toMonth: 'August',
  toYear: 2024,
  type: 'Internship',
  description:
    'Gained international experience analyzing sales data for an Australian café, developing insights for pricing and inventory strategies while creating synthetic data models based on POS system research.',
  achievements: [
    'Analyzed real-world sales data for Australian café business',
    'Developed pricing and inventory optimization strategies',
    'Created synthetic data models for simulation purposes',
    'Research and analyzed POS systems architecture',
    'Gained expertise in Python data analysis libraries',
    'Adapted quickly to international work environment',
  ],
  skills: [
    'Python',
    'Data Analysis',
    'Pandas',
    'NumPy',
    'Data Visualization',
    'Business Intelligence',
  ],
};

export const experiences: ExperienceType[] = [
  experienceSOPet,
  experienceCPEAdmin,
  experienceKMUTTAcademicProject,
  experienceFITIntern,
];
