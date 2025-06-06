import React, { useState } from 'react';
import kmeDesign1 from "@assets/KMEMISHKA1(FRONT).png";
import kmeDesign2 from "@assets/KMEMISHKA8(FRONT).png";
import kmeDesign3 from "@assets/KMEMISHKA9(FRONT).png";
import kmeDesign4 from "@assets/KMEMISHKA27(FRONT).png";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  sizes?: string[];
  status: 'available' | 'sold-out' | 'coming-soon';
  description?: string;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'MISHKA COLLABORATION HOODIE',
      category: 'hoodies',
      price: 280,
      image: kmeDesign1,
      sizes: ['S', 'M', 'L', 'XL'],
      status: 'available',
      description: 'Custom hoodie with vintage plaid suit jacket overlay. Part of the exclusive KME WORLD × MISHKA collaboration.'
    },
    {
      id: '2',
      name: 'EYEBALL GRAPHIC HOODIE',
      category: 'hoodies',
      price: 220,
      image: kmeDesign2,
      sizes: ['S', 'M', 'L', 'XL'],
      status: 'available',
      description: 'Signature KME World statement hoodie featuring our iconic eyeball graphic.'
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="min-h-screen flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 max-w-6xl w-full">
              <button 
                className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Product Image */}
                <div className="relative aspect-[3/4] bg-black">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {getStatusBadge(selectedProduct.status)}
                </div>

                {/* Product Info */}
                <div className="p-8 lg:p-12">
                  <p className="font-space text-gray-500 text-sm uppercase tracking-widest mb-4">
                    {selectedProduct.category}
                  </p>
                  <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4 uppercase">
                    {selectedProduct.name}
                  </h2>
                  <p className="font-bebas text-3xl text-white mb-8">
                    ${selectedProduct.price}
                  </p>
                  
                  {selectedProduct.description && (
                    <p className="font-space text-gray-300 mb-8 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  )}

                  {/* Size Selection */}
                  {selectedProduct.sizes && selectedProduct.status === 'available' && (
                    <div className="mb-8">
                      <p className="font-space text-sm text-gray-400 uppercase tracking-wider mb-4">
                        Select Size
                      </p>
                      <div className="flex gap-3">
                        {selectedProduct.sizes.map(size => (
                          <button
                            key={size}
                            className="w-12 h-12 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors font-space text-sm"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  {selectedProduct.status === 'available' ? (
                    <button className="w-full bg-white text-black py-4 font-bebas text-lg tracking-wider hover:bg-gray-200 transition-colors uppercase">
                      Add to Cart
                    </button>
                  ) : selectedProduct.status === 'sold-out' ? (
                    <button className="w-full bg-gray-800 text-gray-500 py-4 font-bebas text-lg tracking-wider uppercase cursor-not-allowed" disabled>
                      Sold Out
                    </button>
                  ) : (
                    <button className="w-full border border-white text-white py-4 font-bebas text-lg tracking-wider hover:bg-white hover:text-black transition-colors uppercase">
                      Notify Me
                    </button>
                  )}

                  {/* Additional Info */}
                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="space-y-2 text-sm">
                      <p className="font-space text-gray-400">
                        • Premium quality materials
                      </p>
                      <p className="font-space text-gray-400">
                        • Limited edition release
                      </p>
                      <p className="font-space text-gray-400">
                        • Ships worldwide within 5-7 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 