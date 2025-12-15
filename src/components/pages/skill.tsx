import { Heading2, Paragraph } from '@/components/ui/typography';
import { currentLearning, skillCategories } from '@/data';
import type { SkillCategory as SkillCategoryType, SkillItem } from '@/data';
import type { FC } from 'react';

// Skill Component
const Skill: FC<SkillItem> = ({ name, Icon, proficiency }) => {
  const getProficiencyConfig = (level: string) => {
    switch (level) {
      case 'Advanced':
        return {
          bg: 'bg-purple-500/10',
          text: 'text-purple-700 dark:text-purple-400',
          dot: 'bg-purple-500',
        };
      case 'Intermediate':
        return {
          bg: 'bg-yellow-500/10',
          text: 'text-yellow-700 dark:text-yellow-400',
          dot: 'bg-yellow-500',
        };
      case 'Beginner':
        return {
          bg: 'bg-green-500/10',
          text: 'text-green-700 dark:text-green-400',
          dot: 'bg-green-500',
        };
      default:
        return {
          bg: 'bg-gray-500/10',
          text: 'text-gray-700 dark:text-gray-400',
          dot: 'bg-gray-500',
        };
    }
  };

  const config = getProficiencyConfig(proficiency);

  return (
    <div className='bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow'>
      <div className='flex items-center gap-3 mb-3'>
        <div className='bg-primary/10 rounded-full p-3'>
          <Icon className='text-xl text-primary' />
        </div>
        <h4 className='font-semibold text-lg'>{name}</h4>
      </div>
      <div
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${config.bg}`}
      >
        <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
        <span className={config.text}>{proficiency}</span>
      </div>
    </div>
  );
};

// SkillCategory Component
const SkillCategory: FC<SkillCategoryType> = ({
  title,
  skills,
  description,
}) => {
  return (
    <div className='space-y-4'>
      <div className='text-center md:text-left'>
        <h3 className='text-2xl font-bold text-primary mb-2'>{title}</h3>
        <Paragraph className='text-muted-foreground'>{description}</Paragraph>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

// SkillSection Component
const SkillSection: FC = () => {
  return (
    <section className='space-y-12' id='skill'>
      <div className='text-center'>
        <Heading2 className='text-4xl md:text-5xl font-bold mb-4'>
          Skills & Technologies
        </Heading2>
        <Paragraph className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'>
          I&apos;m always eager to learn new technologies and improve my skills
          to deliver high-quality work. Here&apos;s my current tech stack and
          expertise level in each area.
        </Paragraph>
      </div>

      <div className='space-y-12'>
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            description={category.description}
            skills={category.skills}
          />
        ))}
      </div>

      <div className='bg-muted/50 rounded-lg p-8 text-center'>
        <h3 className='text-2xl font-bold mb-4'>
          What I&apos;m Currently Learning
        </h3>
        <Paragraph className='text-lg mb-4'>
          I believe in continuous learning and staying up-to-date with the
          latest technologies.
        </Paragraph>
        <div className='flex flex-wrap justify-center gap-4 text-sm'>
          {currentLearning.map((topic) => (
            <span
              key={topic}
              className='bg-primary/10 text-primary px-3 py-1 rounded-full'
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
