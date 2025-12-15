import type { ComponentType } from 'react';

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

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type SkillItem = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  proficiency: SkillLevel;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
  description: string;
};

export type ProjectType = {
  title: string;
  git: string;
  demo?: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  highlights: string[];
  category: 'Full-Stack' | 'Backend' | 'Frontend' | 'Mobile' | 'Tool';
  featured?: boolean;
  status: 'Completed' | 'In Progress' | 'Planning';
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

export type QuickFacts = {
  location: string;
  education: string;
  gpax?: string;
  focus: string;
  interests: string;
};

export type PersonalInfo = {
  name: string;
  birthDate: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  whoIAm: string[];
  drives: { icon: string; title: string; detail: string }[];
  journey: string[];
  beyondCode: string;
  quickFacts: QuickFacts;
  closingNote: string;
};
