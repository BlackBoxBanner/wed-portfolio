import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiExpo,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiDocker,
  SiSvelte,
  SiVuedotjs,
  SiAmazonaws,
  SiCloudflare,
} from 'react-icons/si';
import { Heading2, Paragraph } from '@/components/ui/typography';

// Define the SkillProps type for the Skill component
type SkillProps = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
};

type SkillCategoryProps = {
  title: string;
  skills: SkillProps[];
  description: string;
};

// Skill Component
const Skill: React.FC<SkillProps> = ({ name, Icon, proficiency }) => {
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
const SkillCategory: React.FC<SkillCategoryProps> = ({
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
const SkillSection: React.FC = () => {
  const frontendSkills: SkillProps[] = [
    { name: 'React', Icon: SiReact, proficiency: 'Advanced' },
    { name: 'Next.js', Icon: SiNextdotjs, proficiency: 'Advanced' },
    { name: 'TypeScript', Icon: SiTypescript, proficiency: 'Advanced' },
    { name: 'JavaScript', Icon: SiJavascript, proficiency: 'Advanced' },
    { name: 'TailwindCSS', Icon: SiTailwindcss, proficiency: 'Advanced' },
    { name: 'HTML5', Icon: SiHtml5, proficiency: 'Advanced' },
    { name: 'CSS3', Icon: SiCss3, proficiency: 'Advanced' },
    { name: 'SvelteKit', Icon: SiSvelte, proficiency: 'Intermediate' },
    { name: 'Vue.js', Icon: SiVuedotjs, proficiency: 'Beginner' },
  ];

  const backendSkills: SkillProps[] = [
    { name: 'Node.js', Icon: SiNodedotjs, proficiency: 'Intermediate' },
    { name: 'Express.js', Icon: SiExpress, proficiency: 'Intermediate' },
    { name: 'Elysia.js', Icon: SiNodedotjs, proficiency: 'Intermediate' },
    { name: 'MongoDB', Icon: SiMongodb, proficiency: 'Intermediate' },
    { name: 'PostgreSQL', Icon: SiPostgresql, proficiency: 'Intermediate' },
    { name: 'Prisma', Icon: SiPrisma, proficiency: 'Intermediate' },
  ];

  const mobileSkills: SkillProps[] = [
    { name: 'React Native', Icon: SiReact, proficiency: 'Intermediate' },
    { name: 'Expo', Icon: SiExpo, proficiency: 'Intermediate' },
  ];

  const toolsSkills: SkillProps[] = [
    { name: 'Git', Icon: SiGit, proficiency: 'Advanced' },
    { name: 'GitHub', Icon: SiGithub, proficiency: 'Advanced' },
    { name: 'Docker', Icon: SiDocker, proficiency: 'Beginner' },
    { name: 'AWS', Icon: SiAmazonaws, proficiency: 'Beginner' },
    { name: 'Cloudflare', Icon: SiCloudflare, proficiency: 'Beginner' },
  ];

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
        <SkillCategory
          title='Frontend Development'
          description='Building modern, responsive, and interactive user interfaces'
          skills={frontendSkills}
        />

        <SkillCategory
          title='Backend Development'
          description='Creating robust server-side applications and APIs'
          skills={backendSkills}
        />

        <SkillCategory
          title='Mobile Development'
          description='Cross-platform mobile applications with native performance'
          skills={mobileSkills}
        />

        <SkillCategory
          title='Tools & DevOps'
          description='Development tools and deployment workflows'
          skills={toolsSkills}
        />
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
          <span className='bg-primary/10 text-primary px-3 py-1 rounded-full'>
            CI/CD Pipelines
          </span>
          <span className='bg-primary/10 text-primary px-3 py-1 rounded-full'>
            Microservices
          </span>
          <span className='bg-primary/10 text-primary px-3 py-1 rounded-full'>
            Cloud Infrastructure
          </span>
          <span className='bg-primary/10 text-primary px-3 py-1 rounded-full'>
            Advanced React Patterns
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
