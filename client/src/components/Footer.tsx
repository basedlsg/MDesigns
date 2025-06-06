import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <p className="text-white font-bebas text-2xl md:text-3xl uppercase tracking-wider mb-2">KME WORLD</p>
            <p className="text-gray-400 font-space text-sm uppercase tracking-widest">Garments for the Unorthodox</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            {/* TODO: Replace # with actual links and use React-Icons if available or install them */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTiktok className="text-xl" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 font-space text-sm">
              © 2024 KME WORLD. All rights reserved.
            </p>
            <p className="text-gray-600 font-space text-xs mt-2 uppercase tracking-widest">
              Los Angeles, California | minzly@kmeworld.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 