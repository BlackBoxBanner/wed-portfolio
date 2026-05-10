'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CvPdf';
import { Button } from '@/components/ui/button';

type Props = {
  filename?: string;
};

export default function DownloadCvButton({ filename }: Props) {
  const name = filename ?? 'Sueksit-Vachirakumthorn-CV.pdf';
  return (
    <PDFDownloadLink document={<CVDocument />} fileName={name}>
      {({ loading }) => (
        <Button
          variant='outline'
          className='flex items-center gap-2 border-folio-border text-folio-fg hover:bg-folio-surface hover:text-folio-fg'
        >
          {loading ? 'Preparing PDF…' : 'Download PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
