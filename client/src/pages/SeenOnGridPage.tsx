import React, { useState, useEffect, useCallback, useRef } from 'react';
import mishkaLookbook from "@assets/Screen Shot 2024-02-05 at 11.27.19 AM.png";
import kmeDesign1 from "@assets/KMEMISHKA1(FRONT).png";
import kmeDesign2 from "@assets/KMEMISHKA8(FRONT).png";
import kmeDesign3 from "@assets/KMEMISHKA9(FRONT).png";
import kmeDesign4 from "@assets/KMEMISHKA27(FRONT).png";
import shakeImage from "@assets/070 SHAKE X CRASH MAGAZINE.png";
import ddgImage from "@assets/DDG X UPROXX MAGAZINE.png";
import groupPhoto from "@assets/Screen Shot 2024-01-09 at 9.25.21 PM.png";
import ddgFeature from "@assets/IMG_0648.jpg";
import cardiBGrammy from "@assets/IMG_0647.jpg";
import performanceShot from "@assets/IMG_0649 (1).jpg";
import lanceyImage from "@assets/LANCEY FOUX FT. TEEZO TOUCHDOWN.png";
import shakePortrait from "@assets/070-Shake-Portrait-Gallery-2024-4.jpg";
import teezoImage from "@assets/teezo-touchdown-returns-as-special-guest-for-doja-cat-for-v0-1gobnfgm4zvc1.webp";

interface GridItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
  videoUrl?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export default function SeenOnGridPage() {
  const [items, setItems] = useState<GridItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
  const observerRef = useRef<IntersectionObserver>();
  const lastItemRef = useRef<HTMLDivElement>(null);

  // All available items (in a real app, this would come from an API)
  const allItems: GridItem[] = [
    { id: '1', type: 'image', src: mishkaLookbook, title: 'KME WORLD × MISHKA', subtitle: '2023 LOOKBOOK', category: 'Collection', size: 'xlarge' },
    { id: '2', type: 'image', src: shakeImage, title: '070 SHAKE', subtitle: 'CRACK MAGAZINE', category: 'Editorial', size: 'large' },
    { id: '3', type: 'image', src: kmeDesign1, title: 'MISHKA COLLAB', subtitle: 'Custom Hoodie', category: 'Product', size: 'medium' },
    { id: '4', type: 'image', src: ddgImage, title: 'DDG', subtitle: 'UPROXX MAGAZINE', category: 'Editorial', size: 'large' },
    { id: '5', type: 'image', src: kmeDesign2, title: 'EYEBALL GRAPHIC', subtitle: 'Signature Series', category: 'Product', size: 'medium' },
    { id: '6', type: 'video', src: lanceyImage, title: 'LANCEY FOUX', subtitle: 'FT. TEEZO TOUCHDOWN', category: 'Music Video', videoUrl: 'https://www.youtube.com/watch?v=UXWGAydyOww', size: 'large' },
    { id: '7', type: 'image', src: ddgFeature, title: 'DDG', subtitle: 'Custom Piece', category: 'Celebrity', size: 'small' },
    { id: '8', type: 'image', src: kmeDesign3, title: 'CROPPED HOODIE', subtitle: 'Streetwear', category: 'Product', size: 'medium' },
    { id: '9', type: 'image', src: cardiBGrammy, title: 'GRAMMY HOUSE', subtitle: '2024 Event', category: 'Event', size: 'medium' },
    { id: '10', type: 'image', src: kmeDesign4, title: 'GRAPHIC TEE', subtitle: 'Limited Edition', category: 'Product', size: 'medium' },
    { id: '11', type: 'image', src: performanceShot, title: 'LIVE PERFORMANCE', subtitle: 'Tour Styling', category: 'Performance', size: 'medium' },
    { id: '12', type: 'image', src: groupPhoto, title: 'THE COMMUNITY', subtitle: 'Artists & Creatives', category: 'Behind the Scenes', size: 'xlarge' },
    { id: '13', type: 'image', src: shakePortrait, title: '070 SHAKE', subtitle: 'Portrait Session', category: 'Editorial', size: 'large' },
    { id: '14', type: 'image', src: teezoImage, title: 'TEEZO TOUCHDOWN', subtitle: 'Doja Cat Tour', category: 'Performance', size: 'medium' },
  ];

  const itemsPerPage = 6;

  // Load more items
  const loadMoreItems = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newItems = allItems.slice(startIndex, endIndex);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
      }
      setLoading(false);
    }, 500);
  }, [page, loading, hasMore]);

  // Initial load
  useEffect(() => {
    loadMoreItems();
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (loading) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreItems();
      }
    });

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loading, hasMore, loadMoreItems]);

  const handleItemClick = (item: GridItem) => {
    if (item.type === 'video' && item.videoUrl) {
      window.open(item.videoUrl, '_blank');
    } else {
      setSelectedItem(item);
    }
  };

  const getGridClass = (size?: string, index?: number) => {
    const baseClass = 'relative overflow-hidden cursor-pointer group';
    
    // Create a varied grid pattern
    if (size === 'xlarge') return `${baseClass} col-span-2 md:col-span-3 lg:col-span-4 row-span-2`;
    if (size === 'large') return `${baseClass} col-span-2 row-span-2`;
    if (size === 'medium') return `${baseClass} col-span-1 row-span-1`;
    if (size === 'small') return `${baseClass} col-span-1 row-span-1`;
    
    // Default pattern based on index
    if (index !== undefined) {
      if (index % 7 === 0) return `${baseClass} col-span-2 row-span-2`;
      if (index % 5 === 0) return `${baseClass} col-span-2 row-span-1`;
    }
    
    return `${baseClass} col-span-1 row-span-1`;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={mishkaLookbook} 
            alt="KME WORLD" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-bebas text-7xl md:text-9xl text-white mb-4 tracking-wider animate-fade-in">KME WORLD</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg md:text-xl text-gray-300 uppercase tracking-[0.3em]">Elevated Editorial Fashion</p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={index === items.length - 1 ? lastItemRef : null}
              className={getGridClass(item.size, index)}
              onClick={() => handleItemClick(item)}
            >
              <div className="relative w-full h-full bg-gray-900">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-400 font-space text-xs uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="font-bebas text-xl md:text-2xl text-white uppercase">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-gray-300 font-space text-sm">{item.subtitle}</p>
                  )}
                </div>

                {/* Video Play Icon */}
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <i className="fas fa-play text-white text-xl ml-1"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* End Message */}
        {!hasMore && items.length > 0 && (
          <div className="text-center py-20">
            <p className="font-space text-gray-500 uppercase tracking-widest">End of Collection</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && selectedItem.type === 'image' && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img 
              src={selectedItem.src} 
              alt={selectedItem.title}
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-gray-400 font-space text-xs uppercase tracking-widest mb-2">{selectedItem.category}</p>
              <h3 className="font-bebas text-3xl text-white uppercase">{selectedItem.title}</h3>
              {selectedItem.subtitle && (
                <p className="text-gray-300 font-space">{selectedItem.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
} 