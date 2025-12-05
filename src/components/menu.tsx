'use client';

import {
  Menu as MenuIcon,
  X,
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  FolderOpen,
  BookOpen,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type MenuNavigator = {
  title: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navigator: MenuNavigator[] = [
  {
    title: 'Home',
    link: '/#introduction',
    icon: Home,
  },
  {
    title: 'About',
    link: '/#about',
    icon: User,
  },
  {
    title: 'Skills',
    link: '/#skill',
    icon: Code,
  },
  {
    title: 'Projects',
    link: '/#projects',
    icon: FolderOpen,
  },
  {
    title: 'Experience',
    link: '/#work',
    icon: Briefcase,
  },
  {
    title: 'Education',
    link: '/#education',
    icon: GraduationCap,
  },
  {
    title: 'CV',
    link: '/cv',
    icon: FileText,
  },
  {
    title: 'Blog',
    link: '/blog',
    icon: BookOpen,
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
    setIsOpen(false);

    // If the link is for a section on the home page and we're not on home page
    if (link.startsWith('/#') && pathname !== '/') {
      // Navigate to home page first, then scroll to section after page loads
      router.push(link);
    } else if (link.startsWith('/#') && pathname === '/') {
      // We're on home page, just scroll to section
      const sectionId = link.substring(2); // Remove /#

      // Use setTimeout to ensure smooth scrolling works
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Try multiple scrolling methods for better compatibility
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });

          // Fallback: Use window.scrollTo if scrollIntoView doesn't work
          setTimeout(() => {
            const elementTop =
              element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementTop - 100, // Offset for fixed header
              behavior: 'smooth',
            });
          }, 100);
        } else {
          // If element not found, try again after a short delay
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              const elementTop =
                retryElement.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: elementTop - 100,
                behavior: 'smooth',
              });
            }
          }, 500);
        }
      }, 100);
    } else {
      // Regular navigation for other pages
      router.push(link);
    }
  };

  return (
    <>
      <div className='fixed top-6 right-6 z-50'>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='default'
              size='icon'
              className='w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-64 mr-4' align='end'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-lg mb-4 text-center'>
                Navigation
              </h3>
              {navigator.map((location) => {
                const IconComponent = location.icon;
                return (
                  <button
                    key={location.title}
                    onClick={() => handleNavigation(location.link)}
                    className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors group w-full text-left'
                  >
                    <IconComponent className='w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors' />
                    <span className='text-sm font-medium group-hover:text-primary transition-colors'>
                      {location.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Optional: Add a subtle scroll indicator */}
      <div className='fixed top-6 left-6 z-50'>
        <div className='bg-card border rounded-full px-3 shadow-lg'>
          <span className='text-xs font-medium text-muted-foreground leading-none'>
            Sueksit V.
          </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
