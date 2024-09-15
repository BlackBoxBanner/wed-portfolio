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

const experiences: ExperienceType[] = [
  {
    country: "Japan",
    city: "Fukuoka",
    company: "Fukuoka Institute of Technology",
    title: "Data Analyst Intern",
    current: false,
    fromMonth: "June",
    fromYear: 2024,
    toMonth: "August",
    toYear: 2024,
    description:
      "During my internship at Fukuoka Institute of Technology, I analyzed sales data for an Australian café using Python, helping inform pricing and inventory strategies. I created synthetic data to simulate real-world conditions based on research into POS systems, while developing expertise in Python libraries and adapting quickly to diverse project requirements.",
  },
  {
    country: "Thailand",
    city: "Bangkok",
    company: "King Mongkut’s University of Technology Thonburi CPE",
    title: "Server Administrator",
    current: true,
    fromMonth: "August",
    fromYear: 2024,
    description:
      "Being server administrator for Computer Engineering department at KMUTT.",
  },
  {
    country: "Thailand",
    city: "Bangkok",
    company: "King Mongkut's University of Technology Thonburi (KMUTT)",
    title: "Fullstack Developer (Academic Project)",
    current: true,
    fromMonth: "August",
    fromYear: 2024,
    description:
      "This project, part of my 4th-year Computer Engineering coursework at KMUTT, was requested by another department within the university. It involved applying my fullstack development skills to meet specific departmental needs, showcasing interdisciplinary collaboration and problem-solving.",
  },
];

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
