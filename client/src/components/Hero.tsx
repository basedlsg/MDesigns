import { useEffect, useState } from "react";
import kmeWorldLogo from "@assets/Screen Shot 2024-02-05 at 11.35.29 AM.png";

export default function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxOffset(scrolled * -0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSeenOn = () => {
    const element = document.getElementById('seen-on');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden bg-black"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Minimalist black background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          {/* KME World Logo */}
          <div className="mb-12">
            <img 
              src={kmeWorldLogo} 
              alt="KME World - Garments for the Unorthodox"
              className="mx-auto w-full max-w-2xl h-auto"
            />
          </div>
          
          <p className="text-xl md:text-2xl font-space text-gray-300 mb-8 max-w-2xl mx-auto uppercase tracking-widest">
            Los Angeles Fashion Designer
          </p>
          
          <div className="flex justify-center gap-6">
            <button 
              onClick={scrollToPortfolio}
              className="bg-white text-black px-8 py-3 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase"
            >
              View Collection
            </button>
            <button 
              onClick={scrollToSeenOn}
              className="border border-white text-white px-8 py-3 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors uppercase"
            >
              Collaborations
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-white/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '-2s' }}></div>
    </section>
  );
}
