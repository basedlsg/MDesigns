import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SeenOn from "@/components/SeenOn";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <SeenOn />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-white font-bebas text-2xl md:text-3xl uppercase tracking-wider mb-2">KME WORLD</p>
              <p className="text-gray-400 font-space text-sm uppercase tracking-widest">Garments for the Unorthodox</p>
            </div>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
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
    </div>
  );
}
