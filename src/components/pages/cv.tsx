'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  educations,
  experiences,
  personalInfo,
  projects,
  skillCategories,
} from '@/data';
import { printResume, shareResume } from '@/lib/resume-utils';

const CVPage = () => {
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

      {/* ATS-Optimized CV - Best Practices Format */}
      <div
        className='max-w-4xl mx-auto bg-white text-black print-resume px-4 py-6'
        style={{ fontFamily: 'Arial, Calibri, sans-serif', lineHeight: '1.5' }}
      >
        {/* HEADER - Clean, Professional */}
        <header className='mb-6 print:mb-4'>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              margin: '0 0 3px 0',
              letterSpacing: '0.5px',
            }}
          >
            {personalInfo.name}
          </h1>
          <p style={{ fontSize: '11px', margin: '0', lineHeight: '1.4' }}>
            {personalInfo.email} | {personalInfo.phone}
          </p>
          <p
            style={{ fontSize: '11px', margin: '2px 0 0 0', lineHeight: '1.4' }}
          >
            LinkedIn: {personalInfo.linkedin.replace('https://', '')} | GitHub:{' '}
            {personalInfo.github.replace('https://', '')} | Portfolio:{' '}
            {personalInfo.website.replace('https://', '')}
          </p>
        </header>

        {/* PROFESSIONAL EXPERIENCE - Action Verbs + Quantified Results */}
        <section className='mb-5 print:mb-3'>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: '0 0 3px 0',
              borderBottom: '1px solid black',
              paddingBottom: '2px',
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className='mb-4'>
              {/* Title and Company */}
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  margin: '0',
                  lineHeight: '1.4',
                }}
              >
                {exp.title}
              </p>
              <p style={{ fontSize: '11px', margin: '0', lineHeight: '1.4' }}>
                {exp.company} • {exp.city}, {exp.country}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  margin: '0 0 2px 0',
                  lineHeight: '1.4',
                  color: '#333',
                }}
              >
                {formatDateRange(
                  exp.fromMonth,
                  exp.fromYear,
                  exp.toMonth,
                  exp.toYear,
                  exp.current,
                )}{' '}
                ({exp.type})
              </p>

              {/* One-line impact summary */}
              <p
                style={{
                  fontSize: '11px',
                  margin: '1px 0 2px 0',
                  fontStyle: 'italic',
                  lineHeight: '1.4',
                }}
              >
                {exp.description}
              </p>

              {/* Achievements with action verbs */}
              <ul
                style={{
                  fontSize: '11px',
                  margin: '0',
                  paddingLeft: '20px',
                  lineHeight: '1.4',
                }}
              >
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    style={{ margin: '1px 0', marginLeft: '0' }}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* NOTABLE PROJECTS - Action Verbs + GitHub Links */}
        <section className='mb-5 print:mb-3'>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: '0 0 3px 0',
              borderBottom: '1px solid black',
              paddingBottom: '2px',
            }}
          >
            NOTABLE PROJECTS
          </h2>
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} className='mb-4'>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  margin: '0',
                  lineHeight: '1.4',
                }}
              >
                {project.title}
              </p>

              {/* Project link */}
              {project.git && project.git !== '#' && (
                <p
                  style={{
                    fontSize: '11px',
                    margin: '0 0 1px 0',
                    lineHeight: '1.4',
                    color: '#0066cc',
                  }}
                >
                  GitHub: {project.git.replace('https://', '')}
                </p>
              )}

              {/* Project description */}
              <p
                style={{
                  fontSize: '11px',
                  margin: '1px 0 2px 0',
                  lineHeight: '1.4',
                }}
              >
                {project.description}
              </p>

              {/* Highlights with action verbs */}
              <ul
                style={{
                  fontSize: '11px',
                  margin: '0',
                  paddingLeft: '20px',
                  lineHeight: '1.4',
                }}
              >
                {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                  <li key={hIndex} style={{ margin: '1px 0', marginLeft: '0' }}>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <p
                style={{
                  fontSize: '11px',
                  margin: '2px 0 0 0',
                  lineHeight: '1.4',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>Technologies:</span>{' '}
                {project.techStack.join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* TECHNICAL SKILLS - Categorized, No Levels */}
        <section className='mb-5 print:mb-3'>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: '0 0 3px 0',
              borderBottom: '1px solid black',
              paddingBottom: '2px',
            }}
          >
            TECHNICAL SKILLS
          </h2>
          {skillCategories.map((category, index) => (
            <p
              key={index}
              style={{ fontSize: '11px', margin: '1px 0', lineHeight: '1.4' }}
            >
              <span style={{ fontWeight: 'bold' }}>{category.title}:</span>{' '}
              {category.skills.map((skill) => skill.name).join(', ')}
            </p>
          ))}
        </section>

        {/* EDUCATION */}
        <section className='mb-5 print:mb-3'>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: '0 0 3px 0',
              borderBottom: '1px solid black',
              paddingBottom: '2px',
            }}
          >
            EDUCATION
          </h2>
          {educations.slice(0, 1).map((edu, index) => (
            <div key={index} className='mb-3'>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  margin: '0',
                  lineHeight: '1.4',
                }}
              >
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p style={{ fontSize: '11px', margin: '0', lineHeight: '1.4' }}>
                {edu.institution}
              </p>
              <p style={{ fontSize: '11px', margin: '0', lineHeight: '1.4' }}>
                {formatEducationDate(edu.startYear, edu.endYear)}
                {edu.gpa && ` • GPA: ${edu.gpa}/4.0`}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default CVPage;
