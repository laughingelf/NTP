'use client';
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      const match = price.match(/[\d,.]+/);
      return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
    }
    return 0;
  };


  const totalPrice = cartItems
    .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <Layout>
      <div className="p-6 mt-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">Your cart is currently empty.</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <ul className="divide-y">
              {cartItems.map((item) => {
                const unitPrice = parsePrice(item.price);
                const itemTotal = (unitPrice * item.quantity).toFixed(2);

                return (
                  <li key={item.id} className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-6">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-contain border rounded-lg" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">Unit Price: ${unitPrice.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:text-gray-800 text-lg font-bold"
                          >
                            −
                          </button>
                          <span className="text-base text-gray-800 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:text-gray-800 text-lg font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-xl font-bold text-red-600">${itemTotal}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-gray-400 hover:text-red-500 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-between items-center pt-6 border-t">
              <p className="text-2xl font-semibold text-gray-800">Total: ${totalPrice}</p>
              <button className="px-8 py-3 bg-red-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 shadow">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
