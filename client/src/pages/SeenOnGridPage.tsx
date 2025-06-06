import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Tilt from 'react-parallax-tilt';
import SEO from '@/components/SEO';
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
import heroVideo from "@assets/hero-video.mp4";

gsap.registerPlugin(ScrollTrigger);

interface GridItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
  videoUrl?: string;
  externalLink?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export default function SeenOnGridPage() {
  const [items, setItems] = useState<GridItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef<IntersectionObserver>();
  const lastItemRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // All available items (in a real app, this would come from an API)
  const allItems: GridItem[] = [
    { id: '1', type: 'image', src: mishkaLookbook, title: 'KME WORLD × MISHKA', subtitle: '2023 LOOKBOOK', category: 'Collection', size: 'xlarge' },
    { id: '2', type: 'image', src: shakeImage, title: '070 SHAKE', subtitle: 'CRACK MAGAZINE', category: 'Editorial', size: 'large', externalLink: 'https://crackmagazine.net/article/profiles/070-shake-feature/' },
    { id: '3', type: 'image', src: kmeDesign1, title: 'MISHKA COLLAB', subtitle: 'Custom Hoodie', category: 'Product', size: 'medium' },
    { id: '4', type: 'image', src: ddgImage, title: 'DDG', subtitle: 'UPROXX MAGAZINE', category: 'Editorial', size: 'large', externalLink: 'https://uproxx.com/music/ddg-its-not-me-its-you-interview/' },
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

  // Advanced animations setup
  useEffect(() => {
    // Split text animation for hero title
    if (heroTitleRef.current) {
      const split = new SplitType(heroTitleRef.current, { types: 'chars' });
      
      gsap.fromTo(split.chars, 
        { 
          opacity: 0, 
          y: 50, 
          rotateX: -90,
          transformOrigin: 'bottom center'
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          delay: 1,
          ease: "back.out(1.7)"
        }
      );
    }

    // Mouse move tracking for magnetic effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animations for grid items
    gsap.fromTo('.grid-item', 
      { 
        opacity: 0, 
        y: 60,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.grid-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        ease: "easeOut"
      }
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
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
    } else if (item.externalLink) {
      window.open(item.externalLink, '_blank');
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

  // Function to scroll to the collection grid
  const handleExploreCollectionClick = () => {
    gridSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO 
        title="KME WORLD - Elevated Editorial Fashion"
        description="Experience KME WORLD's boundary-pushing streetwear designs. Custom pieces worn by 070 Shake, DDG, and other visionary artists. Fashion for the unorthodox."
        keywords="KME WORLD, streetwear, editorial fashion, 070 Shake, DDG, custom clothing, avant-garde, designer fashion, celebrity styling"
        url="https://kmeworld.com"
      />
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black"
      >
      {/* Stunning Video Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div 
          style={{ scale: videoScale }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.3) contrast(1.2) saturate(0.8)',
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          
          {/* Video Overlays for Style */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
          
          {/* Film Grain Texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               }}></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 text-center px-6"
        >
          <h1 
            ref={heroTitleRef}
            className="font-bebas text-7xl md:text-9xl lg:text-[12rem] text-white mb-6 tracking-wider glitch-text"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.1)',
              perspective: '1000px',
            }}
          >
            KME WORLD
          </h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2, ease: "circOut" }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="space-y-4"
          >
            <p className="font-space text-lg md:text-2xl text-gray-200 uppercase tracking-[0.4em] mb-4">
              Elevated Editorial Fashion
            </p>
            <p className="font-space text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Where unorthodox design meets cultural relevance. 
              Worn by visionaries, created for the fearless.
            </p>
          </motion.div>

          {/* Interactive CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 border border-white/50 text-white font-space text-sm uppercase tracking-[0.2em] backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-500 group"
            onClick={handleExploreCollectionClick}
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center relative backdrop-blur-sm"
          >
            <motion.div 
              animate={{ y: [2, 12, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>

        {/* Floating Elements for Atmosphere */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -20, -40],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Stunning Grid Section */}
      <div ref={gridSectionRef} className="max-w-[1600px] mx-auto px-4 md:px-6 py-20 grid-container">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.06
              }
            }
          }}
        >
          {items.map((item, index) => (
            <Tilt
              key={item.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
              className={`${getGridClass(item.size, index)} grid-item`}
            >
              <motion.div
                ref={index === items.length - 1 ? lastItemRef : null}
                onClick={() => handleItemClick(item)}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative w-full h-full bg-black overflow-hidden rounded-lg group cursor-pointer"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* Image with advanced effects */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Multiple overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                       style={{
                         background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                       }}></div>
                </div>
                
                {/* Enhanced Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-gray-400 font-space text-xs uppercase tracking-[0.2em] mb-2 opacity-80">{item.category}</p>
                    <h3 className="font-bebas text-xl md:text-2xl text-white uppercase mb-2 glitch-hover">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-gray-300 font-space text-sm opacity-90">{item.subtitle}</p>
                    )}
                    
                    {/* Interactive indicator */}
                    <motion.div 
                      className="mt-3 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-8 h-px bg-white"></div>
                      <span className="font-space text-xs text-white uppercase tracking-wider">View</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced Video Play Icon */}
                {item.type === 'video' && (
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 relative">
                      <motion.i 
                        className="fas fa-play text-white text-2xl ml-1"
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
                    </div>
                  </motion.div>
                )}

                {/* Magnetic corner indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.5, backgroundColor: "#ffffff" }}
                />
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Stunning Loading Indicator */}
        {loading && (
          <motion.div 
            className="flex justify-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative">
              {/* Main spinner */}
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              
              {/* Outer ring */}
              <div className="absolute inset-0 w-12 h-12 border border-white/10 rounded-full animate-pulse"></div>
              
              {/* Inner dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
              
              {/* Loading text */}
              <p className="font-space text-xs text-gray-400 uppercase tracking-[0.3em] mt-4 text-center">Loading</p>
            </div>
          </motion.div>
        )}

        {/* Elegant End Message */}
        {!hasMore && items.length > 0 && (
          <motion.div 
            className="text-center py-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6"></div>
            <p className="font-space text-gray-500 uppercase tracking-[0.3em] text-sm">End of Collection</p>
            <p className="font-space text-gray-700 text-xs mt-2 tracking-wider">More coming soon</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && selectedItem.type === 'image' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[90vh]"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      </motion.div>
    </>
  );
} 