import { Heading1, Paragraph } from "@/components/ui/typography";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <section className="grid gap-8 grid-cols-[1fr,auto]" id="introduction">
      <div className="w-full relative flex flex-col justify-between">
        <div className="lg:text-[6.8vw] lg:leading-[6.8vw] md:text-[8vw] md:leading-[8vw] text-[10vw] leading-[10vw]">
          <p>Sueksit</p>
          <p>Vachirakumthorn</p>
        </div>
        <Paragraph>
          I&apos;m a university student and Frontend Web Developer specializing
          in Next.js and TailwindCSS, with experience in backend and database
          technologies. Eager to learn and deliver quality work.
        </Paragraph>
      </div>
      <div className="grid gap-4 lg:gap-8 h-full grid-cols-1 md:grid-cols-[auto,1fr]">
        <div className="relative aspect-square w-full h-auto md:w-auto md:h-[20rem]">
          <Image
            src={`/avatars/bear.jpeg`}
            alt={"My profile image"}
            className="object-cover rounded-md h-full"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
