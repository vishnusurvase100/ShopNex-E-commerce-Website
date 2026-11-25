import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
export const Midbar = () => {
  const { cart, watchlist } = useCart();
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-tight">
          Shop<span className="text-[#5541e8]">Nex</span>
        </div>

        {/* Search */}
        <div className="flex max-w-xl flex-1 items-center rounded-lg border border-gray-200 bg-white">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-full rounded-lg px-5 py-3 text-sm text-gray-700 outline-none"
          />

          <button className="px-4 text-gray-600 hover:text-[#5541e8]">
            <i className="bi bi-search text-lg"></i>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          {/* User */}
          <button className="text-gray-700 transition hover:text-[#5541e8]">
            <i className="bi bi-person text-2xl"></i>
          </button>

          {/* Wishlist */}
          <Link
            to="/watchlist"
            className="relative"
          >
            <i className="bi bi-heart text-2xl"></i>

            {watchlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5541e8] px-1 text-[10px] font-bold text-white">
                {watchlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <i className="bi bi-cart3 text-2xl"></i>

            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5541e8] px-1 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </div>
  );
};