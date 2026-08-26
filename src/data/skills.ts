import { FaAws } from 'react-icons/fa';
import {
  SiCloudflare,
  SiCss,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import type { SkillCategory, SkillItem } from './types';

export const frontendSkills: SkillItem[] = [
  { name: 'React', Icon: SiReact, proficiency: 'Advanced' },
  { name: 'Next.js', Icon: SiNextdotjs, proficiency: 'Advanced' },
  { name: 'TypeScript', Icon: SiTypescript, proficiency: 'Advanced' },
  { name: 'JavaScript', Icon: SiJavascript, proficiency: 'Advanced' },
  { name: 'TailwindCSS', Icon: SiTailwindcss, proficiency: 'Advanced' },
  { name: 'HTML5', Icon: SiHtml5, proficiency: 'Advanced' },
  { name: 'CSS3', Icon: SiCss, proficiency: 'Advanced' },
  { name: 'SvelteKit', Icon: SiSvelte, proficiency: 'Intermediate' },
  { name: 'Vue.js', Icon: SiVuedotjs, proficiency: 'Beginner' },
];

export const backendSkills: SkillItem[] = [
  { name: 'Node.js', Icon: SiNodedotjs, proficiency: 'Intermediate' },
  { name: 'Express.js', Icon: SiExpress, proficiency: 'Intermediate' },
  { name: 'Elysia.js', Icon: SiNodedotjs, proficiency: 'Intermediate' },
  { name: 'MongoDB', Icon: SiMongodb, proficiency: 'Intermediate' },
  { name: 'PostgreSQL', Icon: SiPostgresql, proficiency: 'Intermediate' },
  { name: 'Prisma', Icon: SiPrisma, proficiency: 'Intermediate' },
];

export const mobileSkills: SkillItem[] = [
  { name: 'React Native', Icon: SiReact, proficiency: 'Intermediate' },
  { name: 'Expo', Icon: SiExpo, proficiency: 'Intermediate' },
];

export const toolsSkills: SkillItem[] = [
  { name: 'Git', Icon: SiGit, proficiency: 'Advanced' },
  { name: 'GitHub', Icon: SiGithub, proficiency: 'Advanced' },
  { name: 'Docker', Icon: SiDocker, proficiency: 'Beginner' },
  { name: 'AWS', Icon: FaAws, proficiency: 'Beginner' },
  { name: 'Cloudflare', Icon: SiCloudflare, proficiency: 'Beginner' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive, and interactive user interfaces',
    skills: frontendSkills,
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side applications and APIs',
    skills: backendSkills,
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance',
    skills: mobileSkills,
  },
  {
    title: 'Tools & DevOps',
    description: 'Development tools and deployment workflows',
    skills: toolsSkills,
  },
];

export const currentLearning: string[] = [
  'CI/CD Pipelines',
  'Microservices',
  'Cloud Infrastructure',
  'Advanced React Patterns',
];
