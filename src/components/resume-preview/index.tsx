import { Dispatch, SetStateAction, useState } from 'react';
import { ResumeData } from './types'

export default function ResumePreview(
  { resumeData, selectedTemplate, disableTemplateSelection, setSelectedTemplate } : 
  { resumeData: ResumeData, selectedTemplate?: string, 
    disableTemplateSelection: boolean, 
    setSelectedTemplate: Dispatch<SetStateAction<string>>
  } ) {
  const [template, setTemplate] = useState(selectedTemplate || 'modern');
  
  return (
    <div className="w-full">
      {!disableTemplateSelection && (
           <div className="mb-4 flex justify-center">
           <div className="inline-flex rounded-md shadow-sm" role="group">
             <button
               type="button"
               onClick={() => { 
                setSelectedTemplate('modern');
                setTemplate('modern')}
              }
               className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                 template === 'modern' ? 'bg-[#5AB1BB] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
               } border border-gray-300`}
             >
               Modern
             </button>
             <button
               type="button"
               onClick={() => { 
                setSelectedTemplate('classic');
                setTemplate('classic')}}
               className={`px-4 py-2 text-sm font-medium ${
                 template === 'classic' ? 'bg-[#5AB1BB] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
               } border-t border-b border-r border-gray-300`}
             >
               Classic
             </button>
             <button
               type="button"
               onClick={() => { 
                setSelectedTemplate('minimal')
                setTemplate('minimal')}}
               className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                 template === 'minimal' ? 'bg-[#5AB1BB] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
               } border-t border-b border-r border-gray-300`}
             >
               Minimal
             </button>
           </div>
         </div>
      )}
   
      
      <div className="bg-white shadow-lg max-w-4xl mx-auto">
        {template === 'modern' && <ModernTemplate resumeData={resumeData} />}
        {template === 'classic' && <ClassicTemplate resumeData={resumeData} />}
        {template === 'minimal' && <MinimalTemplate resumeData={resumeData} />}
      </div>
    </div>
  );
}

function ModernTemplate({ resumeData } : { resumeData: ResumeData } ) {
  const { personalInfo, education, experience, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">{personalInfo.name || 'Your Name'}</h1>
        <p className="text-xl text-gray-600 mt-1">{personalInfo.title || 'Professional Title'}</p>
        
        <div className="flex flex-wrap mt-3 text-sm">
          {personalInfo.email && (
            <div className="mr-4 mb-2">
              <span className="font-semibold">Email:</span> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="mr-4 mb-2">
              <span className="font-semibold">Phone:</span> {personalInfo.phone}
            </div>
          )}
          {personalInfo.address && (
            <div className="mr-4 mb-2">
              <span className="font-semibold">Location:</span> {personalInfo.address}
            </div>
          )}
        </div>
        
        {personalInfo.summary && (
          <div className="mt-4 text-gray-700">
            <p>{personalInfo.summary}</p>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Education, Skills, Certifications */}
        <div className="md:col-span-1 space-y-6">
          {/* Skills Section */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </section>
          )}
          
          {/* Education Section */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-gray-700">{edu.degree}{edu.field ? `, ${edu.field}` : ''}</p>
                    <p className="text-gray-600 text-sm">
                      {edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
                    </p>
                    {edu.description && <p className="text-gray-700 mt-1 text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Certifications Section */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                    <p className="text-gray-700 text-sm">{cert.issuer}{cert.date ? `, ${cert.date}` : ''}</p>
                    {cert.description && <p className="text-gray-700 mt-1 text-sm">{cert.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Right Column - Experience, Projects */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience Section */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">Professional Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                      <span className="text-gray-600 text-sm">
                        {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                      </span>
                    </div>
                    <p className="text-gray-700 italic">{exp.company}</p>
                    {exp.description && <p className="text-gray-700 mt-2">{exp.description}</p>}
                    {exp.achievements && (
                      <div className="mt-2">
                        <p className="font-medium text-gray-800">Key Achievements:</p>
                        <p className="text-gray-700">{exp.achievements}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects Section */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">Projects</h2>
              <div className="space-y-5">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{project.name}</h3>
                      {project.link && (
                        <a href={project.link} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                          Project Link
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <p className="text-gray-600 text-sm mb-1">
                        <span className="font-medium">Technologies:</span> {project.technologies}
                      </p>
                    )}
                    {project.description && <p className="text-gray-700">{project.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function ClassicTemplate({ resumeData } : { resumeData: ResumeData } ) {
  const { personalInfo, education, experience, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-8 font-serif">
      {/* Header */}
      <header className="text-center mb-8 border-b-2 border-gray-300 pb-4">
        <h1 className="text-4xl font-bold uppercase tracking-wider">{personalInfo.name || 'Your Name'}</h1>
        {personalInfo.title && <p className="text-xl mt-1">{personalInfo.title}</p>}
        
        <div className="flex flex-wrap justify-center mt-3 text-sm">
          {personalInfo.email && (
            <div className="mx-2 mb-2">
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="mx-2 mb-2">
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.address && (
            <div className="mx-2 mb-2">
              {personalInfo.address}
            </div>
          )}
        </div>
      </header>
      
      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-2">Professional Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Professional Experience</h2>
          <div className="space-y-5">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">{exp.position}</h3>
                  <span className="text-gray-600">
                    {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                  </span>
                </div>
                <p className="font-semibold">{exp.company}</p>
                {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                {exp.achievements && <p className="mt-1 text-gray-700">{exp.achievements}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">{edu.institution}</h3>
                  <span className="text-gray-600">
                    {edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
                  </span>
                </div>
                <p>{edu.degree}{edu.field ? `, ${edu.field}` : ''}</p>
                {edu.description && <p className="text-gray-700 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-2">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="mr-3 mb-2 bg-gray-200 px-3 py-1 rounded">{skill}</span>
            ))}
          </div>
        </section>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Project Link
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <p className="italic">
                    Technologies: {project.technologies}
                  </p>
                )}
                {project.description && <p className="text-gray-700 mt-1">{project.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-800">{cert.name}</h3>
                <p>{cert.issuer}{cert.date ? `, ${cert.date}` : ''}</p>
                {cert.description && <p className="text-gray-700 mt-1">{cert.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MinimalTemplate({ resumeData } : { resumeData: ResumeData } ) {
  const { personalInfo, education, experience, skills, projects, certifications } = resumeData;
  
  return (
    <div className="p-8 font-sans text-gray-800">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold">{personalInfo.name || 'Your Name'}</h1>
        {personalInfo.title && <p className="text-gray-600">{personalInfo.title}</p>}
        
        <div className="flex flex-wrap mt-2 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="mr-4 mb-1">
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="mr-4 mb-1">
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.address && (
            <div className="mb-1">
              {personalInfo.address}
            </div>
          )}
        </div>
      </header>
      
      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <p>{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <p>{skills.join(', ')}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                  </span>
                </div>
                {exp.description && <p className="mt-1 text-sm">{exp.description}</p>}
                {exp.achievements && <p className="mt-1 text-sm">{exp.achievements}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{edu.institution}</h3>
                    <p>{edu.degree}{edu.field ? `, ${edu.field}` : ''}</p>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
                  </span>
                </div>
                {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Projects</h2>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} className="text-gray-500 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <p className="text-gray-600 text-sm">
                    {project.technologies}
                  </p>
                )}
                {project.description && <p className="mt-1 text-sm">{project.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.issuer}{cert.date ? `, ${cert.date}` : ''}</p>
                {cert.description && <p className="mt-1 text-sm">{cert.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}