"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Resume {
  id: number;
  template_type: string;
  personal_info: {
    name: string;
    title: string;
  };
}

const ResumeListPage = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/resumes", {
          headers: {
            "Authorization": `${localStorage.getItem("auth_token")}`
          }
        });
        const data = await res.json();
        setResumes(data);
      } catch (err) {
        console.error("Failed to fetch resumes", err);
      }
    };
    fetchResumes();
  }, []);

  const handleClick = (id: number) => {
    router.push(`/dashboard/resumes/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Resumes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className="border rounded-lg shadow p-6 cursor-pointer hover:bg-gray-50"
            onClick={() => handleClick(resume.id)}
          >
            <h3 className="text-lg font-bold mb-2">{resume.personal_info.name}</h3>
            <p className="text-sm text-gray-600">{resume.personal_info.title}</p>
            <span className="text-xs text-white bg-[#5AB1BB] px-2 py-1 rounded mt-2 inline-block">
              Template: {resume.template_type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeListPage;
