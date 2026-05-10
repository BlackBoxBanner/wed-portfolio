import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
import {
  FolioBreadcrumb,
  FolioPageShell,
  FolioPageTitle,
} from '@/components/folio-layout';

const CvPdfPreview = dynamic(
  () => import('../cv/CvPdfPreview').then((mod) => mod.default),
  { ssr: false, loading: () => <Loading /> },
);
const DownloadCvButton = dynamic(
  () => import('../cv/DownloadCvButton').then((mod) => mod.default),
  { ssr: false, loading: () => <Loading /> },
);

const CVPage = () => {
  return (
    <FolioPageShell className='pb-12'>
      <FolioBreadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'CV' }]}
      />

      <FolioPageTitle
        eyebrow='Resume'
        title='Curriculum Vitae'
        description='Preview and download a PDF copy for applications and recruiters.'
      />

      <div className='flex justify-start sm:justify-end mb-8 print:hidden'>
        <DownloadCvButton />
      </div>

      <CvPdfPreview />
    </FolioPageShell>
  );
};

export default CVPage;
