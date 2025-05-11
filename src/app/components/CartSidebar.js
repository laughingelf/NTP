'use client';

import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();
  const sidebarRef = useRef();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      ref={sidebarRef}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart ({totalQuantity})</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-600 hover:text-red-500 transition" />
        </button>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-160px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
            >
              <img
                src={item.image || '/placeholder.png'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-500">Each: ${item.price}</p>
                <p className="text-red-600 font-bold">
                  Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t p-4 flex justify-between items-center">
          <p className="text-lg font-semibold">Total: ${totalPrice}</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
