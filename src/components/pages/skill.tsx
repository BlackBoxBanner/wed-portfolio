import { skillCategories } from '@/data';
import type { SkillCategory as SkillCategoryType, SkillLevel } from '@/data';
import { cn } from '@/lib/utils';

type SkillLine = { name: string; proficiency: SkillLevel };

const LIMITS: Record<string, number> = {
  'Frontend Development': 5,
  'Backend Development': 5,
  'Mobile Development': 2,
  'Tools & DevOps': 4,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-muted mb-12 flex items-center gap-3'>
      <span className='shrink-0'>{children}</span>
      <span className='h-px flex-1 bg-folio-border min-w-[2rem]' aria-hidden />
    </p>
  );
}

function SkillRow({ skill }: { skill: SkillLine }) {
  const isAdv = skill.proficiency === 'Advanced';
  return (
    <div className='flex justify-between items-center gap-4'>
      <span className='text-[13px] text-folio-fg'>{skill.name}</span>
      <span
        className={cn(
          'font-mono text-[10px] tracking-[0.04em] shrink-0',
          isAdv ? 'text-folio-brand' : 'text-folio-muted',
        )}
      >
        {skill.proficiency}
      </span>
    </div>
  );
}

function SkillGroup({ category }: { category: SkillCategoryType }) {
  const limit = LIMITS[category.title] ?? category.skills.length;

  const toolsOverride: SkillLine[] = [
    { name: 'Git / GitHub', proficiency: 'Advanced' },
    { name: 'Docker', proficiency: 'Beginner' },
    { name: 'AWS', proficiency: 'Beginner' },
    { name: 'Cloudflare', proficiency: 'Beginner' },
  ];

  const rows: SkillLine[] =
    category.title === 'Tools & DevOps'
      ? toolsOverride
      : category.skills.slice(0, limit).map((s) => ({
          name: s.name,
          proficiency: s.proficiency,
        }));

  const shortTitle = category.title.replace(' Development', '');

  return (
    <div className='bg-folio-bg p-7'>
      <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-folio-brand mb-4'>
        {shortTitle}
      </p>
      <div className='flex flex-col gap-2'>
        {rows.map((skill) => (
          <SkillRow key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

const SkillSection = () => {
  return (
    <section
      id='skills'
      className='py-16 sm:py-20 border-t border-folio-border'
    >
      <SectionLabel>Skills & Stack</SectionLabel>
      <div className='grid sm:grid-cols-2 border border-folio-border bg-folio-border gap-px'>
        {skillCategories.map((cat) => (
          <SkillGroup key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
