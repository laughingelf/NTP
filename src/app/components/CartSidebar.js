'use client';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const parsePrice = (priceHtml) => {
    if (!priceHtml) return 0;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = priceHtml;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-2 md:top-1 md:right-1 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700"
      >
        🛒 {totalItems}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed mt-4 top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-xl text-gray-800 font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-150px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => {
              const price = parsePrice(item.price);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded border"
                  />

                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="text-sm text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-red-600 font-semibold">
                      ${(price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-gray-500 hover:text-red-500 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="text-lg font-semibold text-gray-800 mb-3">Total: ${totalPrice}</p>
          <Link
            href="/cart"
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold"
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
