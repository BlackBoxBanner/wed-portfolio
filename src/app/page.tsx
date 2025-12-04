import IntroductionSection from "@/components/pages/home";
import AboutSection from "@/components/pages/about";
import WorkSection from "@/components/pages/work";
import ProjectSection from "@/components/pages/project";
import EducationSection from "@/components/pages/education";
import SkillSection from "@/components/pages/skill";
import BlogSection from "@/components/pages/blog";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section - Full viewport */}
      <div className="min-h-screen flex items-center pt-24">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <IntroductionSection />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-24 py-24">
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <WorkSection />
          <EducationSection />
        </div>
      </div>

      {/* Blog Section - Full width background */}
      <BlogSection />


    </main>
  );
}
