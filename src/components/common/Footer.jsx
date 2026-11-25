import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              Shop<span className="text-[#5541e8]">Nex</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Your one-stop destination for quality products, great prices,
              and a seamless shopping experience.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-[#5541e8] hover:text-white"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-[#5541e8] hover:text-white"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-[#5541e8] hover:text-white"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-[#5541e8] hover:text-white"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Shop
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/shop"
                  className="transition hover:text-white"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/shop/category/smartphones"
                  className="transition hover:text-white"
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  to="/shop/category/mens-shirts"
                  className="transition hover:text-white"
                >
                  Men's Clothing
                </Link>
              </li>

              <li>
                <Link
                  to="/shop/category/womens-dresses"
                  className="transition hover:text-white"
                >
                  Women's Clothing
                </Link>
              </li>

              <li>
                <Link
                  to="/shop/category/beauty"
                  className="transition hover:text-white"
                >
                  Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="transition hover:text-white"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition hover:text-white"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Customer Service
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt mt-1 text-[#5541e8]"></i>

                <span>
                  123 Market Street,
                  <br />
                  Mumbai, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <i className="bi bi-telephone text-[#5541e8]"></i>

                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <i className="bi bi-envelope text-[#5541e8]"></i>

                <span>support@shopease.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-xl bg-gray-800 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-lg font-semibold text-white">
                Subscribe to our newsletter
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Get the latest offers and updates directly in your inbox.
              </p>
            </div>

            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#5541e8]"
              />

              <button
                type="button"
                className="rounded-r-lg bg-[#5541e8] px-5 text-sm font-semibold text-white transition hover:bg-[#4632d0]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="transition hover:text-gray-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-gray-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};