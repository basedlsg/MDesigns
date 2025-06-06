import { useEffect, useRef } from "react";
import ddgImage from "@assets/IMG_2046.jpg";
import cardiBImage from "@assets/gettyimages-2151690758-1024x1024.webp";
import performanceImage from "@assets/IMG_0646.jpg";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(element);
    });

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4">FEATURED WORK</h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="magazine-grid animate-on-scroll">
          {/* DDG x UPROXX Feature */}
          <div className="col-span-12 md:col-span-8 relative group cursor-pointer hover-scale">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${ddgImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-bebas text-3xl text-white mb-2">DDG × UPROXX MAGAZINE</h3>
                <p className="text-gray-300 font-space">Custom streetwear styling for major magazine feature</p>
              </div>
            </div>
          </div>

          {/* Cardi B Styling */}
          <div className="col-span-12 md:col-span-4 relative group cursor-pointer hover-scale">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url(${cardiBImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-bebas text-xl text-white mb-1">CARDI B STYLING</h3>
                <p className="text-gray-300 font-space text-sm">Custom blue ensemble</p>
              </div>
            </div>
          </div>

          {/* 070 Shake Feature */}
          <div className="col-span-12 md:col-span-6 relative group cursor-pointer hover-scale">
            <div className="relative overflow-hidden rounded-lg clip-diagonal">
              <div 
                className="aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${performanceImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-bebas text-3xl text-white mb-2">070 SHAKE</h3>
                <p className="text-gray-300 font-space">Crack Magazine Editorial</p>
              </div>
            </div>
          </div>

          {/* Performance Styling */}
          <div className="col-span-12 md:col-span-6 relative group cursor-pointer hover-scale">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${performanceImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-bebas text-3xl text-white mb-2">PERFORMANCE STYLING</h3>
                <p className="text-gray-300 font-space">Live show custom looks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
