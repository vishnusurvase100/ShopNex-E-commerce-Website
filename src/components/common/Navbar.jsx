import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Deals", path: "/deals" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Brands", path: "/brands" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-6">

        {/* All Categories */}
        <button className="flex items-center gap-3 border-r border-gray-200 py-4 pr-8 text-sm font-medium text-gray-700">
          <i className="bi bi-list text-xl"></i>

          <span>All Categories</span>

          <i className="bi bi-chevron-down text-xs"></i>
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 pl-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-4 text-sm font-medium transition ${
                  isActive
                    ? "font-semibold text-[#5541e8]"
                    : "text-gray-700 hover:text-[#5541e8]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#5541e8]"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};