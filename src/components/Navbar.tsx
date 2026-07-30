"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  // Avoid rendering values that differ between server and client during hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          FoodSite
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/account"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {mounted ? "Sign In" : "Account"}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          Cart
          {mounted && itemCount > 0 && (
            <span className="bg-white text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </nav>

      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
