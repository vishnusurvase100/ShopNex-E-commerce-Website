import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const WatchlistPage = () => {
  const {
    watchlist,
    toggleWatchlist,
    addToCart,
  } = useCart();

  // Empty Watchlist
  if (watchlist.length === 0) {
    return (
      <section className="mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-6 py-10">
        <div className="text-center">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <i className="bi bi-heart text-4xl text-gray-400"></i>
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Your Watchlist is Empty
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Save products you love and find them here anytime.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#5541e8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4633d1]"
          >
            <i className="bi bi-arrow-left"></i>
            Continue Shopping
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="mb-8 flex items-end justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Watchlist
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Products you've saved for later
          </p>
        </div>

        <span className="hidden text-sm text-gray-500 sm:block">
          {watchlist.length}{" "}
          {watchlist.length === 1 ? "Product" : "Products"}
        </span>

      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {watchlist.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5541e8]/30 hover:shadow-xl"
          >

            {/* Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50">

              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />

              {/* Discount */}
              {product.discountPercentage > 0 && (
                <span className="absolute left-3 top-3 rounded-full bg-[#5541e8] px-3 py-1 text-xs font-semibold text-white">
                  -{Math.round(product.discountPercentage)}%
                </span>
              )}

              {/* Remove Watchlist */}
              <button
                type="button"
                onClick={() => toggleWatchlist(product)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5541e8] shadow-sm transition hover:bg-red-50 hover:text-red-500"
              >
                <i className="bi bi-heart-fill"></i>
              </button>

            </div>

            {/* Product Details */}
            <div className="p-5">

              {/* Category */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#5541e8]">
                {product.category?.replaceAll("-", " ")}
              </p>

              {/* Title */}
              <Link
                to={`/product/${product.id}`}
                className="block"
              >
                <h2 className="h-12 overflow-hidden text-base font-semibold leading-6 text-gray-900 transition hover:text-[#5541e8]">
                  {product.title}
                </h2>
              </Link>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">

                <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
                  <i className="bi bi-star-fill text-xs text-yellow-400"></i>

                  <span className="text-xs font-semibold text-gray-700">
                    {product.rating?.toFixed(1)}
                  </span>
                </div>

                <span className="text-xs text-gray-400">
                  Rating
                </span>

              </div>

              {/* Price */}
              <div className="mt-4 flex items-center justify-between">

                <span className="text-xl font-bold text-gray-900">
                  ${product.price?.toFixed(2)}
                </span>

                <Link
                  to={`/product/${product.id}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-[#5541e8] hover:text-white"
                >
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

              {/* Add To Cart */}
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5541e8] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4633d1]"
              >
                <i className="bi bi-cart-plus"></i>
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};