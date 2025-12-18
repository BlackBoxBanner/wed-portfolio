import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
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
    <>
      {/* Print/Download Controls */}
      <div className='flex justify-center gap-4 mb-4 bg-white print:hidden pt-16'>
        <DownloadCvButton />
      </div>

      {/* React-PDF Preview */}
      <CvPdfPreview />
    </>
  );
};

export default CVPage;
