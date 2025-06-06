import { useEffect, useState } from "react";
import heroImage from "@assets/IMG_0646.jpg";

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
      className="relative h-screen overflow-hidden"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Hero background featuring 070 Shake portrait */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-overlay z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
            <span className="block text-white">GARMENTS</span>
            <span className="block text-stroke animate-pulse-slow">FOR THE</span>
            <span className="block text-electric">UNORTHODOX</span>
          </h1>
          <p className="text-xl md:text-2xl font-space text-gray-300 mb-8 max-w-2xl mx-auto">
            LA-based fashion designer creating bold streetwear for celebrities and cultural icons
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={scrollToPortfolio}
              className="bg-electric text-black px-8 py-3 font-bebas text-lg tracking-wider hover:bg-white transition-colors"
            >
              VIEW PORTFOLIO
            </button>
            <button 
              onClick={scrollToSeenOn}
              className="border border-white text-white px-8 py-3 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              SEEN ON
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-electric rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-6 h-6 bg-warm-orange rounded-full animate-float hidden lg:block" style={{ animationDelay: '-2s' }}></div>
    </section>
  );
}
