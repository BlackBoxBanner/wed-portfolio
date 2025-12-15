import { siteConfig } from '@/lib/metadata';
import type { PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: siteConfig.author.name,
  birthDate: '2001-08-21',
  title: 'Full-Stack Developer',
  summary:
    'Full-Stack Developer passionate about building web and mobile applications that solve real-world problems.',
  email: siteConfig.author.email,
  phone: '+66 97 949 5351',
  location: 'Bangkok, Thailand',
  website: siteConfig.url,
  github: `https://github.com/${siteConfig.author.github}`,
  linkedin: `https://linkedin.com/in/${siteConfig.author.linkedin}`,
  whoIAm: [
    "I'm passionate about building efficient, scalable web and mobile applications that people actually enjoy using.",
    "I code with purpose, learn with curiosity, and always aim to ship clean, maintainable solutions. Whether it's crafting pixel-perfect frontend experiences or architecting robust backend systems, I believe in building technology that makes a difference.",
  ],
  drives: [
    {
      icon: 'Code',
      title: 'Clean, maintainable code',
      detail:
        'I build for today and tomorrow, ensuring code quality that scales with projects and teams.',
    },
    {
      icon: 'Heart',
      title: 'Real-world problem solving',
      detail:
        'I love creating applications that are helpful, usable, and meaningful to users.',
    },
    {
      icon: 'TrendingUp',
      title: 'Continuous learning',
      detail:
        "Technology evolves fast, and I'm always exploring new tools, frameworks, and best practices.",
    },
    {
      icon: 'Users',
      title: 'Collaboration & teamwork',
      detail:
        'Great products come from great teams, clear communication, and shared vision.',
    },
  ],
  journey: [
    "Having completed my Computer Engineering degree at King Mongkut's University of Technology Thonburi (KMUTT), I built my expertise through hands-on projects, internships, and real-world applications throughout my studies.",
    "Through leading full-stack development projects and various technical roles, I've gained valuable experience working with diverse teams and cutting-edge technologies. My focus has evolved to specialize in end-to-end web and mobile application development, where I excel at architecting scalable solutions and delivering comprehensive products from initial concept through to production deployment.",
  ],
  beyondCode:
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I believe in learning not just for personal growth, but to contribute back to the ecosystem that has taught me so much.",
  quickFacts: {
    location: 'Bangkok, Thailand',
    education: 'KMUTT Computer Engineering',
    gpax: '2.91',
    focus: 'Full-Stack Development',
    interests: 'Web, Mobile, E-commerce',
  },
  closingNote:
    "I value end-to-end ownership — from concept and design to implementation, deployment, and maintenance. Let's build something awesome together.",
};
