"use client";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [resumeCount, setResumeCount] = useState<number>(0);
  const [templateCount, setTemplateCount] = useState<number>(0);

  useEffect(() => {
    setResumeCount(7);       // fake count
    setTemplateCount(3);     // fake count
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#5AB1BB] text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Resumes Created</h3>
          <p className="text-3xl font-bold mt-2">{resumeCount}</p>
        </div>
        <div className="bg-[#5AB1BB] text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Templates Owned</h3>
          <p className="text-3xl font-bold mt-2">{templateCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
