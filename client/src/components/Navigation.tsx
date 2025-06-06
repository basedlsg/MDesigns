import { useState, useEffect } from "react";
import { Link } from "wouter";
import kmeWorldLogo from "@assets/KME WORLD - Logo (twolines) - white box.png";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      scrolled ? 'bg-black' : 'bg-black/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-32 h-auto">
            <Link href="/">
              <img 
                src={kmeWorldLogo}
                alt="KME World"
                className="w-full h-auto cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-space text-sm">
            <Link href="/">
              <a className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">
                Work
              </a>
            </Link>
            <Link href="/collaborations">
              <a className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">
                Collabs
              </a>
            </Link>
            <Link href="/information">
              <a className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">
                About
              </a>
            </Link>
            <Link href="/shop">
              <a className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">
                Shop
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
