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
    `${personalInfo.summary} I am currently completing my Bachelor of Engineering in Computer Engineering at King Mongkut's University of Technology Thonburi (KMUTT), where I have gained comprehensive knowledge in software engineering principles, system design, and modern development practices. My academic journey has been complemented by practical experience through internships, academic projects, and professional contract work, allowing me to bridge theoretical knowledge with real-world application development.`,
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
        <header className='text-center mb-6 border-b-2 border-black pb-3'>
          <h1 className='text-2xl font-bold mb-2 uppercase tracking-wide'>
            {personalInfo.name}
          </h1>
          <h2 className='text-lg mb-3'>CURRICULUM VITAE</h2>
          <div className='text-xs space-y-1'>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
            <p>{personalInfo.website}</p>
            <p>{personalInfo.github}</p>
            <p>{personalInfo.linkedin}</p>
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
              className='min-h-[120px] text-sm leading-relaxed font-serif border-black print:hidden'
              placeholder='Enter your professional summary...'
            />
          ) : (
            <p className='text-justify leading-relaxed text-sm'>
              {professionalSummary}
            </p>
          )}
        </section>

        {/* Education */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            EDUCATION
          </h2>
          {educations.map((edu, index) => (
            <div key={index} className='mb-4 print-break-inside-avoid'>
              <div className='mb-2'>
                <h3 className='text-base font-bold'>
                  {edu.degree} in {edu.fieldOfStudy}
                </h3>
                <p className='font-semibold text-sm'>{edu.institution}</p>
                <p className='text-xs'>
                  {formatEducationDate(edu.startYear, edu.endYear)}
                  {edu.gpa && ` | GPA: ${edu.gpa}/4.0`}
                </p>
              </div>

              {edu.achievements && (
                <div className='mb-2'>
                  <h4 className='font-bold mb-1 text-sm'>
                    Academic Achievements & Activities:
                  </h4>
                  <ul className='list-disc ml-6 space-y-0.5 text-xs'>
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.relevant_courses && (
                <div className='mb-2'>
                  <h4 className='font-bold mb-1 text-sm'>
                    Relevant Coursework:
                  </h4>
                  <p className='text-xs'>{edu.relevant_courses.join(', ')}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Professional Experience */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className='mb-4 print-break-inside-avoid'>
              <div className='mb-2'>
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
              </div>

              <div className='mb-2'>
                <h4 className='font-bold mb-1 text-sm'>Role Description:</h4>
                <p className='text-justify leading-relaxed text-xs'>
                  {exp.description}
                </p>
              </div>

              <div className='mb-2'>
                <h4 className='font-bold mb-1 text-sm'>
                  Key Achievements & Responsibilities:
                </h4>
                <ul className='list-disc ml-6 space-y-0.5 text-xs'>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-2'>
                <h4 className='font-bold mb-1 text-sm'>
                  Technologies & Tools Used:
                </h4>
                <p className='text-xs'>{exp.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            NOTABLE PROJECTS
          </h2>
          {projects.map((project, index) => (
            <div key={index} className='mb-4 print-break-inside-avoid'>
              <h3 className='text-base font-bold mb-1'>{project.title}</h3>
              <p className='text-justify leading-relaxed mb-2 text-xs'>
                {project.description}
              </p>

              <div className='mb-2'>
                <h4 className='font-bold mb-1 text-sm'>
                  Key Features & Highlights:
                </h4>
                <ul className='list-disc ml-6 space-y-0.5 text-xs'>
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-2'>
                <h4 className='font-bold mb-1 text-sm'>Technologies:</h4>
                <p className='text-xs'>{project.technologies.join(', ')}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            TECHNICAL COMPETENCIES
          </h2>
          {skillCategories.map((category, index) => (
            <div key={index} className='mb-3'>
              <h3 className='font-bold mb-1 text-sm'>{category.title}:</h3>
              <p className='leading-relaxed text-xs'>
                {category.skills.join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* Additional Sections for CV */}
        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            PROFESSIONAL DEVELOPMENT
          </h2>
          <div className='mb-3'>
            <h3 className='font-bold mb-1 text-sm'>Continuous Learning:</h3>
            <ul className='list-disc ml-6 space-y-0.5 text-xs'>
              <li>
                Regular participation in online technology communities and
                forums
              </li>
              <li>
                Staying current with emerging web technologies and best
                practices
              </li>
              <li>
                Attending virtual conferences and webinars on software
                development
              </li>
              <li>Contributing to open-source projects when possible</li>
            </ul>
          </div>
        </section>

        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            LANGUAGES
          </h2>
          <div className='space-y-1 text-xs'>
            <p>
              <strong>Thai:</strong> Native proficiency
            </p>
            <p>
              <strong>English:</strong> Professional working proficiency
            </p>
          </div>
        </section>

        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            INTERESTS & ACTIVITIES
          </h2>
          <p className='leading-relaxed text-xs'>
            Technology innovation, software architecture design, mobile
            application development, system optimization, collaborative software
            development, and contributing to the tech community through
            knowledge sharing and mentorship.
          </p>
        </section>

        <section className='mb-6 print-break-inside-avoid'>
          <h2 className='text-lg font-bold mb-3 border-b border-black pb-1'>
            REFERENCES
          </h2>
          <p className='italic text-xs'>Available upon request</p>
        </section>

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
