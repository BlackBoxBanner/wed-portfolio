import ScrollToView from "@/components/scrollToView";
import {differenceInYears} from "date-fns";

const AboutSection = () => {
  const birthDate = new Date(2001, 6, 21);
  const currentAge = differenceInYears(new Date(), birthDate);
  return (
    <section className="p-8 lg:p-16 flex flex-col gap-12" id="about">
      <ScrollToView>
        <h2 className="text-6xl font-bold mb-4">About Me</h2>
      </ScrollToView>
      <ScrollToView>
        <p className="text-2xl lg:text-4xl">
          Hi, I&apos;m <strong>Sueksit Vachiraumthorn</strong>, a passionate
          Frontend Web Developer living in Thailand. I was born on July 21,
          2001, making me {currentAge} years old.
        </p>
      </ScrollToView>
    </section>
  );
};

export default AboutSection;
