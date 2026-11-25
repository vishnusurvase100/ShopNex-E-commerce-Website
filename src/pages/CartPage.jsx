import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <section className="mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-6 py-10">
        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <i className="bi bi-cart3 text-4xl text-gray-400"></i>
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Looks like you haven't added anything to your cart yet.
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

  // Total Items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = subtotal >= 100 ? 0 : 10;

  // Total
  const total = subtotal + shipping;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* ================= CART ITEMS ================= */}
        <div className="lg:col-span-2">

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

            {/* Cart Header */}
            <div className="hidden border-b border-gray-200 bg-gray-50 px-6 py-4 sm:grid sm:grid-cols-12">
              <div className="col-span-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Product
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Price
                </span>
              </div>

              <div className="col-span-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Quantity
                </span>
              </div>

              <div className="col-span-1"></div>
            </div>

            {/* Products */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 p-5 last:border-b-0 sm:grid sm:grid-cols-12 sm:items-center sm:px-6"
              >

                {/* Product */}
                <div className="flex items-center gap-4 sm:col-span-6">

                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-medium uppercase text-[#5541e8]">
                      {item.category?.replaceAll("-", " ")}
                    </p>

                    <h2 className="line-clamp-2 text-sm font-semibold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.brand || "Quality Product"}
                    </p>
                  </div>

                </div>

                {/* Price */}
                <div className="mt-4 sm:col-span-2 sm:mt-0 sm:text-center">
                  <p className="text-base font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="mt-4 flex items-center justify-between sm:col-span-3 sm:mt-0 sm:justify-center">

                  <div className="flex items-center rounded-lg border border-gray-200">

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                    >
                      <i className="bi bi-dash"></i>
                    </button>

                    <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                    >
                      <i className="bi bi-plus"></i>
                    </button>

                  </div>

                </div>

                {/* Remove */}
                <div className="mt-4 flex justify-end sm:col-span-1 sm:mt-0">

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Continue Shopping */}
          <Link
            to="/shop"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5541e8] hover:underline"
          >
            <i className="bi bi-arrow-left"></i>
            Continue Shopping
          </Link>

        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="lg:col-span-1">

          <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            {/* Summary */}
            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Subtotal
                </span>

                <span className="text-sm font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Shipping
                </span>

                <span
                  className={`text-sm font-semibold ${
                    shipping === 0
                      ? "text-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-gray-400">
                  Add ${(100 - subtotal).toFixed(2)} more to get free shipping.
                </p>
              )}

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">

                  <span className="text-base font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#5541e8]">
                    ${total.toFixed(2)}
                  </span>

                </div>
              </div>

            </div>

            {/* Checkout */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5541e8] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#4633d1]"
            >
              Proceed to Checkout
              <i className="bi bi-arrow-right"></i>
            </button>

            {/* Secure Checkout */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
              <i className="bi bi-shield-check text-base"></i>
              Secure checkout
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};