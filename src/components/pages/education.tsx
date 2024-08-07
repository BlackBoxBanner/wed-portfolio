import ScrollToView from "@/components/scrollToView";

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
    <section
      className="min-h-dvh p-8 lg:p-16 flex flex-col gap-12"
      id="education">
      <ScrollToView>
        <h2 className="text-6xl font-bold mb-4">Education</h2>
      </ScrollToView>
      <div className="grid grid-rows-2 gap-8 text-2xl">
        {educations.map((education, index) => (
          <ScrollToView key={index}>
            <div className="border border-primary p-4 grid">
              <p className="font-bold">{education.institution}</p>
              <p>
                {education.degree}, {education.fieldOfStudy}
              </p>
              <p>
                {education.startYear} -{" "}
                {education.current ? "Now" : education.endYear}
              </p>
            </div>
          </ScrollToView>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
