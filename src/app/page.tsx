import IntroductionSection from "@/components/pages/home";
import AboutSection from "@/components/pages/about";
import WorkSection from "@/components/pages/work";
import ProjectSection from "@/components/pages/project";
import EducationSection from "@/components/pages/education";
import SkillSection from "@/components/pages/skill";

export default function Home() {
  return (
    <main className="h-dvh relative">
      <IntroductionSection />
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <WorkSection />
      <ProjectSection />
    </main>
  );
}
