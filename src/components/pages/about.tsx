import {Heading2, Paragraph} from "@/components/ui/typography";
import {differenceInYears} from "date-fns";

const AboutSection = () => {
  const birthDate = new Date(2001, 6, 21);
  const currentAge = differenceInYears(new Date(), birthDate);
  return (
    <section className="flex flex-col gap-4" id="about">
      <Heading2>About Me</Heading2>
      <Paragraph>
        Hi, I&apos;m <strong>Sueksit Vachiraumthorn</strong>, a passionate
        Frontend Web Developer living in Thailand. I was born on July 21, 2001,
        making me {currentAge} years old.
      </Paragraph>
    </section>
  );
};

export default AboutSection;
