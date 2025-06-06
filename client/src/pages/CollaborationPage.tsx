import React from 'react';
import mishkaLookbook from "@assets/Screen Shot 2024-02-05 at 11.27.19 AM.png";
import shakeImage from "@assets/070 SHAKE X CRASH MAGAZINE.png";
import ddgImage from "@assets/DDG X UPROXX MAGAZINE.png";
import lanceyImage from "@assets/LANCEY FOUX FT. TEEZO TOUCHDOWN.png";
import shakePortrait from "@assets/070-Shake-Portrait-Gallery-2024-4.jpg";
import groupPhoto from "@assets/Screen Shot 2024-01-09 at 9.25.21 PM.png";

interface Collaboration {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link?: string;
}

export default function CollaborationPage() {
  const collaborations: Collaboration[] = [
    {
      id: '1',
      title: 'MISHKA × KME WORLD',
      subtitle: '2023 COLLECTION',
      image: mishkaLookbook,
      description: 'Underground culture meets futuristic streetwear in this limited-edition collaboration.',
    },
    {
      id: '2',
      title: '070 SHAKE',
      subtitle: 'CRACK MAGAZINE',
      image: shakeImage,
      description: 'Editorial styling and custom pieces for the boundary-pushing artist\'s magazine feature.',
    },
    {
      id: '3',
      title: 'DDG',
      subtitle: 'UPROXX MAGAZINE',
      image: ddgImage,
      description: 'Cover story wardrobe and creative direction for the multi-platinum artist.',
    },
    {
      id: '4',
      title: 'LANCEY FOUX',
      subtitle: 'FT. TEEZO TOUCHDOWN',
      image: lanceyImage,
      description: 'Music video styling bringing together two visionary artists in fashion-forward looks.',
    },
    {
      id: '5',
      title: '070 SHAKE',
      subtitle: 'PORTRAIT GALLERY',
      image: shakePortrait,
      description: 'Intimate portrait session showcasing KME WORLD\'s approach to artist styling.',
    },
    {
      id: '6',
      title: 'THE COMMUNITY',
      subtitle: 'COLLECTIVE PROJECTS',
      image: groupPhoto,
      description: 'Ongoing collaborations with artists, creatives, and tastemakers wearing KME WORLD.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4 uppercase tracking-wider">Collaborations</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg text-gray-400 uppercase tracking-[0.2em] max-w-3xl mx-auto">
            Partnerships with visionary artists, magazines, and cultural icons
          </p>
        </div>
      </div>

      {/* Collaborations Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-20">
          {collaborations.map((collab, index) => (
            <div key={collab.id} className="group cursor-pointer">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-2/3">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img 
                      src={collab.image} 
                      alt={collab.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                  <p className="font-space text-xs text-gray-500 uppercase tracking-[0.3em] mb-2">{collab.subtitle}</p>
                  <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4 uppercase">{collab.title}</h2>
                  <p className="font-space text-gray-400 mb-6 leading-relaxed">{collab.description}</p>
                  <button className="border border-white text-white px-6 py-3 font-space text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="font-bebas text-4xl md:text-5xl text-white mb-6 uppercase">Let's Create Together</h3>
          <p className="font-space text-gray-400 mb-8 text-lg leading-relaxed">
            KME WORLD is always open to new partnerships and creative collaborations. 
            Whether you're an artist, brand, or creative visionary, let's push boundaries together.
          </p>
          <button className="bg-white text-black px-8 py-4 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase">
            Start a Collaboration
          </button>
        </div>
      </div>
    </div>
  );
} 