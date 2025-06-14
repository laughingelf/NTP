'use client';
import Link from 'next/link';
import { useProducts } from '../context/ProductContext';

export default function ProductsPage() {
  const { products, loading } = useProducts();

  return (
    <div className="p-6 max-w-6xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {loading && <p className="text-gray-500">Loading products...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products
          .filter(product => product.status === 'publish')
          .map(product => (
            <Link href={`/products/${product.id}`} key={product.id} className="h-full">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
                <img
                  src={product.images?.[0]?.src}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-black mb-2">{product.name}</h2>
                <div className="mt-auto">
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: product.price_html }}
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
