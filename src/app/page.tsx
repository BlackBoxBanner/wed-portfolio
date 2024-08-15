import IntroductionSection from "@/components/pages/home";
import AboutSection from "@/components/pages/about";
import WorkSection from "@/components/pages/work";
import ProjectSection from "@/components/pages/project";
import EducationSection from "@/components/pages/education";
import SkillSection from "@/components/pages/skill";
import ContactMe from "@/components/pages/contact";

export default function Home() {
  return (
    <main className="h-dvh relative">
      <div className="md:max-w-[80rem] md:mx-auto">
        <section className="p-8 lg:p-16 grid grid-cols-1 gap-12">
          <IntroductionSection />
          <AboutSection />
          <SkillSection />
          <EducationSection />
          <WorkSection />
          <ProjectSection />
        </section>
      </div>
      <ContactMe />
    </main>
  );
}
