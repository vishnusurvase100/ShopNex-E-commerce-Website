import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../service/productApi";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-t-[#5541e8]"></div>

          <p className="text-sm text-gray-500">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <i className="bi bi-exclamation-circle text-3xl text-red-500"></i>

          <p className="mt-3 text-red-500">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            All Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Explore our collection of amazing products
          </p>
        </div>

        <span className="hidden text-sm text-gray-500 sm:block">
          {products.length} Products
        </span>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#5541e8]/30 hover:shadow-xl"
          >

            {/* ================= IMAGE ================= */}
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

              {/* Wishlist */}
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-[#5541e8] hover:text-white"
              >
                <i className="bi bi-heart"></i>
              </button>
            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="p-5">

              {/* Category */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#5541e8]">
                {product.category?.replaceAll("-", " ")}
              </p>

              {/* Title */}
              <h2 className="h-12 overflow-hidden text-base font-semibold leading-6 text-gray-900 transition group-hover:text-[#5541e8]">
                {product.title}
              </h2>

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

                <div>
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price?.toFixed(2)}
                  </span>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5541e8] text-white transition duration-300 group-hover:scale-110">
                  <i className="bi bi-arrow-right"></i>
                </span>

              </div>

              {/* Stock */}
              <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3">

                <span
                  className={`h-2 w-2 rounded-full ${
                    product.stock > 0
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>

                <span className="text-xs text-gray-500">
                  {product.stock > 0
                    ? `${product.stock} items available`
                    : "Out of stock"}
                </span>

              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};