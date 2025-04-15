import Link from "next/link";
import Nav from "../nav";
import Image from 'next/image';
import logo from '../../../public/images/resumeforge-logo.png';

const Header = () => {
    return (
      <header className="bg-white shadow-xl border-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-semibold text-slate-900"
            >
              <Image src={logo} alt='Resume Forge Logo' height={80}></Image>
            </Link>
            
            {/* Main Navigation */}
            <Nav />
          </div>
        </div>
      </header>
    );
  };

  export default Header;