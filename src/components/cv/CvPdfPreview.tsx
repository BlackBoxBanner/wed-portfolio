'use client';

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import CVDocument from './CvPdf';

export default function CvPdfPreview() {
  return (
    <div
      className='max-w-4xl mx-auto bg-white print:hidden'
      style={{ height: 600 }}
    >
      <PDFViewer width='100%' height='100%' showToolbar={false}>
        <CVDocument />
      </PDFViewer>
    </div>
  );
}
