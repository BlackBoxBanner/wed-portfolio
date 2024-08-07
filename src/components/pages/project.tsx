import ScrollToView from "@/components/scrollToView";
import Link from "next/link";
import {Button} from "@/components/ui/button";

type ProjectType = {
  title: string;
  git: string;
  description: string;
};

const projects: ProjectType[] = [
  {
    title: "intern-emotion-analysis",
    git: "https://github.com/BlackBoxBanner/intern-emotion-analysis",
    description:
      "A project focused on analyzing emotions, possibly related to internship experiences or other data sources.",
  },
  {
    title: "emotion-ai",
    git: "https://github.com/BlackBoxBanner/emotion-ai",
    description:
      "This repository likely deals with artificial intelligence applications in emotion recognition or analysis.",
  },
  {
    title: "emotion-analysis",
    git: "https://github.com/BlackBoxBanner/emotion-analysis",
    description:
      "A project centered on analyzing emotions, potentially through various data and methodologies.",
  },
  {
    title: "KMUTT-x-FIT_intern",
    git: "https://github.com/BlackBoxBanner/KMUTT-x-FIT_intern",
    description:
      "A repository associated with an internship program, likely related to King Mongkut's University of Technology Thonburi (KMUTT).",
  },
  {
    title: "mood-journal-app",
    git: "https://github.com/BlackBoxBanner/mood-journal-app",
    description:
      "An application for tracking moods, potentially helping users journal their emotional states.",
  },
  {
    title: "cpe-space-backend",
    git: "https://github.com/BlackBoxBanner/cpe-space-backend",
    description:
      "The backend component of a project named 'CPE Space,' which may relate to computer engineering or a similar field.",
  },
  {
    title: "cpe-space-frontend",
    git: "https://github.com/BlackBoxBanner/cpe-space-frontend",
    description:
      "The frontend component complementing the 'CPE Space' project.",
  },
  {
    title: "epub2audio",
    git: "https://github.com/BlackBoxBanner/epub2audio",
    description:
      "A tool for converting EPUB books into audio format using text-to-speech technology.",
  },
  {
    title: "POS",
    git: "https://github.com/BlackBoxBanner/POS",
    description: "A project related to Point of Sale systems.",
  },
  {
    title: "pos-se",
    git: "https://github.com/BlackBoxBanner/pos-se",
    description:
      "Another project likely related to Point of Sale systems, possibly focusing on specific aspects like software engineering.",
  },
  {
    title: "TheVividBlossom",
    git: "https://github.com/BlackBoxBanner/TheVividBlossom",
    description:
      "A project from a database systems course, which includes web interface and database schema design.",
  },
];

const ProjectSection = () => {
  return (
    <section
      className="min-h-dvh p-8 lg:p-16 flex flex-col gap-12"
      id="project">
      <ScrollToView>
        <h2 className="text-6xl font-bold mb-4">Projects</h2>
      </ScrollToView>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 text-2xl ">
        {!projects.length
          ? "There is no project yet."
          : projects.map((project) => {
              return (
                <ScrollToView key={`${project.title}`}>
                  <div className="border border-primary p-4 grid h-full grid-rows-[auto,1fr] gap-4">
                    <Link href={project.git}>
                      <Button
                        variant={"link"}
                        className="text-2xl font-bold p-0">
                        {project.title}
                      </Button>
                    </Link>
                    <p>{project.description}</p>
                  </div>
                </ScrollToView>
              );
            })}
      </div>
    </section>
  );
};

export default ProjectSection;
