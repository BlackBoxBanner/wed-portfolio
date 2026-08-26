# Sueksit Vachirakumthorn - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19,
TypeScript, and Tailwind CSS. Showcasing full-stack development skills,
professional experience, blog posts, and a downloadable CV.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)](https://tailwindcss.com/)

## Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Meta tags, Open Graph images, Twitter cards, and structured
  data
- **Performance Focused**: Optimized images, lazy loading, and efficient code
  splitting
- **Accessibility**: Semantic HTML and keyboard-friendly UI patterns
- **Type Safety**: Full TypeScript implementation
- **Blog**: MDX-powered blog with syntax highlighting
- **CV**: PDF preview and download via `@react-pdf/renderer`

## Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI Library**: React 19
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animations**: GSAP, `tw-animate-css`
- **Icons**: Lucide React, React Icons
- **Content**: MDX via `@next/mdx` and `next-mdx-remote`

### Development & Deployment

- **Package Manager**: pnpm
- **Linting**: ESLint 9 (flat config via `eslint.config.mjs`)
- **Code Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Version Control**: Git
- **Deployment**: Vercel (recommended)

### SEO

- **Meta Tags**: Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawler instructions

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BlackBoxBanner/wed-portfolio.git
   cd wed-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. **Run development server**

   ```bash
   pnpm dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
content/
└── blog/                   # MDX blog posts

src/
├── app/                    # App Router pages and routes
│   ├── blog/               # Blog listing and dynamic post pages
│   ├── cv/                 # CV page and OG/Twitter images
│   ├── globals.css         # Tailwind CSS 4 theme and global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── pages/              # Page-specific sections
│   ├── cv/                 # PDF preview and download
│   └── menu.tsx            # Navigation
├── data/                   # Static content (skills, projects, experience)
└── lib/                    # Utilities (metadata, blog, resume helpers)
```

## Customization

### Personal Information

Update your personal details in `src/lib/metadata.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name | Your Title',
  description: 'Your professional description...',
  url: 'https://yourdomain.com',
  author: {
    name: 'Your Name',
    email: 'your-email@domain.com',
    twitter: 'yourusername',
    linkedin: 'your-linkedin',
    github: 'yourgithub',
  },
};
```

### Content Sections

Modify the content in the component files under `src/components/pages/`:

- `home.tsx` - Hero section
- `about.tsx` - About section
- `skill.tsx` - Skills section
- `project.tsx` - Projects showcase
- `work.tsx` - Work experience
- `education.tsx` - Education background
- `blog.tsx` - Blog listing
- `cv.tsx` - CV page shell

Static data lives under `src/data/` for skills, projects, experience, and
education.

### Blog Posts

Add MDX files to `content/blog/`. Posts support frontmatter, GFM, and syntax
highlighting.

### Styling

- Global styles and theme tokens: `src/app/globals.css`
- Tailwind CSS 4 uses CSS-first configuration with `@theme`, `@utility`, and
  `@plugin`
- Custom folio palette and typography are defined in CSS variables

## Design System

The portfolio uses a consistent design system with:

- **Typography**: Outfit font family
- **Color Palette**: Folio brand tokens plus shadcn-style CSS variables
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants
- **Animations**: GSAP and CSS animations for enhanced UX

## Scripts

```bash
# Development
pnpm dev            # Start development server
pnpm build          # Build for production
pnpm start          # Start production server
pnpm preview        # Build and start production server locally

# Quality
pnpm lint           # Run ESLint
pnpm lint:fix       # Fix linting issues
pnpm type-check     # TypeScript type checking
pnpm format         # Format files with Prettier
pnpm format:check   # Check formatting

# Analysis
pnpm analyze        # Build with bundle analyzer enabled
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in the Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The portfolio is a standard Next.js application and can be deployed to:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## SEO Features

- Complete meta tags for title, description, and authorship
- Open Graph and Twitter Card images for pages and blog posts
- JSON-LD structured data for blog posts
- Dynamic XML sitemap generation
- Robots.txt for search engine crawlers

## Security

- Security headers configured in `next.config.mjs`
- XSS protection headers
- Referrer policy and content type protections

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## Contact

**Sueksit Vachirakumthorn**

- Website: [sueksit.vercel.app](https://sueksit.vercel.app/)
- Email: svac.mai+worl@gmail.com
- LinkedIn:
  [sueksit-vachirakumthorn](https://linkedin.com/in/sueksit-vachirakumthorn)
- GitHub: [@sueksit](https://github.com/sueksit)

---

If you found this portfolio helpful, please give it a star on GitHub!
