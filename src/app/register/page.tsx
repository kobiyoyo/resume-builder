"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
}

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    // Basic frontend validation
    if (!formData.name.trim() || !formData.email || !formData.password || !formData.confirmPassword) {
      setIsError(true);
      setMessage("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setIsError(true);
      setMessage("Passwords do not match.");
      return;
    }

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || " ";

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND;
      const response = await fetch(`${backendUrl}/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            first_name: firstName,
            last_name: lastName,
            age: formData.age || 20,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirmPassword
          }
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsError(false);
        setMessage("Account created! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setIsError(true);
        setMessage(data.errors?.[0] || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg border-2 border-black">
          <h2 className="text-2xl font-medium text-gray-600 text-center mb-4">Create an Account</h2>

          {/* Notification */}
          {message && (
            <div className={`mb-6 text-center text-sm p-3 rounded ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <input
                type="text"
                id="name"
                placeholder="Full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>

            {/* Confirm Password */}
            <div className="mb-6 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                👁️
              </span>
            </div>

            {/* Terms */}
            <div className="mb-6 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <Link href="/privacy-policy" className="text-blue-800 hover:underline">Terms and Conditions</Link>
              </label>
            </div>

            {/* Redirect Link */}
            <div className="mb-6 text-center">
              <span className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-800 hover:underline">
                  Login here
                </Link>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#5AB1BB] hover:bg-gray-400 text-white py-3 rounded-md transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
