import React, { useState } from 'react';
import contactInfo from "@assets/contact information.png";
import kmeLogoBlack from "@assets/KME WORLD - Logo (twolines) - black - 1.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4 uppercase tracking-wider">Contact</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg text-gray-400 uppercase tracking-[0.2em]">
            Get in Touch
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info & Image */}
          <div className="space-y-8">
            <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
              <img 
                src={contactInfo} 
                alt="KME WORLD Contact Information"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Connect With Us</h3>
                <div className="space-y-3">
                  <a href="https://www.kmeworld.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <i className="fas fa-globe w-5"></i>
                    <span className="font-space">www.kmeworld.com</span>
                  </a>
                  <a href="https://instagram.com/kmeworld" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <i className="fab fa-instagram w-5"></i>
                    <span className="font-space">@kmeworld</span>
                  </a>
                  <a href="mailto:minzly@kmeworld.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <i className="fas fa-envelope w-5"></i>
                    <span className="font-space">minzly@kmeworld.com</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Business Inquiries</h3>
                <p className="font-space text-gray-400 leading-relaxed">
                  For collaborations, custom orders, wholesale inquiries, or press features, 
                  please reach out through the contact form or email us directly.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl text-white mb-4 uppercase">Location</h3>
                <p className="font-space text-gray-400 leading-relaxed">
                  Based in Los Angeles, CA<br />
                  Shipping worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-space text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-space text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-space text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-space text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase"
              >
                Send Message
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gray-900">
              <h4 className="font-bebas text-xl text-white mb-3 uppercase">Response Time</h4>
              <p className="font-space text-sm text-gray-400 leading-relaxed">
                We typically respond to all inquiries within 24-48 hours. 
                For urgent matters, please mention it in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="font-bebas text-3xl text-white mb-8 uppercase">Follow Our Journey</h3>
          <div className="flex items-center justify-center gap-8">
            <a href="https://instagram.com/kmeworld" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://twitter.com/kmeworld" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://www.tiktok.com/@kmeworld" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-tiktok text-3xl"></i>
            </a>
            <a href="https://www.youtube.com/@kmeworld" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-youtube text-3xl"></i>
            </a>
          </div>
          <p className="font-space text-gray-500 text-sm uppercase tracking-widest mt-6">
            @kmeworld
          </p>
        </div>
      </div>
    </div>
  );
} 