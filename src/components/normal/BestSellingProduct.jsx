import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=4"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-gray-500">Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Best Selling Products
        </h2>

        <Link
          to="/shop"
          className="text-sm font-semibold text-[#5541e8] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="group"
          >
            {/* Product Image */}
            <Link to={`/product/${product.id}`}>
              <div className="mb-4 flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Product Name */}
            <h3 className="truncate text-base font-semibold text-gray-900">
              {product.title}
            </h3>

            {/* Category */}
            <p className="mt-1 truncate text-sm text-gray-500">
              {product.category}
            </p>

            {/* Price + Rating */}
            <div className="mt-4 flex items-center justify-between">

              <span className="text-base font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>

              <span className="flex items-center gap-1 text-sm text-gray-600">
                <i className="bi bi-star-fill text-yellow-400"></i>
                {product.rating.toFixed(1)}
              </span>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};