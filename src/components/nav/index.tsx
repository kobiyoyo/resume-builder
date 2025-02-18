'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
    
    const links = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' }
    ];
  
    return (
      <nav className="hidden md:flex items-center space-x-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`
              text-base font-medium transition-colors
              ${pathname === href
                ? 'text-teal-600'
                : 'text-slate-600 hover:text-slate-900'
              }
            `}
          >
            {label}
          </Link>
        ))}
  
        <button className="
          inline-flex items-center justify-center
          px-4 py-2 rounded-md
          bg-emerald-300 text-white
          hover:bg-white-700
          transition-colors
        ">
          Get Started
        </button>
      </nav>
    );
  };
  

  export default Nav;