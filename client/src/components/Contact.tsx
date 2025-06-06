import { useEffect, useRef } from "react";
import contactInfo from "@assets/contact information.png";

export default function Contact() {
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

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "EMAIL",
      info: "minzly@kmeworld.com"
    },
    {
      icon: "fas fa-map-marker-alt", 
      title: "LOCATION",
      info: "Los Angeles, CA"
    },
    {
      icon: "fas fa-instagram",
      title: "SOCIAL", 
      info: "@kmeworld"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 uppercase tracking-wider">Contact</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 font-space text-lg uppercase tracking-widest">Get In Touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="font-bebas text-3xl md:text-4xl text-white mb-8 uppercase">Ready to Collaborate?</h3>
            <p className="text-gray-300 font-space text-lg leading-relaxed mb-8">
              Whether you're an artist looking for custom pieces, a brand seeking collaboration, 
              or a creative wanting to push boundaries, let's create something unorthodox together.
            </p>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <i className={`${method.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-bebas text-lg text-white uppercase tracking-wider">{method.title}</h4>
                    <p className="text-gray-400 font-space">{method.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase">
                Start a Project
              </button>
              <button 
                onClick={scrollToPortfolio}
                className="border border-white text-white px-8 py-3 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors uppercase"
              >
                View Collection
              </button>
            </div>
          </div>

          {/* Contact Information Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src={contactInfo} 
                alt="KME World Contact Information - Garments for the Unorthodox"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bebas text-2xl md:text-3xl text-white mb-4 uppercase">Current Focus</h3>
            <p className="text-gray-400 font-space leading-relaxed">
              Currently accepting commissions for custom pieces, celebrity styling projects, 
              and brand collaborations. Lead time varies by project scope and complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
