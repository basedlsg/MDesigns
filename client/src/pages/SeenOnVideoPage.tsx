import React, { useState, useRef, useEffect } from 'react';

interface VideoItem {
  id: string;
  title: string;
  artist: string;
  videoUrl: string;
  description: string;
}

export default function SeenOnVideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'LANCEY FOUX × TEEZO TOUCHDOWN',
      artist: 'Lancey Foux ft. Teezo Touchdown',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL - replace with actual
      description: 'Custom looks for music video collaboration',
    },
    {
      id: '2',
      title: 'JUICY J × MARSHMELLO',
      artist: 'Juicy J x Marshmello',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL - replace with actual
      description: 'Performance styling collaboration',
    },
    {
      id: '3',
      title: 'COI LERAY × LIL DURK',
      artist: 'Coi Leray x Lil Durk',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL - replace with actual
      description: 'Custom wardrobe for music video',
    },
    {
      id: '4',
      title: 'BILLYRACXX - FROM THE BLOCK',
      artist: 'BillyRacxx',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL - replace with actual
      description: 'London performance styling',
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideo]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    const nextVideo = (currentVideo + 1) % videos.length;
    setCurrentVideo(nextVideo);
  };

  const selectVideo = (index: number) => {
    setCurrentVideo(index);
    setShowPlaylist(false);
  };

  const navigateVideo = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    } else {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Full Screen Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videos[currentVideo].videoUrl}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnd}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navigation Controls */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/70 to-transparent">
          <div className="flex items-center justify-between">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              <i className="fas fa-arrow-left text-2xl"></i>
            </a>
            <h1 className="font-bebas text-3xl text-white uppercase tracking-wider">KME WORLD REELS</h1>
            <button 
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-list text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Center Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <i className={`fas fa-${isPlaying ? 'pause' : 'play'} text-white text-2xl ${!isPlaying ? 'ml-1' : ''}`}></i>
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={() => navigateVideo('prev')}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <i className="fas fa-chevron-left text-white"></i>
        </button>
        <button
          onClick={() => navigateVideo('next')}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <i className="fas fa-chevron-right text-white"></i>
        </button>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="max-w-4xl">
            <p className="font-space text-sm text-gray-300 uppercase tracking-widest mb-2">
              {currentVideo + 1} / {videos.length}
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-2 uppercase">
              {videos[currentVideo].title}
            </h2>
            <p className="font-space text-gray-300 mb-4">
              {videos[currentVideo].description}
            </p>
            <button className="border border-white text-white px-6 py-2 font-space text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
              View Project Details
            </button>
          </div>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <div className={`absolute right-0 top-0 bottom-0 w-96 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ${showPlaylist ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bebas text-2xl text-white uppercase">Video Playlist</h3>
              <button 
                onClick={() => setShowPlaylist(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => selectVideo(index)}
                  className={`p-4 cursor-pointer transition-colors ${
                    index === currentVideo ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-play text-white text-sm"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bebas text-lg text-white uppercase">{video.title}</h4>
                      <p className="font-space text-sm text-gray-400">{video.artist}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 