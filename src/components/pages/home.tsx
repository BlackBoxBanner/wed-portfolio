import { Heading1, Paragraph } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IntroductionSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center" id="introduction">
      <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-[1fr,auto] w-full max-w-7xl">
        <div className="w-full relative flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Hi there! 👋 I&apos;m
            </p>
            <div className="lg:text-[6.8vw] lg:leading-[6.8vw] md:text-[8vw] md:leading-[8vw] text-[10vw] leading-[10vw] font-bold">
              <p className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Sueksit
              </p>
              <p className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Vachirakumthorn
              </p>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Full-Stack Developer
            </p>
          </div>
          
          <div className="space-y-4">
            <Paragraph className="text-lg md:text-xl leading-relaxed max-w-2xl">
              Passionate about building web and mobile applications that people actually enjoy using. 
              I code with purpose, learn with curiosity, and always aim to ship clean, maintainable solutions.
            </Paragraph>
            <Paragraph className="text-muted-foreground">
              🎓 KMUTT Computer Engineering • 💼 Full-Stack Developer • 🚀 Always Learning
            </Paragraph>
          </div>

          <div className="flex lg:flex-row flex-col flex-wrap gap-4 pt-4 w-full justify-start">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#about">Learn More About Me</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <Link href="https://github.com/BlackBoxBanner" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/sueksit" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="mailto:svac.mai+work@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative w-64 h-80 lg:w-72 lg:h-96">
              <Image
                src={`/avatars/my_image.jpg`}
                alt={"Sueksit Vachirakumthorn"}
                className="object-cover rounded-2xl shadow-2xl"
                fill
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
