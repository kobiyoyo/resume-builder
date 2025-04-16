import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import {
  ResumeData,
  Education,
  Experience,
  Project,
  Certification,
} from "./types";

interface ResumeFormProps {
  resumeData: ResumeData;
  updateResume: (data: ResumeData) => void;
  saveFile: (data: ResumeData) => void;
  setActiveTab: (Dispatch<SetStateAction<"form" | "preview">>)
}

type SectionTypes =
  | "personalInfo"
  | "education"
  | "experience"
  | "skills"
  | "projects"
  | "certifications";

export default function ResumeForm({
  resumeData,
  updateResume,
  saveFile,
  setActiveTab,
}: ResumeFormProps) {
  const [activeSection, setActiveSection] =
    useState<SectionTypes>("personalInfo");

  const handlePersonalInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateResume({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const addEducation = () => {
    updateResume({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };

    updateResume({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const removeEducation = (index: number) => {
    updateResume({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  const addExperience = () => {
    updateResume({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
          achievements: "",
        },
      ],
    });
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };

    updateResume({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const removeExperience = (index: number) => {
    updateResume({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    });
  };

  const addSkill = () => {
    updateResume({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    });
  };

  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;

    updateResume({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  const removeSkill = (index: number) => {
    updateResume({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const addProject = () => {
    updateResume({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { name: "", description: "", link: "", technologies: "" },
      ],
    });
  };

  const updateProject = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    updateResume({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const removeProject = (index: number) => {
    updateResume({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index),
    });
  };

  const addCertification = () => {
    updateResume({
      ...resumeData,
      certifications: [
        ...resumeData.certifications,
        { name: "", issuer: "", date: "", description: "" },
      ],
    });
  };

  const updateCertification = (
    index: number,
    field: keyof Certification,
    value: string
  ) => {
    const updatedCertifications = [...resumeData.certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    };

    updateResume({
      ...resumeData,
      certifications: updatedCertifications,
    });
  };

  const removeCertification = (index: number) => {
    updateResume({
      ...resumeData,
      certifications: resumeData.certifications.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <div className="flex flex-wrap mb-6 gap-2">
        {(
          [
            "personalInfo",
            "education",
            "experience",
            "skills",
            "projects",
            "certifications",
          ] as SectionTypes[]
        ).map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              saveFile(resumeData);
            }}
            className={`px-3 py-1 rounded ${
              activeSection === section
                ? " bg-[#5AB1BB] border-black text-white"
                : "bg-gray-200"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Personal Information Section */}
      {activeSection === "personalInfo" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={resumeData.personalInfo.name}
                onChange={handlePersonalInfoChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={resumeData.personalInfo.title}
                onChange={handlePersonalInfoChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., Front-end Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={resumeData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={resumeData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={resumeData.personalInfo.address}
                onChange={handlePersonalInfoChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Professional Summary
              </label>
              <textarea
                name="summary"
                value={resumeData.personalInfo.summary}
                onChange={handlePersonalInfoChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                onClick={() => setActiveSection("education")}
                className={`px-3 py-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Education Section */}
      {activeSection === "education" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Education</h2>
            <button
              onClick={addEducation}
              className="px-3 py-1 bg-[#5AB1BB]  border-black  text-white rounded hover:bg-blue-700"
            >
              Add Education
            </button>
          </div>

          {resumeData.education.length === 0 && (
            <p className="text-gray-500 italic">
              No education entries yet. Click &quot;Add Education&quot; to get
              started.
            </p>
          )}

          {resumeData.education.map((edu, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                onClick={() => removeEducation(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(index, "institution", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Bachelor of Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(index, "field", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Computer Science"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={edu.startDate}
                      onChange={(e) =>
                        updateEducation(index, "startDate", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Sep 2018"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) =>
                        updateEducation(index, "endDate", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Jun 2022 or Present"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={edu.description}
                    onChange={(e) =>
                      updateEducation(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Notable achievements, GPA, coursework, etc."
                  ></textarea>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-row justify-start">
            <div>
              <button
                onClick={() => setActiveSection("personalInfo")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveSection("experience")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      {activeSection === "experience" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <button
              onClick={addExperience}
              className="px-3 py-1 bg-[#5AB1BB]  border-black  text-white rounded hover:bg-blue-700"
            >
              Add Experience
            </button>
          </div>

          {resumeData.experience.length === 0 && (
            <p className="text-gray-500 italic">
              No experience entries yet. Click &quot;Add Experience&quot; to get
              started.
            </p>
          )}

          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                onClick={() => removeExperience(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Position
                  </label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Jan 2020"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., Mar 2022 or Present"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Describe your responsibilities and day-to-day activities"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Key Achievements
                  </label>
                  <textarea
                    value={exp.achievements}
                    onChange={(e) =>
                      updateExperience(index, "achievements", e.target.value)
                    }
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="List your key accomplishments, preferably with metrics"
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
                    <div className="flex flex-row justify-start">
            <div>
              <button
                onClick={() => setActiveSection("education")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveSection('skills')}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Skills</h2>
            <button
              onClick={addSkill}
              className="px-3 py-1 bg-[#5AB1BB]  border-black  text-white rounded hover:bg-blue-700"
            >
              Add Skill
            </button>
          </div>

          {resumeData.skills.length === 0 && (
            <p className="text-gray-500 italic">
              No skills added yet. Click &quot;Add Skill&quot; to get started.
            </p>
          )}

          <div className="space-y-3">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., JavaScript, React, Project Management"
                />
                <button
                  onClick={() => removeSkill(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-start">
            <div>
              <button
                onClick={() => setActiveSection("experience")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Projects</h2>
            <button
              onClick={addProject}
              className="px-3 py-1 bg-[#5AB1BB]  border-black  text-white rounded hover:bg-blue-700"
            >
              Add Project
            </button>
          </div>

          {resumeData.projects.length === 0 && (
            <p className="text-gray-500 italic">
              No projects added yet. Click &quot;Add Project&quot; to get
              started.
            </p>
          )}

          {resumeData.projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      updateProject(index, "name", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Link
                  </label>
                  <input
                    type="text"
                    value={project.link}
                    onChange={(e) =>
                      updateProject(index, "link", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., GitHub repository or live demo"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    value={project.technologies}
                    onChange={(e) =>
                      updateProject(index, "technologies", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., React, Node.js, MongoDB"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Describe the project, your role, and achievements"
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
                    <div className="flex flex-row justify-start">
            <div>
              <button
                onClick={() => setActiveSection("skills")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveSection('certifications')}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {activeSection === "certifications" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <button
              onClick={addCertification}
              className="px-3 py-1 bg-[#5AB1BB]  border-black  text-white rounded hover:bg-blue-700"
            >
              Add Certification
            </button>
          </div>

          {resumeData.certifications.length === 0 && (
            <p className="text-gray-500 italic">
              No certifications added yet. Click &quot;Add Certification&quot;
              to get started.
            </p>
          )}

          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                onClick={() => removeCertification(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(index, "name", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) =>
                      updateCertification(index, "issuer", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="text"
                    value={cert.date}
                    onChange={(e) =>
                      updateCertification(index, "date", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., May 2023"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={cert.description}
                    onChange={(e) =>
                      updateCertification(index, "description", e.target.value)
                    }
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Brief description of the certification (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
                        <div className="flex flex-row justify-start">
            <div>
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 m-1 rounded  bg-[#5AB1BB]  border-black  text-white`}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
