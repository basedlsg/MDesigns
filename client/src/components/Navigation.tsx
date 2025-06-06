import { useState, useEffect } from "react";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      scrolled ? 'bg-black' : 'bg-black/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-32 h-auto">
            <img 
              src={kmeWorldLogo}
              alt="KME World"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8 font-space text-sm">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest"
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection('seen-on')}
              className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest"
            >
              Collaborations
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
