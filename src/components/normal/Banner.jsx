import React from "react";
import bannerImage from "../../assets/bannerImage.png";

export const Banner = () => {
    return (
        <section
            className="relative min-h-[590px] w-full overflow-hidden bg-[#f7f5ff] bg-contain bg-right-top bg-no-repeat"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Banner Content */}
            <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6">

                <div className="w-full md:w-1/2">

                    <p className="mb-4 font-semibold tracking-wide text-[#5541e8]">
                        NEW COLLECTION
                    </p>

                    <h1 className="mb-5 text-5xl font-bold leading-tight text-[#0f172a]">
                        Find the Best
                        <br />
                        Products for You
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        Discover amazing products at exclusive deals
                        <br />
                        and enjoy fast & free delivery.
                    </p>

                    <div className="flex gap-4">

                        <button className="rounded-lg bg-[#5541e8] px-7 py-3 font-semibold text-white transition hover:bg-[#4432d0]">
                            Shop Now
                        </button>

                        <button className="rounded-lg border border-[#5541e8] bg-white px-7 py-3 font-semibold text-gray-800 transition hover:bg-[#f4f2ff]">
                            Explore Deals
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};