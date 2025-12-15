import { Heading2, Paragraph } from '@/components/ui/typography';
import { educations } from '@/data';
import type { EducationType } from '@/data';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { LuDot } from 'react-icons/lu';

const EducationCard: React.FC<{ education: EducationType }> = ({
  education,
}) => {
  return (
    <div className='bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow'>
      <div className='space-y-6'>
        <div className='flex items-start gap-4'>
          <div className='bg-primary/10 rounded-full p-3'>
            <GraduationCap className='w-6 h-6 text-primary' />
          </div>
          <div className='flex-1'>
            <h3 className='text-xl font-bold mb-2'>{education.institution}</h3>
            <div className='space-y-1'>
              <p className='text-lg font-semibold text-primary'>
                {education.degree}
              </p>
              <p className='text-muted-foreground'>{education.fieldOfStudy}</p>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Calendar className='w-4 h-4' />
                <span>
                  {education.startYear} -{' '}
                  {education.current ? 'Present' : education.endYear}
                  {education.current && ' (Expected)'}
                </span>
              </div>
              {education.gpa && (
                <div className='flex items-center gap-2 text-sm'>
                  <Award className='w-4 h-4 text-primary' />
                  <span>
                    <strong>GPAX:</strong> {education.gpa}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {education.achievements && (
          <div>
            <h4 className='font-semibold text-sm mb-3'>
              Academic Achievements & Involvement:
            </h4>
            <ul className='space-y-2'>
              {education.achievements.map((achievement, index) => (
                <li key={index} className='flex items-start gap-2 text-sm'>
                  <LuDot className='w-4 h-4 text-primary flex-shrink-0' />
                  <span className='text-muted-foreground'>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {education.relevant_courses && (
          <div>
            <h4 className='font-semibold text-sm mb-3'>Relevant Coursework:</h4>
            <div className='flex flex-wrap gap-2'>
              {education.relevant_courses.map((course, index) => (
                <span
                  key={index}
                  className='bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs'
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className='space-y-8' id='education'>
      <div className='text-center'>
        <Heading2 className='text-4xl md:text-5xl font-bold mb-4'>
          Education
        </Heading2>
        <Paragraph className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          My academic journey in Computer Engineering, building a strong
          foundation in software development, system design, and engineering
          principles.
        </Paragraph>
      </div>

      <div className='max-w-4xl mx-auto'>
        {educations.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>

      <div className='bg-primary/5 rounded-lg p-8 text-center'>
        <h3 className='text-2xl font-bold mb-4'>Academic Philosophy</h3>
        <Paragraph className='text-lg max-w-2xl mx-auto'>
          I believe education is not just about grades, but about applying
          knowledge to solve real problems. My university experience has taught
          me to balance theoretical understanding with practical implementation,
          preparing me for the challenges of modern software development.
        </Paragraph>
      </div>
    </section>
  );
};

export default EducationSection;
