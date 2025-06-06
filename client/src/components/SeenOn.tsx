import { useEffect, useRef } from "react";
import lanceyImage from "@assets/LANCEY FOUX FT. TEEZO TOUCHDOWN.png";
import teezoConcertImage from "@assets/teezo-touchdown-returns-as-special-guest-for-doja-cat-for-v0-1gobnfgm4zvc1.webp";
import cardiBImage from "@assets/gettyimages-2151690758-1024x1024.webp";

interface VideoLink {
  title: string;
  artist: string;
  description: string;
  url: string;
  thumbnail?: string;
}

const videoLinks: VideoLink[] = [
  {
    title: "LANCEY FOUX × TEEZO TOUCHDOWN",
    artist: "Lancey Foux ft. Teezo Touchdown",
    description: "Custom looks for music video collaboration",
    url: "https://www.youtube.com/watch?v=UXWGAydyOww",
    thumbnail: lanceyImage
  },
  {
    title: "JUICY J × MARSHMELLO",
    artist: "Juicy J x Marshmello",
    description: "Performance styling collaboration",
    url: "https://www.youtube.com/watch?v=uo4cRG1Qtw0"
  },
  {
    title: "COI LERAY × LIL DURK",
    artist: "Coi Leray x Lil Durk",
    description: "Custom wardrobe for music video",
    url: "https://www.youtube.com/watch?v=my2ZvqmPaco"
  },
  {
    title: "BILLYRACXX - FROM THE BLOCK",
    artist: "BillyRacxx",
    description: "London performance styling",
    url: "https://www.youtube.com/watch?v=dO8JwzEWFK0"
  },
  {
    title: "TIA CORINE GENIUS",
    artist: "Tia Corine",
    description: "2023 Genius interview styling",
    url: "https://www.youtube.com/watch?v=t_0DVOUucU0"
  },
  {
    title: "CITY MORGUE × COMPLEX × VICE",
    artist: "City Morgue",
    description: "Media collaboration styling",
    url: "https://www.youtube.com/watch?v=w-QwJ8a44ak"
  }
];

export default function SeenOn() {
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

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="seen-on" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4">SEEN ON</h2>
          <p className="text-gray-400 font-space text-lg">Celebrities and artists wearing KME World designs</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-on-scroll">
          {videoLinks.map((video, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
              onClick={() => openVideo(video.url)}
            >
              {video.thumbnail ? (
                <div 
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <i className="fas fa-play text-white text-xl ml-1"></i>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-music text-4xl text-gray-600 mb-4"></i>
                    <p className="text-gray-500 font-space">Video Content</p>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bebas text-xl text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 font-space text-sm">{video.description}</p>
                <div className="inline-block mt-3 text-electric hover:text-white transition-colors font-space text-sm">
                  WATCH VIDEO <i className="fas fa-external-link-alt ml-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Celebrity Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
          <div className="relative group overflow-hidden rounded-lg aspect-square bg-gray-900">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${teezoConcertImage})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-bebas text-sm">TEEZO TOUCHDOWN</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square bg-gray-900">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${cardiBImage})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-bebas text-sm">BAD GIRLS</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square bg-gray-900">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${lanceyImage})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-bebas text-sm">LANCEY FOUX</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square bg-gray-900">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <i className="fas fa-plus text-3xl text-gray-600"></i>
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white font-bebas text-sm">MORE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
