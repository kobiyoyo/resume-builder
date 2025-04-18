export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
    title: string;
    summary: string;
  }
  
  export interface Education {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    link: string;
    technologies: string;
  }
  
  export interface Certification {
    name: string;
    issuer: string;
    date: string;
    description: string;
  }
  
  export interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: string[];
    projects: Project[];
    certifications: Certification[];
  }