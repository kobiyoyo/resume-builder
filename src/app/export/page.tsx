"use client";
import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumePreview from '../../components/resume-preview';
import { ResumeData } from './types'; 

export default function Export() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [exportStatus, setExportStatus] = useState('loading'); // loading, ready, generating, complete, error
  const resumeRef = useRef(null);
  const router = useRouter();
  const params = useSearchParams();
  const selectedTemplate = params.get('template');
  
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('resumeData');
      if (savedData) {
        setResumeData(JSON.parse(savedData));
        setExportStatus('ready');
      } else {
        setExportStatus('error');
      }
    } catch (error) {
      console.error('Error loading resume data:', error);
      setExportStatus('error');
    }
  }, []);
  
  const generatePDF = async () => {
    if (!resumeRef.current || !resumeData) return;

    setExportStatus('generating');

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = {
        width: canvas.width,
        height: canvas.height
      };

      const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${resumeData?.personalInfo?.name.replace(/\s+/g, '_')}_resume.pdf`);

      setExportStatus('complete');
    } catch (err) {
      console.error('PDF generation error:', err);
      setExportStatus('error');
    }
  };

  const goBack = () => {
    router.push('/');
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Resume Export</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {exportStatus === 'loading' && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading your resume data...</p>
            </div>
          )}
          
          {exportStatus === 'error' && (
            <div className="text-center py-8">
              <div className="text-red-600 text-5xl mb-4">⚠️</div>
              <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
              <p className="text-gray-600 mb-6">Could not load your resume data. Please try again.</p>
              <button 
                onClick={goBack}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Back to Editor
              </button>
            </div>
          )}
          
          {(exportStatus === 'ready' || exportStatus === 'generating' || exportStatus === 'complete') && resumeData && (
            <div className="flex flex-col items-center">
              <div className="mb-6 flex space-x-4">
                <button 
                  onClick={generatePDF}
                  disabled={exportStatus === 'generating'}
                  className={`px-6 py-2 ${exportStatus === 'generating' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white rounded transition`}
                >
                  {exportStatus === 'generating' ? 'Generating PDF...' : 'Download PDF'}
                </button>
                
                <button 
                  onClick={() => { 
                    router.push('/builder');
                    localStorage.clear();
                  }}
                  className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Back to Editor
                </button>
              </div>
              
              {exportStatus === 'complete' && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-6 w-full text-center">
                  PDF generated successfully! If download didn&apos;t start automatically, click the button again.
                </div>
              )}
              
              <div className="border p-1 w-full max-w-4xl mx-auto" ref={resumeRef}>
                <ResumePreview resumeData={resumeData} selectedTemplate={selectedTemplate as string} disableTemplateSelection={true} setSelectedTemplate={() => null}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
