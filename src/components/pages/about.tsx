import { Heading2, Paragraph } from '@/components/ui/typography';
import { personalInfo } from '@/data';
import { differenceInYears } from 'date-fns';
import { Code, Users, TrendingUp, Heart } from 'lucide-react';

const AboutSection = () => {
  const birthDate = new Date(personalInfo.birthDate);
  const currentAge = differenceInYears(new Date(), birthDate);
  const driveIcons = {
    Code,
    Heart,
    TrendingUp,
    Users,
  };

  return (
    <section className='flex flex-col gap-8' id='about'>
      <div className='text-center'>
        <Heading2 className='text-4xl md:text-5xl font-bold mb-4'>
          About Me
        </Heading2>
        <Paragraph className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          {personalInfo.summary}
        </Paragraph>
      </div>

      <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
        <div className='space-y-6'>
          <div>
            <h3 className='text-2xl font-semibold mb-3 text-primary'>
              Who I Am
            </h3>
            <Paragraph className='text-lg leading-relaxed'>
              Hi, I&apos;m <strong>{personalInfo.name}</strong>, a {currentAge}
              -year-old {personalInfo.title}
              from {personalInfo.quickFacts.location}. {personalInfo.whoIAm[0]}
            </Paragraph>
            <Paragraph className='text-lg leading-relaxed mt-4'>
              {personalInfo.whoIAm[1]}
            </Paragraph>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-3 text-primary'>
              What Drives Me
            </h3>
            <div className='space-y-3'>
              {personalInfo.drives.map((drive) => {
                const Icon = driveIcons[drive.icon as keyof typeof driveIcons];
                return (
                  <div key={drive.title} className='flex items-start gap-3'>
                    <Icon className='w-5 h-5 text-primary mt-1 shrink-0' />
                    <Paragraph className='text-lg leading-relaxed'>
                      <strong>{drive.title}</strong> — {drive.detail}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <div>
            <h3 className='text-2xl font-semibold mb-3 text-primary'>
              My Journey
            </h3>
            <Paragraph className='text-lg leading-relaxed'>
              {personalInfo.journey[0]}
            </Paragraph>
            <Paragraph className='text-lg leading-relaxed mt-4'>
              {personalInfo.journey[1]}
            </Paragraph>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-3 text-primary'>
              Beyond Code
            </h3>
            <Paragraph className='text-lg leading-relaxed'>
              {personalInfo.beyondCode}
            </Paragraph>
          </div>

          <div className='bg-muted/50 rounded-lg p-6'>
            <h4 className='font-semibold text-lg mb-3'>Quick Facts</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Location:</span>
                <span>{personalInfo.quickFacts.location}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Education:</span>
                <span>{personalInfo.quickFacts.education}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>GPAX:</span>
                <span>{personalInfo.quickFacts.gpax}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Focus:</span>
                <span>{personalInfo.quickFacts.focus}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Interests:</span>
                <span>{personalInfo.quickFacts.interests}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center bg-primary/5 rounded-lg p-8'>
        <Paragraph className='text-lg font-medium'>
          &ldquo;{personalInfo.closingNote}&rdquo;
        </Paragraph>
      </div>
    </section>
  );
};

export default AboutSection;
