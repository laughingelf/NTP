'use client'

import Layout from '../../components/Layout'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCart } from '@/app/context/CartContext'
import Link from 'next/link'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1)



  useEffect(() => {
    if (!id) return

    fetch(`/.netlify/functions/fetchProductById?id=${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch product')
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  // const handleAddToCart = () => {
  //   // For now, this is just visual. You can replace this with actual cart logic (e.g., localStorage or context)
  //   setAddedToCart(true)
  //   setTimeout(() => setAddedToCart(false), 2000)
  // }


    const handleAddToCart = () => {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price_html, // or numeric price if preferred
        image: product.images?.[0]?.src,
      };

      addToCart(productToAdd, quantity); // <-- passing quantity
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    };

  

  if (loading) return <p className="p-6 text-center text-gray-500">Loading product...</p>
  if (error) return <p className="p-6 text-center text-red-500">Error: {error}</p>

  return (
    <Layout>
      <div className="mt-12 px-6 max-w-6xl mx-auto">
        <Link
          href="/shop"
          className="inline-block mb-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl shadow hover:bg-red-500 transition"
        >
          ← Back to Shop
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={product.images?.[0]?.src}
            alt={product.name}
            className="w-full h-80 md:h-full object-contain rounded-xl border"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl text-black font-bold mb-4">{product.name}</h1>
              <div
                className="text-gray-700 mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div
                className="text-2xl font-semibold text-red-600"
                dangerouslySetInnerHTML={{ __html: product.price_html }}
              />

            <div className="flex items-center gap-2">
              <label htmlFor="quantity" className="text-gray-700 font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 border border-gray-300 text-gray-800 rounded px-3 py-1"
              />
            </div>



              <button
                onClick={handleAddToCart}
                className={`w-full px-6 py-3 text-lg font-semibold rounded-xl shadow transition ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {addedToCart ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
