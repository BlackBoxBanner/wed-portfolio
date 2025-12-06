'use client';

import { differenceInYears } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit3, Save, X } from 'lucide-react';
import { useState } from 'react';
import {
  personalInfo,
  experiences,
  educations,
  skillCategories,
  projects,
} from '@/lib/portfolio-data';
import { printResume, shareResume } from '@/lib/resume-utils';

const CVPage = () => {
  const birthDate = new Date(2001, 7, 21);
  const currentAge = differenceInYears(new Date(), birthDate);
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const [professionalSummary, setProfessionalSummary] = useState(
    `${personalInfo.summary} Passionate software engineer with hands-on experience in web and mobile development, seeking to leverage strong technical and problem-solving skills in a dynamic team.`,
  );

  const formatDateRange = (
    fromMonth: string,
    fromYear: number,
    toMonth?: string,
    toYear?: number,
    current: boolean = false,
  ) => {
    if (current) return `${fromMonth} ${fromYear} - Present`;
    if (toMonth && toYear)
      return `${fromMonth} ${fromYear} - ${toMonth} ${toYear}`;
    return `${fromMonth} ${fromYear}`;
  };

  const formatEducationDate = (startYear: number, endYear: number) => {
    return `${startYear} - ${endYear}`;
  };

  return (
    <>
      {/* Print/Download Controls */}
      <div className='flex justify-center gap-4 my-6 bg-white print:hidden pt-16'>
        <Button
          onClick={shareResume}
          variant='outline'
          className='flex items-center gap-2'
        >
          Share CV
        </Button>
        <Button
          onClick={printResume}
          variant='outline'
          className='flex items-center gap-2'
        >
          Print / Save as PDF
        </Button>
      </div>

      {/* CV Content - Black and White, No Styles */}
      <div className='max-w-4xl mx-auto bg-white font-serif text-black leading-normal print-resume px-4'>
        {/* Header */}
        <header className='flex flex-col md:flex-row justify-between items-start mb-4 border-b border-black pb-2 print:flex print:flex-row print:justify-center print:items-start print:mb-2 print:pb-1 print-break-inside-avoid'>
          <div className='flex-1 flex flex-col items-start print:items-start print:mb-0'>
            <h1 className='text-xl md:text-2xl font-bold uppercase tracking-wide leading-tight mb-0.5 text-black font-serif print:text-base print:mb-0'>
              {personalInfo.name}
            </h1>
            <h2 className='text-sm md:text-base font-semibold mb-0.5 text-black font-serif print:text-xs print:mb-0'>
              CURRICULUM VITAE
            </h2>
          </div>
          <div className='flex-1 text-xs flex flex-col items-end md:items-end gap-0.5 text-black font-serif print:items-end print:text-xs print:gap-0 print:mb-0'>
            <span className='print:mb-0'>{personalInfo.email}</span>
            <span className='print:mb-0'>{personalInfo.phone}</span>
            <span className='print:mb-0'>{personalInfo.location}</span>
            <span className='print:mb-0'>{personalInfo.website}</span>
            <span className='print:mb-0'>{personalInfo.github}</span>
            <span className='print:mb-0'>{personalInfo.linkedin}</span>
          </div>
        </header>

        {/* Personal Statement */}
        <section className='mb-6 print-break-inside-avoid'>
          <div className='flex items-center justify-between mb-3'>
            <h2 className='text-lg font-bold border-b border-black pb-1 w-full'>
              PERSONAL STATEMENT
            </h2>
            {!isEditingSummary ? (
              <Button
                onClick={() => setIsEditingSummary(true)}
                variant='outline'
                size='sm'
                className='flex items-center gap-2 print:hidden text-xs h-6'
              >
                <Edit3 className='w-3 h-3' />
                Edit
              </Button>
            ) : (
              <div className='flex gap-1 print:hidden'>
                <Button
                  onClick={() => setIsEditingSummary(false)}
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1 text-xs h-6'
                >
                  <Save className='w-3 h-3' />
                  Save
                </Button>
                <Button
                  onClick={() => {
                    setProfessionalSummary(
                      `${personalInfo.summary} I am currently completing my Bachelor of Engineering in Computer Engineering at King Mongkut's University of Technology Thonburi (KMUTT), where I have gained comprehensive knowledge in software engineering principles, system design, and modern development practices. My academic journey has been complemented by practical experience through internships, academic projects, and professional contract work, allowing me to bridge theoretical knowledge with real-world application development.`,
                    );
                    setIsEditingSummary(false);
                  }}
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1 text-xs h-6'
                >
                  <X className='w-3 h-3' />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          {isEditingSummary ? (
            <Textarea
              value={professionalSummary}
              onChange={(e) => setProfessionalSummary(e.target.value)}
              className='min-h-[80px] text-sm leading-relaxed font-serif border-black print:hidden'
              placeholder='Enter your professional summary...'
            />
          ) : (
            <p className='text-justify leading-relaxed text-xs'>
              {professionalSummary}
            </p>
          )}
        </section>

        {/* Education */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            EDUCATION
          </h2>
          {educations.slice(0, 1).map((edu, index) => (
            <div key={index} className='mb-3 print-break-inside-avoid'>
              <h3 className='text-base font-bold'>
                {edu.degree} in {edu.fieldOfStudy}
              </h3>
              <p className='font-semibold text-sm'>{edu.institution}</p>
              <p className='text-xs'>
                {formatEducationDate(edu.startYear, edu.endYear)}
                {edu.gpa && ` | GPA: ${edu.gpa}/4.0`}
              </p>
            </div>
          ))}
        </section>

        {/* Professional Experience */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experiences.slice(0, 2).map((exp, index) => (
            <div key={index} className='mb-3 print-break-inside-avoid'>
              <h3 className='text-base font-bold'>{exp.title}</h3>
              <p className='font-semibold text-sm'>{exp.company}</p>
              <p className='text-xs'>
                {exp.city}, {exp.country} |{' '}
                {formatDateRange(
                  exp.fromMonth,
                  exp.fromYear,
                  exp.toMonth,
                  exp.toYear,
                  exp.current,
                )}{' '}
                | {exp.type}
              </p>
              <ul className='list-disc ml-6 space-y-0.5 text-xs'>
                <li>{exp.description}</li>
                {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            NOTABLE PROJECTS
          </h2>
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className='mb-3 print-break-inside-avoid'>
              <h3 className='text-base font-bold mb-1'>{project.title}</h3>
              <p className='text-justify leading-relaxed mb-2 text-xs'>
                {project.description}
              </p>
              <ul className='list-disc ml-6 space-y-0.5 text-xs'>
                {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
              <p className='text-xs'>
                Tech: {project.technologies.slice(0, 3).join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            TECHNICAL COMPETENCIES
          </h2>
          {skillCategories.map((category, index) => (
            <div key={index} className='mb-2'>
              <h3 className='font-bold mb-1 text-sm'>{category.title}:</h3>
              <p className='leading-relaxed text-xs'>
                {category.skills.slice(0, 6).join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* Additional Sections for CV */}
        {/* Optional sections removed or condensed for brevity */}

        {/* Footer with date */}
        {/* <footer className='text-center text-sm border-t border-black pt-4 mt-8'>
          <p>Curriculum Vitae - {personalInfo.name}</p>
          <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </footer> */}
      </div>
    </>
  );
};

export default CVPage;
