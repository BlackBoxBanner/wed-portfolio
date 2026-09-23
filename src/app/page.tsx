import IntroductionSection from '@/components/pages/home';
import WorkSection from '@/components/pages/work';
import ProjectSection from '@/components/pages/project';
import SkillSection from '@/components/pages/skill';
import BlogSection from '@/components/pages/blog';
import ContactSection from '@/components/pages/contact-section';
import { LandingMotionRoot } from '@/components/motion/landing-motion-root';

export default function Home() {
  return (
    <LandingMotionRoot>
      <IntroductionSection />
      <WorkSection />
      <ProjectSection />
      <SkillSection />
      <BlogSection />
      <ContactSection />
    </LandingMotionRoot>
  );
}
