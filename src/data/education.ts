import { EducationType } from './types';

export const educationKMUTT: EducationType = {
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
};

export const educations: EducationType[] = [educationKMUTT];
