import React, { useState } from 'react';
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

interface TabSection {
  id: string;
  title: string;
  component: React.ReactNode;
}

export default function InformationPage() {
  const [activeTab, setActiveTab] = useState('about');
  const aboutSections: InfoSection[] = [
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
    },
  ];

  const tabs = [
    { id: 'about', title: 'ABOUT' },
    { id: 'contact', title: 'CONTACT' }, 
    { id: 'services', title: 'SERVICES' }
  ];

  const renderAboutSection = () => (
    <div className="space-y-0">
      {aboutSections.map((section, index) => (
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContactSection = () => (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-bebas text-4xl md:text-5xl text-white mb-8 uppercase">Contact Information</h2>
        <p className="font-space text-gray-400 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
          Ready to collaborate, order custom pieces, or feature KME WORLD? Get in touch with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <i className="fas fa-envelope text-3xl text-white mb-4"></i>
            <h3 className="font-bebas text-xl text-white mb-2 uppercase">Email</h3>
            <p className="font-space text-gray-400">minzly@kmeworld.com</p>
          </div>
          <div className="text-center">
            <i className="fab fa-instagram text-3xl text-white mb-4"></i>
            <h3 className="font-bebas text-xl text-white mb-2 uppercase">Instagram</h3>
            <p className="font-space text-gray-400">@kmeworld</p>
          </div>
          <div className="text-center">
            <i className="fas fa-map-marker-alt text-3xl text-white mb-4"></i>
            <h3 className="font-bebas text-xl text-white mb-2 uppercase">Location</h3>
            <p className="font-space text-gray-400">Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-8 uppercase">Our Services</h2>
          <p className="font-space text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            From custom styling to brand collaborations, KME WORLD offers comprehensive fashion services 
            for artists, brands, and visionaries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-user-tie text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Custom Styling</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              Personal styling services for artists, performers, and creative professionals.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-handshake text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Brand Collaborations</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              Strategic partnerships and collaborative collections with established brands.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-video text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Music Video Styling</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              Complete wardrobe styling for music videos, performances, and creative projects.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-tshirt text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Custom Pieces</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              One-of-a-kind garments designed and crafted specifically for individual clients.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-camera text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Editorial Styling</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              Fashion styling for magazine shoots, press features, and editorial content.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 text-center">
            <i className="fas fa-users text-4xl text-white mb-6"></i>
            <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Creative Consulting</h3>
            <p className="font-space text-gray-400 leading-relaxed">
              Fashion direction and creative consulting for artists and creative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4 uppercase tracking-wider">Information</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg text-gray-400 uppercase tracking-[0.2em]">
            About, Contact & Services
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-center">
          <div className="flex border-b border-gray-700">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-space text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-white bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'about' && renderAboutSection()}
        {activeTab === 'contact' && renderContactSection()}
        {activeTab === 'services' && renderServicesSection()}
      </div>

      {/* Press & Recognition - Only show on About tab */}
      {activeTab === 'about' && (
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
      )}
    </div>
  );
} 