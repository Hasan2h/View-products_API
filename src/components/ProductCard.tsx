import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
          {product.discountPercentage}% OFF
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
          <span className="text-sm font-medium text-gray-500">{product.brand}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
            <span className="ml-2 text-sm line-through text-gray-500">${product.price}</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};