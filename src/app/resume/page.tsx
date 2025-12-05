import ResumePage from '@/components/pages/resume';
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Resume | Sueksit Vachirakumthorn',
  description:
    'Professional resume of Sueksit Vachirakumthorn - Full-Stack Developer specializing in React, Next.js, React Native, and modern web technologies.',
});

export default function Resume() {
  return <ResumePage />;
}
