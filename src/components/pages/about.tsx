import {Heading2, Paragraph} from "@/components/ui/typography";
import {differenceInYears} from "date-fns";
import { Code, Users, TrendingUp, Heart } from "lucide-react";

const AboutSection = () => {
  const birthDate = new Date(2001, 7, 21);
  const currentAge = differenceInYears(new Date(), birthDate);
  
  return (
    <section className="flex flex-col gap-8" id="about">
      <div className="text-center">
        <Heading2 className="text-4xl md:text-5xl font-bold mb-4">About Me</Heading2>
        <Paragraph className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Full-Stack Developer passionate about building web and mobile applications that solve real-world problems
        </Paragraph>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">Who I Am</h3>
            <Paragraph className="text-lg leading-relaxed">
              Hi, I&apos;m <strong>Sueksit Vachirakumthorn</strong>, a {currentAge}-year-old Full-Stack Developer 
              from Thailand. I&apos;m passionate about building efficient, scalable web and mobile applications 
              that people actually enjoy using.
            </Paragraph>
            <Paragraph className="text-lg leading-relaxed mt-4">
              I code with purpose, learn with curiosity, and always aim to ship clean, maintainable solutions. 
              Whether it&apos;s crafting pixel-perfect frontend experiences or architecting robust backend systems, 
              I believe in building technology that makes a difference.
            </Paragraph>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">What Drives Me</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <Paragraph className="text-lg leading-relaxed">
                  <strong>Clean, maintainable code</strong> — I build for today and tomorrow, ensuring code 
                  quality that scales with projects and teams.
                </Paragraph>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <Paragraph className="text-lg leading-relaxed">
                  <strong>Real-world problem solving</strong> — I love creating applications that are 
                  helpful, usable, and meaningful to users.
                </Paragraph>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <Paragraph className="text-lg leading-relaxed">
                  <strong>Continuous learning</strong> — Technology evolves fast, and I&apos;m always 
                  exploring new tools, frameworks, and best practices.
                </Paragraph>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <Paragraph className="text-lg leading-relaxed">
                  <strong>Collaboration & teamwork</strong> — Great products come from great teams, 
                  clear communication, and shared vision.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">My Journey</h3>
            <Paragraph className="text-lg leading-relaxed">
              Having completed my Computer Engineering degree at King Mongkut&apos;s University of Technology Thonburi (KMUTT), 
              I built my expertise through hands-on projects, internships, and real-world applications throughout my studies.
            </Paragraph>
            <Paragraph className="text-lg leading-relaxed mt-4">
              Through leading full-stack development projects and various technical roles, I&apos;ve gained 
              valuable experience working with diverse teams and cutting-edge technologies. My focus has evolved 
              to specialize in end-to-end web and mobile application development, where I excel at architecting 
              scalable solutions and delivering comprehensive products from initial concept through to production deployment.
            </Paragraph>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">Beyond Code</h3>
            <Paragraph className="text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community. I believe in learning not just for personal growth, 
              but to contribute back to the ecosystem that has taught me so much.
            </Paragraph>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Quick Facts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span>Bangkok, Thailand</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education:</span>
                <span>KMUTT Computer Engineering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">GPAX:</span>
                <span>2.91</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus:</span>
                <span>Full-Stack Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interests:</span>
                <span>Web, Mobile, E-commerce</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-primary/5 rounded-lg p-8">
        <Paragraph className="text-lg font-medium">
          &ldquo;I value end-to-end ownership — from concept and design to implementation, 
          deployment, and maintenance. Let&apos;s build something awesome together.&rdquo;
        </Paragraph>
      </div>
    </section>
  );
};

export default AboutSection;
