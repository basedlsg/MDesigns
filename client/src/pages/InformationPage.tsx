import React from 'react';
import kmeLogoWhite from "@assets/KME WORLD - Logo (twolines) - white box.png";
import mishkaLookbook from "@assets/Screen Shot 2024-02-05 at 11.27.19 AM.png";
import ringLogo from "@assets/ring logo.png";
import groupPhoto from "@assets/Screen Shot 2024-01-09 at 9.25.21 PM.png";

interface InfoSection {
  id: string;
  title: string;
  image: string;
  content: string[];
  cta?: {
    text: string;
    link: string;
  };
}

export default function InformationPage() {
  const sections: InfoSection[] = [
    {
      id: '1',
      title: 'ABOUT KME WORLD',
      image: kmeLogoWhite,
      content: [
        'KME WORLD is a progressive fashion collective that pushes the boundaries between streetwear and high fashion. Founded on the principles of unorthodox design and cultural relevance, we create pieces that tell stories.',
        'Our vision extends beyond clothing – we\'re building a movement that celebrates individuality, artistic expression, and the intersection of fashion with music, art, and contemporary culture.',
      ],
    },
    {
      id: '2',
      title: 'OUR PHILOSOPHY',
      image: mishkaLookbook,
      content: [
        'We believe fashion should be a form of self-expression, not conformity. Every piece we create is designed to empower the wearer, enabling them to make bold statements and challenge conventional style norms.',
        'Collaboration is at the heart of what we do. By partnering with artists, musicians, and creatives, we ensure our designs remain at the forefront of cultural movements.',
      ],
    },
    {
      id: '3',
      title: 'THE CRAFT',
      image: ringLogo,
      content: [
        'Quality is non-negotiable. Each KME WORLD piece is crafted with meticulous attention to detail, using premium materials and innovative construction techniques.',
        'From initial concept to final product, we maintain complete creative control, ensuring every item meets our exacting standards for both aesthetics and durability.',
      ],
    },
    {
      id: '4',
      title: 'COMMUNITY & CULTURE',
      image: groupPhoto,
      content: [
        'KME WORLD is more than a brand – it\'s a community of forward-thinking individuals who aren\'t afraid to stand out. Our customers are artists, musicians, entrepreneurs, and creatives who share our vision for fashion as a form of artistic expression.',
        'Through exclusive events, collaborations, and limited releases, we cultivate a culture that celebrates creativity and pushes fashion forward.',
      ],
      cta: {
        text: 'Join Our Community',
        link: '/contact',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4 uppercase tracking-wider">Information</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg text-gray-400 uppercase tracking-[0.2em]">
            The Story, Philosophy & Vision
          </p>
        </div>
      </div>

      {/* Information Sections */}
      <div className="space-y-0">
        {sections.map((section, index) => (
          <div key={section.id} className={`${index % 2 === 0 ? 'bg-black' : 'bg-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-bebas text-4xl md:text-5xl text-white mb-8 uppercase">{section.title}</h2>
                  <div className="space-y-4 mb-8">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="font-space text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.cta && (
                    <button className="border border-white text-white px-6 py-3 font-space text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                      {section.cta.text}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Press & Recognition */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-bebas text-4xl md:text-5xl text-white mb-12 text-center uppercase">Press & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <p className="font-bebas text-2xl text-gray-500 uppercase">Crack Magazine</p>
            </div>
            <div className="text-center">
              <p className="font-bebas text-2xl text-gray-500 uppercase">UPROXX</p>
            </div>
            <div className="text-center">
              <p className="font-bebas text-2xl text-gray-500 uppercase">Complex</p>
            </div>
            <div className="text-center">
              <p className="font-bebas text-2xl text-gray-500 uppercase">VICE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 