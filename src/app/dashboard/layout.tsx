// app/dashboard/layout.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    const user = localStorage.getItem("user");
    if (!authToken || !user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 bg-[#5AB1BB] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">ResumePro</h1>
          <nav className="space-y-4">
            <Link href="/dashboard" className="block hover:underline">🏠 Home</Link>
            <Link href="/dashboard/resumes" className="block hover:underline">📄 Resumes</Link>
            <Link href="/dashboard/builder" className="block hover:underline">🛠 Builder</Link>
            <Link href="/dashboard/profile" className="block hover:underline">👤 Profile</Link>
          </nav>
        </div>
        <button
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
          className="text-sm hover:underline mt-6"
        >
          🚪 Logout
        </button>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;
