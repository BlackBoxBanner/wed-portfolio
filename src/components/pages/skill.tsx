import ScrollToView from "@/components/scrollToView";
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

const SkillSection = () => {
  return (
    <section className="p-8 lg:p-16 flex flex-col gap-12" id="skill">
      <ScrollToView>
        <h2 className="text-6xl font-bold mb-4">Skills</h2>
      </ScrollToView>
      <div className="text-2xl lg:text-4xl ">
        <ScrollToView>
          <p className="">
            I am always eager to learn new technologies and improve my skills to
            deliver high-quality work. Let&apos;s collaborate to bring your
            projects to life!
          </p>
        </ScrollToView>
      </div>
      <div className="flex justify-center items-center my-12 w-full">
        <div className="grid grid-cols-2 text-2xl lg:text-4xl gap-8 w-full md:w-[40rem]">
          <div className="place-self-start">
            <ScrollToView>
              <p>Next.js</p>
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <SiNextdotjs />
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <SiExpress />
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <p>ExpressJS</p>
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <p>TypeScript</p>
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <SiTypescript />
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <SiJavascript />
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <p>JavaScript</p>
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <p>MongoDB</p>
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <SiMongodb />
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <SiPrisma />
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <p>Prisma</p>
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <p>CSS</p>
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <SiCss3 />
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <SiTailwindcss />
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <p>TailwindCSS</p>
            </ScrollToView>
          </div>
          <div className="place-self-start">
            <ScrollToView>
              <p>Svelte</p>
            </ScrollToView>
          </div>
          <div className="place-self-end">
            <ScrollToView>
              <SiSvelte />
            </ScrollToView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
