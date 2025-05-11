'use client';
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";




export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();
    return (
        <Layout>
            <div className="p-6 mt-12">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="mb-2">
                        <div className="flex justify-between items-center">
                            <span>{item.name} x {item.quantity}</span>
                            <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:underline"
                            >
                            Remove
                            </button>
                        </div>
                        </li>
                    ))}
                    </ul>
                )}
            </div>

        </Layout>
    )
};