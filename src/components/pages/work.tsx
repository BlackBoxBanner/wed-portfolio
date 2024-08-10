import {Heading2, Paragraph} from "@/components/ui/typography";
import {cn} from "@/lib/utils";

type ExperienceType = {
  company: string;
  city: string;
  country: string;
  title: string;
  fromMonth: string;
  fromYear: number;
  toMonth?: string;
  toYear?: number;
  current: boolean;
  description?: string;
};

const experiences: ExperienceType[] = [];

const WorkSection = () => {
  return (
    <section className="flex flex-col gap-4" id="work">
      <Heading2>Work Experience</Heading2>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 text-xl divide-y lg:divide-none"
        )}>
        {!experiences.length
          ? "There is no work experience yet."
          : experiences.map((experience) => {
              return (
                <div
                  className="grid py-4 gap-4"
                  key={`${experience.company} ${experience.city} ${experience.title}`}>
                  <Paragraph className="font-bold">
                    {experience.title}
                  </Paragraph>
                  <div className="">
                    <Paragraph className="lg:text-2xl">
                      {experience.company}, {experience.city},{" "}
                      {experience.country}
                    </Paragraph>
                    <Paragraph className="lg:text-2xl">
                      {experience.fromMonth} {experience.fromYear} -{" "}
                      {experience.current ? (
                        "Now"
                      ) : (
                        <>
                          {experience.toMonth} {experience.toYear}
                        </>
                      )}
                    </Paragraph>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default WorkSection;
