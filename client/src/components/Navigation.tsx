import { useState, useEffect } from "react";

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
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b border-gray-800 ${
      scrolled ? 'bg-black' : 'bg-black/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bebas tracking-wider">
            <span className="text-white">MINZLY</span>
            <span className="text-electric">×</span>
            <span className="text-warm-orange">KME WORLD</span>
          </div>
          <div className="hidden md:flex space-x-8 font-space text-sm">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-electric transition-colors"
            >
              PORTFOLIO
            </button>
            <button 
              onClick={() => scrollToSection('seen-on')}
              className="hover:text-electric transition-colors"
            >
              SEEN ON
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-electric transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-electric transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
