import IntroductionSection from '@/components/pages/home';
import WorkSection from '@/components/pages/work';
import ProjectSection from '@/components/pages/project';
import SkillSection from '@/components/pages/skill';
import BlogSection from '@/components/pages/blog';
import ContactSection from '@/components/pages/contact-section';

export default function Home() {
  return (
    <main className='relative pt-14'>
      <div className='max-w-[1100px] mx-auto px-6 sm:px-10'>
        <IntroductionSection />
        <WorkSection />
        <ProjectSection />
        <SkillSection />
        <BlogSection />
        <ContactSection />
      </div>
    </main>
  );
}
