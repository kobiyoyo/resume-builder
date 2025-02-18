import Link from "next/link";
import Nav from "../nav";


const Header = () => {
    return (
      <header className="bg-white border-b border-slate-200 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-semibold text-slate-900"
            >
              Logo
            </Link>
            
            {/* Main Navigation */}
            <Nav />
          </div>
        </div>
      </header>
    );
  };

  export default Header;