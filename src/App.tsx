import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { ProductGrid } from './components/ProductGrid';
import { getProducts } from './services/api';
import { Product } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">DummyShop</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-gray-600">Discover our amazing collection of products</p>
        </div>

        <ProductGrid 
          products={products}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;