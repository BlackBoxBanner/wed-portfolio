import { Heading2, Paragraph } from "@/components/ui/typography";
import { MapPin, Calendar, Building } from "lucide-react";
import { LuDot } from "react-icons/lu";

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
  description: string;
  achievements: string[];
  skills: string[];
  type: "Internship" | "Academic" | "Project" | "Full-time" | "Part-time" | "Contract";
};

const experiences: ExperienceType[] = [
  {
    country: "Thailand",
    city: "Bangkok",
    company: "SOPet Co., Ltd",
    title: "Full-Stack Developer",
    current: true,
    fromMonth: "January",
    fromYear: 2024,
    type: "Contract",
    description:
      "Led the development of a comprehensive multi-vendor e-commerce platform, creating both mobile and web applications with complex vendor management workflows, payment integration, and scalable architecture.",
    achievements: [
      "Built complete multi-vendor e-commerce system from scratch",
      "Implemented mobile app with React Native (Expo) for vendors and customers",
      "Developed web admin panel with Next.js for platform management",
      "Integrated Stripe payment gateway for secure transactions",
      "Designed and implemented scalable database schema",
      "Set up CI/CD pipeline for automated deployment",
    ],
    skills: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "CI/CD",
    ],
  },
  {
    country: "Thailand",
    city: "Bangkok",
    company: "King Mongkut's University of Technology Thonburi CPE",
    title: "Server Administrator",
    current: false,
    fromMonth: "August",
    fromYear: 2024,
    toYear: 2025,
    toMonth: "June",
    type: "Academic",
    description:
      "Managing and maintaining server infrastructure for the Computer Engineering department, ensuring system reliability, security, and optimal performance for academic operations.",
    achievements: [
      "Maintain server infrastructure for CPE department",
      "Ensure system security and performance optimization",
      "Troubleshoot and resolve technical issues",
      "Support faculty and student computing needs",
    ],
    skills: [
      "Linux",
      "Server Management",
      "Network Administration",
      "System Security",
    ],
  },
  {
    country: "Thailand",
    city: "Bangkok",
    company: "King Mongkut's University of Technology Thonburi (KMUTT)",
    title: "Full-stack Developer (Academic Project)",
    current: false,
    fromMonth: "August",
    fromYear: 2024,
    toYear: 2025,
    toMonth: "June",
    type: "Academic",
    description:
      "Part of 4th-year Computer Engineering coursework, developing a full-stack web application requested by another university department, showcasing interdisciplinary collaboration and problem-solving skills.",
    achievements: [
      "Collaborated with university department to understand requirements",
      "Developed custom web application solution",
      "Applied software engineering best practices",
      "Delivered project meeting academic and functional requirements",
    ],
    skills: [
      "Full-Stack Development",
      "Requirements Analysis",
      "Project Management",
      "Team Collaboration",
    ],
  },
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
    type: "Internship",
    description:
      "Gained international experience analyzing sales data for an Australian café, developing insights for pricing and inventory strategies while creating synthetic data models based on POS system research.",
    achievements: [
      "Analyzed real-world sales data for Australian café business",
      "Developed pricing and inventory optimization strategies",
      "Created synthetic data models for simulation purposes",
      "Research and analyzed POS systems architecture",
      "Gained expertise in Python data analysis libraries",
      "Adapted quickly to international work environment",
    ],
    skills: [
      "Python",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Business Intelligence",
    ],
  },
];

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800";
      case "Internship":
        return "bg-blue-100 text-blue-800";
      case "Academic":
        return "bg-purple-100 text-purple-800";
      case "Project":
        return "bg-orange-100 text-orange-800";
      case "Part-time":
        return "bg-yellow-100 text-yellow-800";
      case "Contract":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDuration = () => {
    if (experience.current) {
      return `${experience.fromMonth} ${experience.fromYear} - Present`;
    }
    return `${experience.fromMonth} ${experience.fromYear} - ${experience.toMonth} ${experience.toYear}`;
  };

  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">{experience.title}</h3>
              {experience.current && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Current
                </span>
              )}
            </div>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(
                experience.type
              )}`}
            >
              {experience.type}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building className="w-4 h-4" />
            <span className="font-medium">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>
              {experience.city}, {experience.country}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDuration()}</span>
          </div>
        </div>

        <Paragraph className="leading-relaxed text-lg">
          {experience.description}
        </Paragraph>

        <div>
          <h4 className="font-semibold text-sm mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <LuDot className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Skills & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="space-y-8" id="work">
      <div className="text-center">
        <Heading2 className="text-4xl md:text-5xl font-bold mb-4">
          Work Experience
        </Heading2>
        <Paragraph className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My journey through internships, academic projects, and real-world
          development experience, showcasing growth from data analysis to
          full-stack development.
        </Paragraph>
      </div>

      <div className="grid gap-6 lg:gap-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.title}-${experience.fromYear}`}
            experience={experience}
          />
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">What&apos;s Next</h3>
        <Paragraph className="text-lg mb-6">
          I&apos;m always open to new opportunities that challenge me to grow as
          a developer. Whether it&apos;s full-stack web development, mobile
          applications, or innovative tech projects, I&apos;m excited to
          contribute to meaningful work.
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            Full-Stack Development
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            E-commerce Solutions
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            Mobile Development
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            Enterprise Solutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
