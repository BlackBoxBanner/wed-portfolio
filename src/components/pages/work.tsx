import ScrollToView from "@/components/scrollToView";

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
    <section
      className="min-h-dvh p-8 lg:p-16 flex flex-col gap-12 text-2xl lg:text-2xl"
      id="work">
      <ScrollToView>
        <h2 className="text-6xl font-bold mb-4">Work Experience</h2>
      </ScrollToView>
      <div className="grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {!experiences.length
          ? "There is no work experience yet."
          : experiences.map((experience) => {
              return (
                <ScrollToView
                  key={`${experience.company} ${experience.city} ${experience.title}`}>
                  <div className="border border-primary p-4 grid">
                    <p className="font-bold">{experience.title}</p>
                    <p>
                      {experience.company}, {experience.city},{" "}
                      {experience.country}
                    </p>
                    <p>
                      {experience.fromMonth} {experience.fromYear} -{" "}
                      {experience.current ? (
                        "Now"
                      ) : (
                        <>
                          {experience.toMonth} {experience.toYear}
                        </>
                      )}
                    </p>
                  </div>
                </ScrollToView>
              );
            })}
      </div>
    </section>
  );
};

export default WorkSection;
