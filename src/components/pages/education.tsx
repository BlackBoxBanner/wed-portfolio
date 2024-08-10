import {Heading2, Paragraph} from "@/components/ui/typography";

type EducationType = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number; // Can be a number or "Current" for ongoing studies
  current: boolean;
};

const educations: EducationType[] = [
  {
    institution: "King Mongkut's University of Technology Thonburi (KMUTT)",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Computer Engineering",
    startYear: 2021,
    endYear: 2025,
    current: true,
  },
];

const EducationSection = () => {
  return (
    <section className="flex flex-col gap-4" id="education">
      <Heading2>Education</Heading2>
      <div className="grid grid-cols-1 divide-y">
        {educations.map((education, index) => (
          <div className="gap-2 grid py-4" key={index}>
            <Paragraph className="font-bold">{education.institution}</Paragraph>
            <Paragraph>
              {education.degree}, {education.fieldOfStudy}
            </Paragraph>
            <Paragraph>
              {education.startYear} -{" "}
              {education.current ? "Now" : education.endYear}
            </Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
