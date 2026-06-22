"use client";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/context/CartContext";

type Props = {
  item: {
    _id: string;
    name: string;
    description: string;
    price: number;
    slug: { current: string };
    available: boolean;
  };
};

export default function MenuItemCard({ item }: Props) {
  const { addItem } = useCart();

  function handleAddToCart() {
    const cartItem: CartItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    addItem(cartItem);
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Placeholder image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-300 text-sm">No image yet</span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-base font-bold text-gray-900">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-[#b45e2a] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#9a4f23] transition-colors"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
