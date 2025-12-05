import CVPage from '@/components/pages/cv';
import { generateMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'CV | Sueksit Vachirakumthorn',
  description:
    'Comprehensive Curriculum Vitae of Sueksit Vachirakumthorn - Full-Stack Developer with detailed academic background, professional experience, and technical competencies.',
});

export default function CV() {
  return <CVPage />;
}
