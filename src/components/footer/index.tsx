import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/images/resumeforge-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const menuItems = ['About', 'Services', 'Blog', 'Contact']
    return (
      <footer className="bg-[#5AB1BB] text-stone-900 border-2 border-black">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-stone-900"><Image src={logo} alt='Resume Forge Logo' height={80}></Image></h3>
              <p className="text-stone-900">
                Making the world a better place through constructing elegant hierarchies.
              </p>
            </div>
  
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {menuItems.map(item => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="text-stone-900 hover:text-stone-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-stone-900 hover:text-stone-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                Subscribe to our newsletter
              </h4>
              <form className="mt-4">
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      flex-1 px-4 py-2
                      bg-slate-800
                      text-stone-900
                      rounded-l-md
                      border border-slate-700
                      focus:outline-none focus:border-blue-500
                      md:w-1/5
                    "
                  />
                  <button
                    type="submit"
                    className="
                      px-4 py-2
                      bg-teal-300
                      text-stone-900
                      rounded-r-md
                      hover:bg-white-700
                      transition-colors
                      shadow-xl
                    "
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          <div className="
            mt-12 pt-8
            border-t border-slate-800
            text-stone-900 text-sm
            flex flex-col md:flex-row md:items-center md:justify-between
          ">
            <p>© {currentYear} ResumeForge. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {['Facebook', 'Twitter', 'LinkedIn', 'GitHub'].map(social => (
                  <li key={social}>
                    <a 
                      href="#"
                      className="hover:text-stone-900 transition-colors"
                    >
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>)
}
 
export default Footer;