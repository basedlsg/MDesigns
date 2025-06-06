import { useEffect, useRef } from "react";

export default function About() {
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

  const services = [
    "Celebrity Styling & Wardrobe",
    "Music Video & Performance Looks", 
    "Editorial & Magazine Features",
    "Custom Streetwear Design"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6">ABOUT MINZLY</h2>
              <div className="w-16 h-1 bg-electric mb-8"></div>
              <p className="text-gray-300 font-space text-lg leading-relaxed mb-6">
                Based in Los Angeles, Minzly is the creative force behind KME World, designing 
                bold streetwear pieces for the music industry's most innovative artists.
              </p>
              <p className="text-gray-400 font-space leading-relaxed mb-8">
                From magazine covers to music videos, performance styling to red carpet moments, 
                our designs push boundaries and redefine contemporary fashion for the unorthodox.
              </p>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-electric rounded-full"></div>
                  <span className="text-white font-space">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="aspect-[4/5] bg-gray-800 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-warm-orange/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-tshirt text-6xl text-gray-600 mb-4"></i>
                  <p className="text-gray-500 font-space">Studio Portrait</p>
                </div>
              </div>
            </div>
            
            {/* Floating design elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-electric rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-warm-orange rounded-full opacity-60 animate-float" style={{ animationDelay: '-1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
