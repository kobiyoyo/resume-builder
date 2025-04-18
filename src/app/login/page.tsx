"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    // Frontend validation
    if (!email || !password) {
      setIsError(true);
      setMessage("Email and password are required.");
      return;
    }

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

      const response = await fetch(`${backendUrl}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setIsError(false);
        setMessage("Login successful! Redirecting...");

        // Save token and user
        localStorage.setItem("auth_token", data.auth_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      } else {
        setIsError(true);
        setMessage(data.message || "Login failed.");
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg border-2 border-black">
          <h2 className="text-2xl font-medium text-gray-600 text-center mb-4">Welcome</h2>

          {/* Notification */}
          {message && (
            <div className={`mb-6 text-center text-sm p-3 rounded ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mb-6 text-right">
              <Link href="/forgot-password" className="text-blue-800 hover:underline text-sm">
                Forgot password?
              </Link>
            </div>
            <div className="mb-6 text-right">
              <Link href="/registration" className="text-blue-800 hover:underline text-sm">
                Haven’t registered?
              </Link>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#5AB1BB] hover:bg-gray-400 text-white py-3 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
