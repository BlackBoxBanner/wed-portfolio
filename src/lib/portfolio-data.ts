// Shared data for portfolio and resume
import { siteConfig } from './metadata';

export type ExperienceType = {
  company: string;
  city: string;
  country: string;
  title: string;
  fromMonth: string;
  fromYear: number;
  toMonth?: string;
  toYear?: number;
  current: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  type:
    | 'Internship'
    | 'Academic'
    | 'Project'
    | 'Full-time'
    | 'Part-time'
    | 'Contract';
};

export type EducationType = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
  current: boolean;
  gpa?: string;
  achievements?: string[];
  relevant_courses?: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

// Personal Information
export const personalInfo = {
  name: siteConfig.author.name,
  email: siteConfig.author.email,
  location: 'Bangkok, Thailand',
  website: siteConfig.url,
  github: `https://github.com/${siteConfig.author.github}`,
  linkedin: `https://linkedin.com/in/${siteConfig.author.linkedin}`,
  phone: '+66 97 949 5351',
  summary:
    'Passionate Full-Stack Developer from Thailand with extensive experience in building efficient, scalable web and mobile applications. Specialized in React, Next.js, React Native, and modern web technologies with a focus on clean, maintainable code and real-world problem solving.',
};

// Work Experience Data
export const experiences: ExperienceType[] = [
  {
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
  },
  {
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
  },
  {
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
      'Problem Solving',
    ],
  },
];

// Education Data
export const educations: EducationType[] = [
  {
    institution: "King Mongkut's University of Technology Thonburi (KMUTT)",
    degree: 'Bachelor of Engineering',
    fieldOfStudy: 'Computer Engineering',
    startYear: 2021,
    endYear: 2025,
    current: false,
    gpa: '2.91',
    achievements: [
      'Server Administrator for CPE department',
      'Full-stack development projects for university departments',
      'International internship program participation',
      'Active in computer engineering community',
    ],
    relevant_courses: [
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Data Structures & Algorithms',
      'Web Development',
      'Mobile Application Development',
    ],
  },
];

// Skills organized by categories
export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Svelte',
      'Vue.js',
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Prisma',
      'RESTful APIs',
      'GraphQL',
    ],
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Expo', 'Cross-platform Development'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Cloudflare', 'CI/CD', 'Linux'],
  },
];

// Projects Data (if you want to include them)
export const projects = [
  {
    title: 'Multi-vendor E-commerce Platform',
    description:
      'Comprehensive e-commerce solution with mobile and web applications',
    technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    highlights: [
      'Mobile app for vendors and customers',
      'Web admin panel',
      'Payment gateway integration',
      'Scalable architecture',
    ],
  },
  // Add more projects as needed
];
