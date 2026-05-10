import CVPage from '@/components/pages/cv';
import type { Metadata } from 'next';
import { generateMetadata, siteOrigin } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'CV | Sueksit Vachirakumthorn',
  description:
    'Comprehensive Curriculum Vitae of Sueksit Vachirakumthorn - Full-Stack Developer with detailed academic background, professional experience, and technical competencies.',
  url: `${siteOrigin()}/cv`,
});

export default function CV() {
  return <CVPage />;
}
