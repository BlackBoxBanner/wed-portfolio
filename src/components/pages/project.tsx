import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Heading2, Paragraph} from "@/components/ui/typography";
import { ExternalLink, Github, Star } from "lucide-react";

type ProjectType = {
  title: string;
  git: string;
  demo?: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  highlights: string[];
  category: "Full-Stack" | "Backend" | "Frontend" | "Mobile" | "Tool";
  featured?: boolean;
  status: "Completed" | "In Progress" | "Planning";
};

const projects: ProjectType[] = [
  {
    title: "SOPet Multi-Vendor E-Commerce Platform",
    git: "#", // Private repo
    demo: "#",
    description: "A comprehensive multi-vendor e-commerce platform with mobile and web interfaces, featuring vendor management, payment integration, and scalable architecture.",
    fullDescription: "Developed a complete multi-vendor e-commerce solution that allows multiple vendors to sell products through a unified platform. Built mobile app with React Native and web interface with Next.js, implementing complex vendor workflows, payment processing, and inventory management.",
    techStack: ["React Native", "Expo", "Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "CI/CD"],
    highlights: ["Multi-vendor architecture", "Payment gateway integration", "Mobile-first design", "Real-time inventory"],
    category: "Full-Stack",
    featured: true,
    status: "In Progress"
  },
  {
    title: "CPE Space - Full-Stack Platform",
    git: "https://github.com/BlackBoxBanner/cpe-space-backend",
    description: "A comprehensive platform for computer engineering students with both frontend and backend components.",
    fullDescription: "Built a full-stack web application for CPE students featuring user management, course resources, and collaborative tools. Implemented modern architecture with separate frontend and backend services.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    highlights: ["RESTful API design", "User authentication", "Responsive design", "Database optimization"],
    category: "Full-Stack",
    featured: true,
    status: "Completed"
  },
  {
    title: "SmartPlanner - Planning Tool",
    git: "https://github.com/BlackBoxBanner/smartplanner",
    description: "An intelligent planning and task management application with modern UI and smart scheduling features.",
    fullDescription: "Developed a smart planning tool that helps users organize tasks, set goals, and track progress. Features intelligent scheduling suggestions and productivity analytics.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    highlights: ["Smart scheduling", "Analytics dashboard", "Clean UI/UX", "Data persistence"],
    category: "Full-Stack",
    featured: true,
    status: "Completed"
  },
  {
    title: "POS System (Software Engineering)",
    git: "https://github.com/BlackBoxBanner/pos-se",
    description: "A robust Point-of-Sale system built with TypeScript, focusing on scalable architecture and clean code practices.",
    fullDescription: "Comprehensive POS system designed with software engineering principles, featuring inventory management, sales tracking, and reporting functionalities.",
    techStack: ["TypeScript", "Node.js", "Express", "MongoDB", "React"],
    highlights: ["Clean architecture", "Inventory management", "Sales analytics", "Multi-user support"],
    category: "Full-Stack",
    status: "Completed"
  },
  {
    title: "Song Request System",
    git: "https://github.com/BlackBoxBanner/song-req",
    description: "A web application for managing song requests with real-time features and user interaction.",
    fullDescription: "Built a song request system that allows users to submit and manage song requests in real-time. Features include request queuing, user voting, and admin controls for event management.",
    techStack: ["React", "Node.js", "Express", "WebSocket", "TypeScript"],
    highlights: ["Real-time updates", "User voting system", "Admin dashboard", "Queue management"],
    category: "Full-Stack",
    status: "Completed"
  },
  {
    title: "EPUB to Audio Converter",
    git: "https://github.com/BlackBoxBanner/epub2audio",
    description: "A tool for converting EPUB books into audio format using text-to-speech technology.",
    fullDescription: "Developed a conversion tool that transforms EPUB books into audio files, making literature more accessible through automated text-to-speech processing.",
    techStack: ["Python", "Text-to-Speech API", "EPUB Parser"],
    highlights: ["Accessibility focus", "Automated processing", "File format conversion", "Audio quality optimization"],
    category: "Tool",
    status: "Completed"
  }
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

const ProjectCard: React.FC<{project: ProjectType, featured?: boolean}> = ({project, featured = false}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Planning": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack": return "bg-purple-100 text-purple-800";
      case "Frontend": return "bg-blue-100 text-blue-800";
      case "Backend": return "bg-green-100 text-green-800";
      case "Mobile": return "bg-pink-100 text-pink-800";
      case "Tool": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={`bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>

        <Paragraph className={featured ? "text-base" : "text-sm"}>
          {featured ? project.fullDescription : project.description}
        </Paragraph>

        {featured && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
            <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, featured ? 8 : 4).map((tech, index) => (
              <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
            {project.techStack.length > (featured ? 8 : 4) && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{project.techStack.length - (featured ? 8 : 4)} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {project.git !== "#" && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.git} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
          {project.demo && project.demo !== "#" && (
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="space-y-12" id="projects">
      <div className="text-center">
        <Heading2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</Heading2>
        <Paragraph className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Here are some of my best work showcasing different aspects of full-stack development, 
          from e-commerce platforms to mobile applications and development tools.
        </Paragraph>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">🌟 Highlighted Work</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">💻 Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
        <Paragraph className="mb-6">
          Check out my GitHub for additional projects, contributions, and experimental work.
        </Paragraph>
        <Button asChild size="lg">
          <Link href="https://github.com/BlackBoxBanner" target="_blank">
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectSection;
