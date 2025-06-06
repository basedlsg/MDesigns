import { useEffect, useRef } from "react";
import shakeImage from "@assets/070 SHAKE X CRASH MAGAZINE.png";
import ddgImage from "@assets/DDG X UPROXX MAGAZINE.png";
import groupPhoto from "@assets/Screen Shot 2024-01-09 at 9.25.21 PM.png";
import ddgFeature from "@assets/IMG_0648.jpg";
import cardiBGrammy from "@assets/IMG_0647.jpg";
import performanceShot from "@assets/IMG_0649 (1).jpg";

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
    url: "https://www.youtube.com/watch?v=UXWGAydyOww"
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
    <section id="seen-on" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 uppercase tracking-wider">Collaborations</h2>
          <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 font-space text-lg uppercase tracking-widest">Artists & Magazine Features</p>
        </div>

        {/* Magazine Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-on-scroll">
          <div className="group">
            <div className="relative overflow-hidden aspect-[4/3] mb-4">
              <img 
                src={shakeImage}
                alt="070 Shake x Crack Magazine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 font-space text-xs uppercase tracking-widest">Magazine Feature</p>
              <h3 className="font-bebas text-2xl text-white uppercase">070 SHAKE × CRACK MAGAZINE</h3>
              <p className="text-gray-400 font-space">Editorial styling and custom pieces</p>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden aspect-[4/3] mb-4">
              <img 
                src={ddgImage}
                alt="DDG x UPROXX Magazine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 font-space text-xs uppercase tracking-widest">Magazine Cover</p>
              <h3 className="font-bebas text-2xl text-white uppercase">DDG × UPROXX MAGAZINE</h3>
              <p className="text-gray-400 font-space">Cover story styling and wardrobe</p>
            </div>
          </div>
        </div>

        {/* Celebrity Moments */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="font-bebas text-3xl md:text-4xl text-white mb-8 text-center uppercase">Celebrity Moments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <div className="relative overflow-hidden aspect-square mb-4">
                <img 
                  src={ddgFeature}
                  alt="DDG wearing KME World custom piece"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <p className="text-white font-bebas text-lg uppercase text-center">DDG</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden aspect-square mb-4">
                <img 
                  src={cardiBGrammy}
                  alt="Grammy House event styling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <p className="text-white font-bebas text-lg uppercase text-center">Grammy House</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden aspect-square mb-4">
                <img 
                  src={performanceShot}
                  alt="Performance styling moment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <p className="text-white font-bebas text-lg uppercase text-center">Live Performance</p>
            </div>
          </div>
        </div>

        {/* Video Links */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="font-bebas text-3xl md:text-4xl text-white mb-8 text-center uppercase">Video Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoLinks.map((video, index) => (
              <div 
                key={index}
                className="group bg-gray-800 p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                onClick={() => openVideo(video.url)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-play text-white text-lg"></i>
                  </div>
                  <i className="fas fa-external-link-alt text-gray-400 group-hover:text-white transition-colors"></i>
                </div>
                <h4 className="font-bebas text-lg text-white mb-2 uppercase">{video.title}</h4>
                <p className="text-gray-400 font-space text-sm">{video.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Photo */}
        <div className="animate-on-scroll">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={groupPhoto}
              alt="KME World community and collaborators"
              className="w-full h-auto"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 p-6">
              <h3 className="font-bebas text-2xl md:text-3xl text-white mb-2 uppercase">The Community</h3>
              <p className="text-gray-300 font-space">Artists, creatives, and collaborators wearing KME World</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
