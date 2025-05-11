'use client';
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems
    .reduce(
      (acc, item) => acc + (parseFloat(item.price?.replace(/[^0-9.]/g, '')) || 0) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <Layout>
      <div className="p-6 mt-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">No items in cart.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cartItems.map((item) => {
                const unitPrice = parseFloat(item.price?.replace(/[^0-9.]/g, '')) || 0;
                const itemTotal = (unitPrice * item.quantity).toFixed(2);

                return (
                  <li key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-contain border rounded" />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">Unit Price: ${unitPrice.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            −
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold text-red-600">${itemTotal}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-gray-500 hover:text-red-500 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 text-right">
              <p className="text-xl font-bold text-gray-800">Total: ${totalPrice}</p>
              <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
