import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kmeDesign1 from "@assets/KMEMISHKA1(FRONT).png";
import kmeDesign2 from "@assets/KMEMISHKA8(FRONT).png";
import kmeDesign3 from "@assets/KMEMISHKA9(FRONT).png";
import kmeDesign4 from "@assets/KMEMISHKA27(FRONT).png";
import mishkaLookbook from "@assets/Screen Shot 2024-02-05 at 11.27.19 AM.png";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  sizes?: string[];
  status: 'available' | 'sold-out' | 'coming-soon';
  description?: string;
  details?: string[];
  materials?: string;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products: Product[] = [
    {
      id: '1',
      name: 'MISHKA COLLABORATION HOODIE',
      category: 'hoodies',
      price: 280,
      image: kmeDesign1,
      images: [kmeDesign1, mishkaLookbook, kmeDesign2],
      sizes: ['S', 'M', 'L', 'XL'],
      status: 'available',
      description: 'Custom hoodie with vintage plaid suit jacket overlay. Part of the exclusive KME WORLD × MISHKA collaboration.',
      details: [
        'Heavyweight 350gsm cotton fleece',
        'Custom KME WORLD × MISHKA co-branded labels',
        'Vintage plaid suit jacket overlay',
        'Oversized fit with dropped shoulders',
        'Limited edition run of 100 pieces'
      ],
      materials: '80% Cotton, 20% Polyester'
    },
    {
      id: '2',
      name: 'EYEBALL GRAPHIC HOODIE',
      category: 'hoodies',
      price: 220,
      image: kmeDesign2,
      images: [kmeDesign2, kmeDesign3, kmeDesign4],
      sizes: ['S', 'M', 'L', 'XL'],
      status: 'available',
      description: 'Signature KME World statement hoodie featuring our iconic eyeball graphic.',
      details: [
        'Screen-printed eyeball graphic',
        'Premium heavyweight fleece',
        'KME WORLD signature fit',
        'Ribbed cuffs and hem'
      ],
      materials: '100% Cotton'
    },
    {
      id: '3',
      name: 'CROPPED COLOR-BLOCK HOODIE',
      category: 'hoodies',
      price: 195,
      image: kmeDesign3,
      sizes: ['XS', 'S', 'M', 'L'],
      status: 'sold-out',
      description: 'Oversized fit cropped hoodie with contrast color-blocked sleeves.'
    },
    {
      id: '4',
      name: 'ARTISTIC GRAPHIC TEE',
      category: 'tees',
      price: 95,
      image: kmeDesign4,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      status: 'available',
      description: 'Limited edition graphic tee featuring artistic character print with Japanese text.'
    },
    {
      id: '5',
      name: 'MISHKA PLAID JACKET',
      category: 'jackets',
      price: 450,
      image: kmeDesign1,
      sizes: ['S', 'M', 'L'],
      status: 'coming-soon',
      description: 'Deconstructed vintage plaid suit jacket with custom KME WORLD modifications.'
    },
    {
      id: '6',
      name: 'SIGNATURE LOGO TEE',
      category: 'tees',
      price: 75,
      image: kmeDesign2,
      sizes: ['S', 'M', 'L', 'XL'],
      status: 'available',
      description: 'Essential KME WORLD logo tee in premium cotton.'
    },
  ];

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'hoodies', name: 'HOODIES' },
    { id: 'tees', name: 'TEES' },
    { id: 'jackets', name: 'JACKETS' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sold-out':
        return <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 font-space text-xs uppercase">Sold Out</span>;
      case 'coming-soon':
        return <span className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 font-space text-xs uppercase">Coming Soon</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4 uppercase tracking-wider">Shop</h1>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="font-space text-lg text-gray-400 uppercase tracking-[0.2em]">
            Limited Edition Pieces
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 font-space text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-white text-black'
                  : 'border border-gray-600 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-900">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                {getStatusBadge(product.status)}
              </div>
              <div className="space-y-2">
                <h3 className="font-bebas text-xl text-white uppercase group-hover:text-gray-300 transition-colors">
                  {product.name}
                </h3>
                <p className="font-space text-gray-400 text-sm uppercase tracking-wider">
                  {product.category}
                </p>
                <p className="font-bebas text-2xl text-white">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            onClick={() => {
              setSelectedProduct(null);
              setSelectedImageIndex(0);
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen flex items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 max-w-7xl w-full relative">
                <button 
                  className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors z-10"
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedImageIndex(0);
                  }}
                >
                  ×
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Enhanced Image Gallery */}
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative aspect-[3/4] bg-black overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={selectedImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          src={selectedProduct.images ? selectedProduct.images[selectedImageIndex] : selectedProduct.image} 
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      {getStatusBadge(selectedProduct.status)}
                      
                      {/* Navigation Arrows */}
                      {selectedProduct.images && selectedProduct.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setSelectedImageIndex(prev => 
                              prev === 0 ? selectedProduct.images!.length - 1 : prev - 1
                            )}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          >
                            <i className="fas fa-chevron-left"></i>
                          </button>
                          <button
                            onClick={() => setSelectedImageIndex(prev => 
                              prev === selectedProduct.images!.length - 1 ? 0 : prev + 1
                            )}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          >
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                      <div className="flex gap-2 p-4 bg-black">
                        {selectedProduct.images.map((img, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`relative w-16 h-20 overflow-hidden border-2 transition-colors ${
                              selectedImageIndex === index 
                                ? 'border-white' 
                                : 'border-gray-700 hover:border-gray-500'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`${selectedProduct.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Product Info */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className="font-space text-gray-500 text-sm uppercase tracking-widest mb-2">
                        {selectedProduct.category}
                      </p>
                      <h2 className="font-bebas text-4xl md:text-5xl text-white mb-2 uppercase">
                        {selectedProduct.name}
                      </h2>
                      <p className="font-bebas text-3xl text-white mb-6">
                        ${selectedProduct.price}
                      </p>
                    </motion.div>
                    
                    {selectedProduct.description && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="font-space text-gray-300 leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </motion.div>
                    )}

                    {/* Product Details */}
                    {selectedProduct.details && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-3"
                      >
                        <h4 className="font-bebas text-lg text-white uppercase">Product Details</h4>
                        <ul className="space-y-1">
                          {selectedProduct.details.map((detail, index) => (
                            <li key={index} className="font-space text-sm text-gray-400">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Materials */}
                    {selectedProduct.materials && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="font-bebas text-lg text-white uppercase mb-2">Materials</h4>
                        <p className="font-space text-sm text-gray-400">{selectedProduct.materials}</p>
                      </motion.div>
                    )}

                    {/* Size Selection */}
                    {selectedProduct.sizes && selectedProduct.status === 'available' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="font-space text-sm text-gray-400 uppercase tracking-wider mb-4">
                          Select Size
                        </p>
                        <div className="flex gap-3">
                          {selectedProduct.sizes.map(size => (
                            <motion.button
                              key={size}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors font-space text-sm"
                            >
                              {size}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {selectedProduct.status === 'available' ? (
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-white text-black py-4 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase"
                        >
                          Add to Cart
                        </motion.button>
                      ) : selectedProduct.status === 'sold-out' ? (
                        <button className="w-full bg-gray-800 text-gray-500 py-4 font-bebas text-lg tracking-wider uppercase cursor-not-allowed" disabled>
                          Sold Out
                        </button>
                      ) : (
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full border border-white text-white py-4 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors uppercase"
                        >
                          Notify Me
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 