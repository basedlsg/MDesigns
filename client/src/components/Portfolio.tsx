import { useEffect, useRef } from "react";
import mishkaLookbook from "@assets/Screen Shot 2024-02-05 at 11.27.19 AM.png";
import kmeDesign1 from "@assets/KMEMISHKA1(FRONT).png";
import kmeDesign2 from "@assets/KMEMISHKA8(FRONT).png";
import kmeDesign3 from "@assets/KMEMISHKA9(FRONT).png";
import kmeDesign4 from "@assets/KMEMISHKA27(FRONT).png";

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

  const designs = [
    {
      image: kmeDesign1,
      title: "MISHKA COLLABORATION",
      description: "Custom hoodie with vintage plaid suit jacket overlay",
      category: "Unisex Collection"
    },
    {
      image: kmeDesign2,
      title: "EYEBALL GRAPHIC",
      description: "Signature KME World statement hoodie design",
      category: "Signature Series"
    },
    {
      image: kmeDesign3,
      title: "CROPPED HOODIE",
      description: "Oversized fit with contrast color-blocked sleeves",
      category: "Streetwear Essentials"
    },
    {
      image: kmeDesign4,
      title: "GRAPHIC TEE",
      description: "Artistic character print with Japanese text",
      category: "Limited Edition"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 uppercase tracking-wider">Collection</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 font-space text-lg uppercase tracking-widest">KME World × MISHKA 2023</p>
        </div>

        {/* Featured Lookbook */}
        <div className="mb-20 animate-on-scroll">
          <div className="relative max-w-6xl mx-auto">
            <img 
              src={mishkaLookbook}
              alt="KME World x MISHKA 2023 Collection Lookbook"
              className="w-full h-auto"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 p-6">
              <h3 className="font-bebas text-2xl md:text-4xl text-white mb-2 uppercase">Complete Lookbook</h3>
              <p className="text-gray-300 font-space">Underground culture meets futuristic streetwear</p>
            </div>
          </div>
        </div>

        {/* Individual Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {designs.map((design, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                <img 
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 font-space text-xs uppercase tracking-widest">{design.category}</p>
                <h3 className="font-bebas text-xl text-white uppercase">{design.title}</h3>
                <p className="text-gray-400 font-space text-sm">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Info */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bebas text-3xl md:text-4xl text-white mb-6 uppercase">About the Collection</h3>
            <p className="text-gray-400 font-space text-lg leading-relaxed mb-8">
              A collision of underground culture and futuristic streetwear, the KMEWORLD x MISHKA 2023 Collection 
              marks a bold collaboration between two boundary-pushing brands. This limited-edition drop features 
              original graphics, unconventional silhouettes, and statement colorways that pay homage to both brands' 
              roots in music, art, and counterculture.
            </p>
            <button className="border border-white text-white px-8 py-3 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors uppercase">
              View Full Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
