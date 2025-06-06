import { useEffect, useRef } from "react";
import ringLogo from "@assets/ring logo.png";
import mishkaLogo from "@assets/Screen Shot 2023-04-23 at 10.24.50 PM.png";

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
    "Custom Streetwear Design",
    "Celebrity Styling & Wardrobe",
    "Music Video & Performance Looks", 
    "Editorial & Magazine Features",
    "Brand Collaborations"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 uppercase tracking-wider">About</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 font-space text-lg uppercase tracking-widest">KME World Designer</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="font-bebas text-3xl md:text-4xl text-white mb-6 uppercase">Minzly</h3>
              <p className="text-gray-300 font-space text-lg leading-relaxed mb-6">
                Based in Los Angeles, Minzly is the creative force behind KME World, designing 
                bold streetwear pieces that blur the lines between underground culture and high fashion.
              </p>
              <p className="text-gray-400 font-space leading-relaxed mb-8">
                Known for unconventional silhouettes, statement graphics, and fearless color combinations, 
                KME World has become a go-to brand for artists who refuse to blend in. The 2023 collaboration 
                with MISHKA marked a pivotal moment, cementing the brand's place in streetwear culture.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bebas text-xl text-white mb-4 uppercase tracking-wider">Services</h4>
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-space">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square bg-black p-8 flex items-center justify-center">
                  <img 
                    src={ringLogo}
                    alt="KME World Ring Logo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="aspect-[4/3] bg-gray-900 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-bebas text-lg uppercase tracking-wider">Est. 2020</p>
                    <p className="text-gray-400 font-space text-sm mt-2">Los Angeles</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-900 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-bebas text-lg uppercase tracking-wider">Underground</p>
                    <p className="text-gray-400 font-space text-sm mt-2">Culture</p>
                  </div>
                </div>
                <div className="aspect-square bg-black p-8 flex items-center justify-center">
                  <img 
                    src={mishkaLogo}
                    alt="KME World x MISHKA Collaboration Logos"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bebas text-3xl md:text-4xl text-white mb-6 uppercase">Philosophy</h3>
            <p className="text-gray-400 font-space text-lg leading-relaxed">
              "Fashion should be a form of rebellion. Every piece we create is for those who dare to 
              stand out, who refuse to conform, and who understand that true style comes from within. 
              KME World is for the unorthodox."
            </p>
            <p className="text-gray-500 font-space text-sm mt-6 uppercase tracking-widest">— Minzly, Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
