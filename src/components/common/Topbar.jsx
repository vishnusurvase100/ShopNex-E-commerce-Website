import React from "react";

export const Topbar = () => {
  return (
    <div className="bg-[#5541e8] text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2">
        <span>🔥</span>

        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
        </p>

        <a
          href="#"
          className="font-semibold underline underline-offset-2 hover:text-gray-200"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};