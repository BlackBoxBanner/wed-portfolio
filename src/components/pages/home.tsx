import { Heading1, Paragraph } from "@/components/ui/typography";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <section className="grid gap-8 grid-rows-[auto,auto]" id="introduction">
      <div className="grid gap-4 lg:gap-8 h-full grid-cols-1 md:grid-cols-[auto,1fr]">
        <div className="relative aspect-square w-full h-auto md:w-auto md:h-[20rem]">
          <Image
            src={`/avatars/bear.jpeg`}
            alt={"My profile image"}
            className="object-cover rounded-md h-full"
            fill
          />
        </div>
        <Heading1 className="self-end">Sueksit Vachirakumthorn</Heading1>
      </div>
      <Paragraph>
        I&apos;m a university student and Frontend Web Developer specializing in
        Next.js and TailwindCSS, with experience in backend and database
        technologies. Eager to learn and deliver quality work.
      </Paragraph>
    </section>
  );
};

export default IntroductionSection;
