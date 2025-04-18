// app/dashboard/resumes/[id]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ResumeForm from '@/components/resume-form';
import ResumePreview from '@/components/resume-preview';
import { ResumeData } from './types';

const ResumeDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const defaultResume: ResumeData = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      title: '',
      summary: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
  };

  const [resumeData, setResumeData] = useState<ResumeData>(defaultResume);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/v1/resumes/${id}`, {
          headers: {
            'Authorization': `${localStorage.getItem("auth_token")}`
          }
        });
        const data = await res.json();

        const transformed: ResumeData = {
          personalInfo: data.personal_info,
          education: data.education,
          experience: data.experience,
          skills: data.skills,
          projects: data.projects,
          certifications: data.certifications
        };

        setResumeData(transformed);
        setSelectedTemplate(data.template_type);
      } catch (err) {
        console.error("Error fetching resume", err);
      }
    };
    if (id) fetchResume();
  }, [id]);

  const handleUpdateResume = (newData: ResumeData) => {
    setResumeData(newData);
  };

  const handleExport = () => {
    router.push(`/export?template=${selectedTemplate}`);
  };

  const handleFileSave = (newData: ResumeData) => {
    localStorage.setItem('resumeData', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Resume Builder</h1>

        <div className="flex mb-6 justify-center">
          <button 
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'form' ? 'bg-[#5AB1BB] text-white' : 'bg-gray-200'}`}
          >
            Edit Resume
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'preview' ? 'bg-[#5AB1BB] text-white' : 'bg-gray-200'}`}
          >
            Preview
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'form' ? (
            <ResumeForm 
              resumeData={resumeData} 
              updateResume={handleUpdateResume} 
              saveFile={handleFileSave} 
              setActiveTab={setActiveTab} 
            />
          ) : (
            <div className="flex flex-col items-center">
              <ResumePreview 
                resumeData={resumeData} 
                disableTemplateSelection={false} 
                setSelectedTemplate={setSelectedTemplate} 
              />
              <button 
                onClick={handleExport}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Export PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
