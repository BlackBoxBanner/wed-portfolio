# 🚀 Sueksit Vachirakumthorn - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing full-stack development skills and professional experience.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8)](https://tailwindcss.com/)

## 🌟 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Complete meta tags, Open Graph images, and structured data
- **Performance Focused**: Optimized images, lazy loading, and efficient code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Type Safety**: Full TypeScript implementation
- **Professional**: Production-ready with analytics, error handling, and monitoring

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: GSAP
- **Icons**: Lucide React

### Development & Deployment
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Code Formatting**: Prettier (via ESLint)
- **Version Control**: Git
- **Deployment**: Vercel (recommended)

### SEO & Analytics
- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Structured Data**: JSON-LD schema
- **Analytics**: Google Analytics (optional)
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: SEO crawler instructions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
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

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/               # API routes
│   │   └── og/           # Open Graph image generation
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx         # Homepage
│   ├── loading.tsx      # Loading UI
│   ├── error.tsx        # Error boundary
│   ├── not-found.tsx    # 404 page
│   └── sitemap.ts       # Dynamic sitemap
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── pages/            # Page-specific components
│   ├── analytics.tsx     # Analytics setup
│   └── menu.tsx         # Navigation
└── lib/                  # Utility functions
    ├── metadata.ts       # SEO metadata configuration
    └── utils.ts         # Helper functions
```

## 📝 Customization

### Personal Information
Update your personal details in `src/lib/metadata.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Name | Your Title",
  description: "Your professional description...",
  url: "https://yourdomain.com",
  author: {
    name: "Your Name",
    email: "your-email@domain.com",
    twitter: "yourusername",
    linkedin: "your-linkedin",
    github: "yourgithub"
  }
}
```

### Content Sections
Modify the content in the component files under `src/components/pages/`:
- `home.tsx` - Hero section
- `about.tsx` - About section
- `skill.tsx` - Skills section
- `project.tsx` - Projects showcase
- `work.tsx` - Work experience
- `education.tsx` - Education background

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme and theme customization in the CSS variables

## 🎨 Design System

The portfolio uses a consistent design system with:
- **Typography**: Outfit font family
- **Color Palette**: Professional black, white, and gray tones
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants
- **Animations**: Subtle GSAP animations for enhanced UX

## 🔧 Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix linting issues
pnpm type-check   # TypeScript type checking
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The portfolio is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 📈 SEO Features

- **Complete Meta Tags**: Title, description, keywords, author
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema for search engines
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawler instructions
- **Performance**: Optimized Core Web Vitals

## 🔒 Security

- Security headers configuration
- Content Security Policy
- XSS protection
- CSRF protection
- Input validation and sanitization

## 📊 Analytics & Monitoring

- Google Analytics integration
- Core Web Vitals tracking
- Error boundary implementation
- Performance monitoring ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Sueksit Vachirakumthorn**
- Website: [sueksit.vercel.app](https://sueksit.vercel.app/)
- Email: svac.mai+worl@gmail.com
- LinkedIn: [sueksit-vachirakumthorn](https://linkedin.com/in/sueksit-vachirakumthorn)
- GitHub: [@sueksit](https://github.com/sueksit)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
