import React from "react";

export const Benefits = () => {
  const benefits = [
    {
      icon: "bi-truck",
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Easy Returns",
      description: "30-day returns",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="mx-auto -mb-8 max-w-7xl px-6">
      <div className="grid grid-cols-4 rounded-2xl bg-white p-6 shadow-lg">

        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`flex items-center gap-4 px-6 ${
              index !== 0 ? "border-l border-gray-200" : ""
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0edff] text-[#5541e8]">
              <i className={`bi ${benefit.icon} text-xl`}></i>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                {benefit.title}
              </h3>

              <p className="text-sm text-gray-500">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};