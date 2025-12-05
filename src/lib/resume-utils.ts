'use client';

// Utility functions for resume actions
export const downloadPDF = () => {
  // Use the browser's print dialog with proper styling
  const printContents = document.documentElement.outerHTML;
  const printWindow = window.open('', '_blank');

  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Sueksit Vachirakumthorn - Resume</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            /* Copy critical styles for print */
            @page {
              margin: 0.5in;
              size: A4;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.5;
              color: #111827;
              background: white;
              margin: 0;
              padding: 0;
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
            
            .print\\:hidden {
              display: none !important;
            }
            
            nav, header, footer {
              display: none !important;
            }
            
            .gradient-text {
              background: linear-gradient(to right, #1f2937, #2563eb) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              background-clip: text !important;
            }
            
            .border-primary {
              border-color: #1f2937 !important;
            }
            
            .text-primary {
              color: #1f2937 !important;
            }
            
            .bg-primary {
              background-color: #1f2937 !important;
            }
            
            .bg-primary\\/10 {
              background-color: rgba(31, 41, 55, 0.1) !important;
            }
            
            a {
              color: #1f2937 !important;
              text-decoration: none !important;
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Wait for content to load, then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  }
};

export const printResume = () => {
  window.print();
};

export const shareResume = async () => {
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Sueksit Vachirakumthorn - Resume',
        text: 'Check out my professional resume',
        url: url,
      });
    } catch (err) {
      // Fallback to copy to clipboard
      copyToClipboard(url);
    }
  } else {
    // Fallback to copy to clipboard
    copyToClipboard(url);
  }
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    // You might want to show a toast notification here
    console.log('URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy URL:', err);
  }
};
