import ScrollToView from "@/components/scrollToView";
import Link from "next/link";
import {IoIosArrowRoundDown} from "react-icons/io";

const IntroductionSection = () => {
  return (
    <section
      className="min-h-dvh p-8 lg:p-16 grid gap-8 grid-rows-[auto,auto,1fr] md:grid-rows-[1fr,auto]"
      id="introduction">
      <ScrollToView>
        <div className="text-[10vw] leading-[12vw]">
          <p>Sueksit Vachirakumthorn</p>
        </div>
      </ScrollToView>
      <ScrollToView>
        <p className="text-2xl lg:text-4xl">
          I&apos;m a university student and Frontend Web Developer specializing
          in Next.js and TailwindCSS, with experience in backend and database
          technologies. Eager to learn and deliver quality work.
        </p>
      </ScrollToView>
      <div className="flex justify-center items-end mb-12 md:hidden">
        <ScrollToView>
          <Link href={"#about"} scroll>
            <button className="rounded-full border p-2 bg-background hover:bg-muted ease-in-out duration-150">
              <IoIosArrowRoundDown size={60} />
            </button>
          </Link>
        </ScrollToView>
      </div>
    </section>
  );
};

export default IntroductionSection;
