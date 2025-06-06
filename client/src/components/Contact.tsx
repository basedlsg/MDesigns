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
    <section id="contact" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-8">GET IN TOUCH</h2>
          <p className="text-gray-400 font-space text-lg mb-12 max-w-2xl mx-auto">
            Ready to create something unorthodox? Let's collaborate on your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-on-scroll">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${method.icon} text-electric text-xl`}></i>
              </div>
              <h3 className="font-bebas text-xl text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 font-space">{method.info}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-6 animate-on-scroll">
          <button className="bg-electric text-black px-8 py-4 font-bebas text-lg tracking-wider hover:bg-white transition-colors">
            START A PROJECT
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="border border-white text-white px-8 py-4 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            VIEW LOOKBOOK
          </button>
        </div>

        {/* Contact Information Image */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative max-w-2xl mx-auto">
            <img 
              src={contactInfo} 
              alt="KME World Contact Information - Garments for the Unorthodox"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
