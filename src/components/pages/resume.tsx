'use client';

import { Heading1, Heading2, Paragraph } from '@/components/ui/typography';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Download,
  Printer,
  Share2,
  Edit3,
  Save,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { educations, experiences, personalInfo, skillCategories } from '@/data';
import { printResume, shareResume } from '@/lib/resume-utils';
import { LuDot } from 'react-icons/lu';

const ResumePage = () => {
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const [professionalSummary, setProfessionalSummary] = useState(
    `${personalInfo.summary} Recently completed Computer Engineering degree at KMUTT with hands-on experience leading full-stack development projects and working with diverse teams.`,
  );

  const formatDate = (
    month: string,
    year: number,
    current: boolean = false,
  ) => {
    if (current) return `${month} ${year} - Present`;
    return `${month} ${year}`;
  };

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
      <div className='flex justify-center gap-4 my-6 bg-white pt-16'>
        <Button
          onClick={shareResume}
          variant='outline'
          className='flex items-center gap-2'
        >
          <Share2 className='w-4 h-4' />
          Share
        </Button>
        <Button
          onClick={printResume}
          variant='outline'
          className='flex items-center gap-2'
        >
          <Printer className='w-4 h-4' />
          Print / Save as PDF
        </Button>
      </div>

      {/* Screen Version */}
      <div className='min-h-screen bg-background print:hidden'>
        {/* Resume Content for Screen */}
        <div className='max-w-4xl mx-auto bg-white shadow-lg'>
          {/* Header */}
          <header className='bg-gradient-to-r from-primary to-blue-600 text-white p-8'>
            <div className='text-center'>
              <Heading1 className='text-4xl md:text-5xl font-bold text-white mb-2'>
                {personalInfo.name}
              </Heading1>
              <Paragraph className='text-xl text-blue-100 mb-4'>
                {personalInfo.title}
              </Paragraph>
              <Paragraph className='text-lg text-blue-100 max-w-2xl mx-auto'>
                {personalInfo.summary}
              </Paragraph>
            </div>
          </header>

          {/* Contact Information */}
          <section className='p-8 bg-gray-50'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm'>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-primary' />
                <span>{personalInfo.email}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-primary' />
                <span>{personalInfo.phone}</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-primary' />
                <span>{personalInfo.location}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4 text-primary' />
                <span className='truncate'>{personalInfo.website}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Github className='w-4 h-4 text-primary' />
                <span className='truncate'>{personalInfo.github}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Linkedin className='w-4 h-4 text-primary' />
                <span className='truncate'>{personalInfo.linkedin}</span>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className='p-8'>
            <div className='flex items-center justify-between mb-4 w-full'>
              <Heading2 className='text-2xl font-bold text-primary border-b-2 border-primary pb-2'>
                Professional Summary
              </Heading2>
              {!isEditingSummary ? (
                <Button
                  onClick={() => setIsEditingSummary(true)}
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-2 print:hidden'
                >
                  <Edit3 className='w-4 h-4' />
                  Edit
                </Button>
              ) : (
                <div className='flex gap-2 print:hidden'>
                  <Button
                    onClick={() => setIsEditingSummary(false)}
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2'
                  >
                    <Save className='w-4 h-4' />
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setProfessionalSummary(
                        `${personalInfo.summary} Recently completed Computer Engineering degree at KMUTT with hands-on experience leading full-stack development projects and working with diverse teams.`,
                      );
                      setIsEditingSummary(false);
                    }}
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2'
                  >
                    <X className='w-4 h-4' />
                    Cancel
                  </Button>
                </div>
              )}
            </div>

            {isEditingSummary ? (
              <Textarea
                value={professionalSummary}
                onChange={(e) => setProfessionalSummary(e.target.value)}
                className='min-h-[150px] text-lg leading-relaxed'
                placeholder='Enter your professional summary...'
              />
            ) : (
              <Paragraph className='text-gray-700 leading-relaxed text-lg'>
                {professionalSummary}
              </Paragraph>
            )}
          </section>

          {/* Work Experience */}
          <section className='p-8 bg-gray-50'>
            <Heading2 className='text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6'>
              Work Experience
            </Heading2>

            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <div key={index} className='border-l-4 border-primary pl-6'>
                  <div className='mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {exp.title}
                    </h3>
                    <div className='flex flex-wrap items-center gap-2 text-sm text-gray-600'>
                      <span className='font-medium'>{exp.company}</span>
                      <span>
                        <LuDot />
                      </span>
                      <span>
                        {exp.city}, {exp.country}
                      </span>
                      <span>
                        <LuDot />
                      </span>
                      <span>
                        {formatDateRange(
                          exp.fromMonth,
                          exp.fromYear,
                          exp.toMonth,
                          exp.toYear,
                          exp.current,
                        )}
                      </span>
                      <span>
                        <LuDot />
                      </span>
                      <span className='bg-primary/10 text-primary px-2 py-1 rounded text-xs'>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <Paragraph className='text-gray-700 mb-3 text-lg'>
                    {exp.description}
                  </Paragraph>

                  <div className='mb-3'>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Key Achievements:
                    </h4>
                    <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Technologies:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className='bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className='p-8'>
            <Heading2 className='text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6'>
              Education
            </Heading2>

            <div className='space-y-6'>
              {educations.map((edu, index) => (
                <div key={index} className='border-l-4 border-primary pl-6'>
                  <div className='mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {edu.degree} in {edu.fieldOfStudy}
                    </h3>
                    <div className='flex flex-wrap items-center gap-2 text-sm text-gray-600'>
                      <span className='font-medium'>{edu.institution}</span>
                      <span>
                        <LuDot />
                      </span>
                      <span>
                        {formatEducationDate(edu.startYear, edu.endYear)}
                      </span>
                      {edu.gpa && (
                        <>
                          <span>
                            <LuDot />
                          </span>
                          <span>GPA: {edu.gpa}/4.0</span>
                        </>
                      )}
                    </div>
                  </div>

                  {edu.achievements && (
                    <div className='mb-3'>
                      <h4 className='font-medium text-gray-900 mb-2'>
                        Achievements:
                      </h4>
                      <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.relevant_courses && (
                    <div>
                      <h4 className='font-medium text-gray-900 mb-2'>
                        Relevant Courses:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {edu.relevant_courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className='bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs'
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className='p-8 bg-gray-50'>
            <Heading2 className='text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6'>
              Technical Skills
            </Heading2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    {category.title}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Print-Only Version */}
      <div className='hidden print:block print-resume'>
        <div className=''>
          {/* Header */}
          <header className='text-center mb-6 pb-4 border-b-2 border-gray-800'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              {personalInfo.name}
            </h1>
            <p className='text-lg text-gray-700 mb-3'>{personalInfo.title}</p>
            <p className='text-sm text-gray-600'>{personalInfo.summary}</p>
          </header>

          {/* Contact Information */}
          <section className='mb-6'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-1 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Email:</span>
                <span>{personalInfo.email}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Phone:</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Location:</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Website:</span>
                <span>{personalInfo.website}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>GitHub:</span>
                <span>{personalInfo.github}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>LinkedIn:</span>
                <span>{personalInfo.linkedin}</span>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className='mb-6'>
            <h2 className='text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3'>
              Professional Summary
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed'>
              {personalInfo.summary} Recently completed Computer Engineering
              degree at KMUTT with hands-on experience leading full-stack
              development projects and working with diverse teams.
            </p>
          </section>

          {/* Work Experience */}
          <section className='mb-6 print-break-inside-avoid'>
            <h2 className='text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-4'>
              Work Experience
            </h2>

            <div className='space-y-4'>
              {experiences.map((exp, index) => (
                <div key={index} className='print-break-inside-avoid'>
                  <div className='mb-2'>
                    <h3 className='text-base font-semibold text-gray-900'>
                      {exp.title} | {exp.company}
                    </h3>
                    <div className='flex items-center gap-4 text-xs text-gray-600'>
                      <span>
                        {exp.city}, {exp.country}
                      </span>
                      <span>
                        {formatDateRange(
                          exp.fromMonth,
                          exp.fromYear,
                          exp.toMonth,
                          exp.toYear,
                          exp.current,
                        )}
                      </span>
                      <span className='bg-gray-200 text-gray-700 px-2 py-1 rounded'>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className='text-xs text-gray-700 mb-2 leading-relaxed'>
                    {exp.description}
                  </p>

                  <div className='mb-2'>
                    <h4 className='text-xs font-medium text-gray-900 mb-1'>
                      Key Achievements:
                    </h4>
                    <ul className='list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-xs font-medium text-gray-900 mb-1'>
                      Technologies:
                    </h4>
                    <p className='text-xs text-gray-700'>
                      {exp.skills.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className='mb-6 print-break-inside-avoid'>
            <h2 className='text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-4'>
              Education
            </h2>

            <div className='space-y-3'>
              {educations.map((edu, index) => (
                <div key={index}>
                  <div className='mb-2'>
                    <h3 className='text-base font-semibold text-gray-900'>
                      {edu.degree} in {edu.fieldOfStudy}
                    </h3>
                    <div className='flex items-center gap-4 text-xs text-gray-600'>
                      <span>{edu.institution}</span>
                      <span>
                        {formatEducationDate(edu.startYear, edu.endYear)}
                      </span>
                      {edu.gpa && <span>GPA: {edu.gpa}/4.0</span>}
                    </div>
                  </div>

                  {edu.achievements && (
                    <div className='mb-2'>
                      <h4 className='text-xs font-medium text-gray-900 mb-1'>
                        Achievements:
                      </h4>
                      <ul className='list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2'>
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.relevant_courses && (
                    <div>
                      <h4 className='text-xs font-medium text-gray-900 mb-1'>
                        Relevant Courses:
                      </h4>
                      <p className='text-xs text-gray-700'>
                        {edu.relevant_courses.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className='print-break-inside-avoid'>
            <h2 className='text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-4'>
              Technical Skills
            </h2>

            <div className='grid grid-cols-2 gap-4'>
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className='text-sm font-semibold text-gray-900 mb-2'>
                    {category.title}
                  </h3>
                  <p className='text-xs text-gray-700 leading-relaxed'>
                    {category.skills.map((skill) => skill.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ResumePage;
