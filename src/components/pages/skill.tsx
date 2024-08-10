import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {Heading2, Paragraph} from "@/components/ui/typography";

// Define the SkillProps type for the Skill component
type SkillProps = {
  name: string;
  Icon: React.ComponentType;
};

// Skill Component
const Skill: React.FC<SkillProps> = ({name, Icon}) => {
  return (
    <>
      <div className="place-self-start">
        <Paragraph>{name}</Paragraph>
      </div>
      <div className="place-self-end">
        <Icon />
      </div>
    </>
  );
};

// SkillsGrid Component
const SkillsGrid: React.FC = () => {
  const skills: SkillProps[] = [
    {name: "Next.js", Icon: SiNextdotjs},
    {name: "ExpressJS", Icon: SiExpress},
    {name: "TypeScript", Icon: SiTypescript},
    {name: "JavaScript", Icon: SiJavascript},
    {name: "MongoDB", Icon: SiMongodb},
    {name: "Prisma", Icon: SiPrisma},
    {name: "CSS", Icon: SiCss3},
    {name: "TailwindCSS", Icon: SiTailwindcss},
    {name: "Svelte", Icon: SiSvelte},
  ];

  // Split the skills array into two halves
  const half = Math.ceil(skills.length / 2);
  const skills1 = skills.slice(0, half);
  const skills2 = skills.slice(half);

  // Display 2 columns when its lg: and 1 column else
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10rem]">
      <div className="grid grid-cols-2 text-2xl lg:text-4xl gap-8 w-full md:w-[40rem] lg:max-w-[25rem]">
        {skills1.map((skill) => (
          <Skill key={skill.name} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
      <div className="grid grid-cols-2 text-2xl lg:text-4xl gap-8 w-full md:w-[40rem] lg:max-w-[25rem]">
        {skills2.map((skill) => (
          <Skill key={skill.name} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
    </div>
  );
};

// SkillSection Component
const SkillSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4" id="skill">
      <Heading2>Skills</Heading2>

      <div className="text-2xl lg:text-4xl ">
        <Paragraph>
          I am always eager to learn new technologies and improve my skills to
          deliver high-quality work. Let&apos;s collaborate to bring your
          projects to life!
        </Paragraph>
      </div>
      <div className="flex justify-center items-center my-12 w-full">
        <SkillsGrid />
      </div>
    </section>
  );
};

export default SkillSection;
