"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
  const { cartItems, removeItem, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-12">
              Your cart is empty
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 py-4 border-b border-gray-100"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1 < 1 ? 1 : item.quantity - 1,
                        )
                      }
                      className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-400 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-lg font-semibold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Cart
            </button>
            <button className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
