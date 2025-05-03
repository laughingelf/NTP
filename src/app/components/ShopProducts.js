'use client';
import { useEffect, useState } from 'react';


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/fetchProducts')
      .then(res => {
        if (!res.ok) {
            console.log(error)
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {loading && <p className="text-gray-500">Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.images?.[0]?.src}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4 text-black"
            />
            <h2 className="text-xl font-semibold text-black">{product.name}</h2>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: product.price_html }} />
          </div>
        ))}
      </div>
    </div>
  );
}
