"use client";

import { Menu as MenuIcon, X, Home, User, Code, Briefcase, GraduationCap, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { useState } from "react";

type MenuNavigator = {
  title: string;
  link: string;
  icon: React.ComponentType<{className?: string}>;
};

const navigator: MenuNavigator[] = [
  {
    title: "Home",
    link: "#introduction",
    icon: Home,
  },
  {
    title: "About",
    link: "#about",
    icon: User,
  },
  {
    title: "Skills",
    link: "#skill",
    icon: Code,
  },
  {
    title: "Projects",
    link: "#projects",
    icon: FolderOpen,
  },
  {
    title: "Experience",
    link: "#work",
    icon: Briefcase,
  },
  {
    title: "Education",
    link: "#education",
    icon: GraduationCap,
  },

];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="default" 
              size="icon" 
              className="w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 mr-4" align="end">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4 text-center">Navigation</h3>
              {navigator.map((location) => {
                const IconComponent = location.icon;
                return (
                  <Link 
                    key={location.title} 
                    href={location.link}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {location.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Optional: Add a subtle scroll indicator */}
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-card border rounded-full px-3 py-2 shadow-lg">
          <span className="text-xs font-medium text-muted-foreground">
            Sueksit V.
          </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
