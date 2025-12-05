'use client';

import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useCallback, useMemo } from "react";
import { siteConfig } from "@/lib/metadata";

const SOCIAL_LINKS = [
  {
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
    label: "Email",
    external: false,
  },
  {
    href: `https://github.com/${siteConfig.author.github}`,
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: `https://linkedin.com/in/${siteConfig.author.linkedin}`,
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const socialLinks = useMemo(() => 
    SOCIAL_LINKS.map(({ href, icon: Icon, label, external }) => (
      <Button
        key={label}
        variant="ghost"
        size="icon"
        asChild
        className="h-8 w-8 hover:bg-accent transition-colors"
      >
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          aria-label={label}
        >
          <Icon className="h-4 w-4" />
        </a>
      </Button>
    )), []
  );

  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-2">Let&apos;s Connect</h3>
            <p className="text-muted-foreground text-sm">
              Open to new opportunities and collaborations
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks}
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 mr-2" aria-hidden="true" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {CURRENT_YEAR} {siteConfig.author.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}