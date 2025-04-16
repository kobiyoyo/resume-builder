"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/builder", label: "Create Resume" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="hidden md:flex items-center space-x-8 h-48">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`
                text-base font-medium transition-colors
                ${
                  pathname === href
                    ? "text-teal-600"
                    : "text-slate-600 hover:text-slate-900"
                }
              `}
          >
            {label}
          </Link>
        ))}

        <button
          className="
            inline-flex items-center justify-center
            px-4 py-2 rounded-md
            bg-[#5AB1BB] text-white
            hover:bg-emerald-400
            transition-colors border-2 border-black 
          "
          onClick={() => router.push('/register')}
        >
          Get Started
        </button>
      </nav>

      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-slate-600 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-slate-600 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-slate-600 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`
          fixed inset-0 z-40 bg-white 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`
                  text-xl font-medium transition-colors
                  ${
                    pathname === href
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-slate-900"
                  }
                `}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button
            className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-md
              bg-emerald-300 text-white
              hover:bg-emerald-400
              transition-colors
              text-lg
            "
            onClick={() => router.push('/register')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
