import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Heading2, Paragraph} from "@/components/ui/typography";

type ProjectType = {
  title: string;
  git: string;
  description: string;
  isOnGoing?: boolean;
  isPrivate?: boolean;
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
  {
    title: "mood-journal",
    git: "https://github.com/BlackBoxBanner/mood-journal",
    description:
      "A project focused on creating a journal application for tracking and analyzing mood changes.",
  },
  {
    title: "cook-book",
    git: "https://github.com/BlackBoxBanner/cook-book",
    description:
      "A digital cookbook application for storing and managing recipes.",
  },
  {
    title: "wordleFinder",
    git: "https://github.com/BlackBoxBanner/wordleFinder",
    description:
      "A tool for finding potential solutions or helping with strategies for the popular word game Wordle.",
  },
  {
    title: "question-solving",
    git: "https://github.com/BlackBoxBanner/question-solving",
    description:
      "A repository containing solutions to various coding or algorithmic challenges.",
  },
  {
    title: "BlackJackTerminal",
    git: "https://github.com/BlackBoxBanner/BlackJackTerminal",
    description: "A terminal-based implementation of the Blackjack card game.",
  },
  {
    title: "utils",
    git: "https://github.com/DookDiks/utils",
    description:
      "A collection of utility functions or tools to assist with various programming tasks.",
  },
  {
    title: "shortlink",
    git: "https://github.com/DookDiks/shortlink",
    description: "A URL shortening service or tool for creating short links.",
  },
  {
    title: "portfolio",
    git: "https://github.com/BlackBoxBanner/wed-portfolio",
    description:
      "The source code for this portfolio website, built using Next.js and Tailwind CSS.",
  },
];

const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-4" id="project">
      <Heading2>Projects</Heading2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 text-xl divide-y lg:divide-none">
        {!projects.length
          ? "There is no project yet."
          : projects.map((project) => {
              return (
                <div
                  className="py-4 grid h-full grid-rows-[auto,1fr] gap-4"
                  key={`${project.title}`}>
                  <Link href={project.git}>
                    <Button variant={"link"} className="text-2xl font-bold p-0">
                      {project.title}
                    </Button>
                  </Link>
                  <Paragraph className="lg:text-2xl">
                    {project.description}
                  </Paragraph>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default ProjectSection;
