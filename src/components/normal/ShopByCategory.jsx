import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductCategories } from "../../service/productApi";

export const ShopByCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getProductCategories();

        // फक्त आपल्या required categories
        const requiredCategories = data.filter((category) =>
          [
            "smartphones",
            "laptops",
            "mens-shirts",
            "womens-dresses",
            "home-decoration",
            "beauty",
          ].includes(category.slug)
        );

        setCategories(requiredCategories);
      } catch (error) {
        console.error("Category API Error:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Shop by Categories
        </h2>

        <Link
          to="/categories"
          className="text-sm font-semibold text-[#5541e8] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/shop/category/${category.slug}`}
            className="group text-center"
          >
            {/* Image */}
            <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
              <img
                src={`https://dummyjson.com/image/300x300?text=${category.name}`}
                alt={category.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <h3 className="text-sm font-medium text-gray-800 transition group-hover:text-[#5541e8]">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};