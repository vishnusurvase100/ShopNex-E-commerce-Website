import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../service/productApi";
import { useCart } from "../../context/CartContext";

export const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [selectedImage, setSelectedImage] = useState("");
    const { addToCart, toggleWatchlist, watchlist } = useCart();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);

                const data = await getProductById(id);

                setProduct(data);
                setSelectedImage(data.thumbnail);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Loading
    if (loading) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#5541e8]"></div>

                    <p className="text-sm text-gray-500">
                        Loading product...
                    </p>
                </div>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="text-center">
                    <i className="bi bi-exclamation-circle text-4xl text-red-500"></i>

                    <p className="mt-3 text-red-500">
                        {error}
                    </p>

                    <Link
                        to="/shop"
                        className="mt-5 inline-block rounded-lg bg-[#5541e8] px-5 py-2 text-sm font-semibold text-white"
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    if (!product) {
        return null;
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-10">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                <Link
                    to="/"
                    className="hover:text-[#5541e8]"
                >
                    Home
                </Link>

                <i className="bi bi-chevron-right text-xs"></i>

                <Link
                    to="/shop"
                    className="hover:text-[#5541e8]"
                >
                    Shop
                </Link>

                <i className="bi bi-chevron-right text-xs"></i>

                <span className="text-gray-900">
                    {product.title}
                </span>
            </div>

            {/* Product */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                {/* ================= LEFT ================= */}
                <div>

                    {/* Main Image */}
                    <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-2xl bg-gray-50">

                        <img
                            src={selectedImage}
                            alt={product.title}
                            className="h-full w-full object-contain p-10"
                        />

                        {/* Discount */}
                        {product.discountPercentage > 0 && (
                            <span className="absolute left-5 top-5 rounded-full bg-[#5541e8] px-4 py-2 text-sm font-semibold text-white">
                                -{Math.round(product.discountPercentage)}%
                            </span>
                        )}
                    </div>

                    {/* Images */}
                    <div className="mt-4 flex gap-3 overflow-x-auto">

                        {product.images?.map((image, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-gray-50 ${selectedImage === image
                                    ? "border-[#5541e8]"
                                    : "border-gray-200"
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.title} ${index + 1}`}
                                    className="h-full w-full object-contain p-2"
                                />
                            </button>
                        ))}

                    </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div>

                    {/* Category */}
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#5541e8]">
                        {product.category?.replaceAll("-", " ")}
                    </p>

                    {/* Title */}
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        {product.title}
                    </h1>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-3">

                        <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-3 py-2">
                            <i className="bi bi-star-fill text-yellow-400"></i>

                            <span className="font-semibold text-gray-800">
                                {product.rating?.toFixed(1)}
                            </span>
                        </div>

                        <span className="text-sm text-gray-500">
                            Customer Rating
                        </span>

                    </div>

                    {/* Price */}
                    <div className="mt-6 flex items-center gap-4">

                        <span className="text-3xl font-bold text-gray-900">
                            ${product.price?.toFixed(2)}
                        </span>

                        {product.discountPercentage > 0 && (
                            <span className="rounded-md bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>
                        )}

                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="mb-2 text-base font-semibold text-gray-900">
                            Description
                        </h2>

                        <p className="text-sm leading-7 text-gray-600">
                            {product.description}
                        </p>
                    </div>

                    {/* Product Info */}
                    <div className="mt-7 rounded-xl border border-gray-200">

                        <div className="grid grid-cols-2 border-b border-gray-200">

                            <div className="border-r border-gray-200 p-4">
                                <p className="text-xs text-gray-500">
                                    Brand
                                </p>

                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {product.brand || "N/A"}
                                </p>
                            </div>

                            <div className="p-4">
                                <p className="text-xs text-gray-500">
                                    SKU
                                </p>

                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {product.sku || "N/A"}
                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-2">

                            <div className="border-r border-gray-200 p-4">
                                <p className="text-xs text-gray-500">
                                    Availability
                                </p>

                                <p
                                    className={`mt-1 text-sm font-semibold ${product.stock > 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                        }`}
                                >
                                    {product.stock > 0
                                        ? `${product.stock} in stock`
                                        : "Out of stock"}
                                </p>
                            </div>

                            <div className="p-4">
                                <p className="text-xs text-gray-500">
                                    Minimum Order
                                </p>

                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {product.minimumOrderQuantity || 1}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Shipping */}
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                        <div className="rounded-lg bg-gray-50 p-4">
                            <i className="bi bi-truck text-xl text-[#5541e8]"></i>

                            <p className="mt-2 text-xs font-semibold text-gray-900">
                                Shipping
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {product.shippingInformation || "Fast delivery"}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <i className="bi bi-arrow-repeat text-xl text-[#5541e8]"></i>

                            <p className="mt-2 text-xs font-semibold text-gray-900">
                                Returns
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {product.returnPolicy || "Easy returns"}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <i className="bi bi-shield-check text-xl text-[#5541e8]"></i>

                            <p className="mt-2 text-xs font-semibold text-gray-900">
                                Warranty
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {product.warrantyInformation || "Warranty available"}
                            </p>
                        </div>

                    </div>

                    {/* Add To Cart */}
                    <div className="mt-7 flex gap-3">

                        <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#5541e8] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4633d1]"
                        >
                            <i className="bi bi-cart-plus text-lg"></i>
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            onClick={() => toggleWatchlist(product)}
                            className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-[#5541e8] hover:text-[#5541e8]"
                        >
                            <i
                                className={`bi ${watchlist.some((item) => item.id === product.id)
                                        ? "bi-heart-fill text-[#5541e8]"
                                        : "bi-heart"
                                    } text-xl`}
                            ></i>
                        </button>

                    </div>

                </div>
            </div>

            {/* ================= EXTRA INFORMATION ================= */}
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* Dimensions */}
                {product.dimensions && (
                    <div className="rounded-2xl border border-gray-200 p-6">

                        <h2 className="mb-5 text-lg font-bold text-gray-900">
                            Product Dimensions
                        </h2>

                        <div className="grid grid-cols-3 gap-4">

                            <div className="rounded-lg bg-gray-50 p-4 text-center">
                                <p className="text-xs text-gray-500">
                                    Width
                                </p>

                                <p className="mt-1 font-semibold text-gray-900">
                                    {product.dimensions.width}
                                </p>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4 text-center">
                                <p className="text-xs text-gray-500">
                                    Height
                                </p>

                                <p className="mt-1 font-semibold text-gray-900">
                                    {product.dimensions.height}
                                </p>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4 text-center">
                                <p className="text-xs text-gray-500">
                                    Depth
                                </p>

                                <p className="mt-1 font-semibold text-gray-900">
                                    {product.dimensions.depth}
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {/* Meta Information */}
                <div className="rounded-2xl border border-gray-200 p-6">

                    <h2 className="mb-5 text-lg font-bold text-gray-900">
                        Product Information
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between border-b border-gray-100 pb-3">
                            <span className="text-sm text-gray-500">
                                Weight
                            </span>

                            <span className="text-sm font-semibold text-gray-900">
                                {product.weight || "N/A"}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-gray-100 pb-3">
                            <span className="text-sm text-gray-500">
                                Tags
                            </span>

                            <span className="text-sm font-semibold text-gray-900">
                                {product.tags?.join(", ") || "N/A"}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500">
                                Barcode
                            </span>

                            <span className="text-sm font-semibold text-gray-900">
                                {product.meta?.barcode || "N/A"}
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            {/* ================= REVIEWS ================= */}
            {product.reviews?.length > 0 && (
                <div className="mt-10 rounded-2xl border border-gray-200 p-6">

                    <h2 className="mb-6 text-xl font-bold text-gray-900">
                        Customer Reviews
                    </h2>

                    <div className="space-y-5">

                        {product.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-100 pb-5 last:border-0"
                            >
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {review.reviewerName}
                                        </p>

                                        <div className="mt-1 flex items-center gap-1">
                                            {Array.from({
                                                length: review.rating,
                                            }).map((_, index) => (
                                                <i
                                                    key={index}
                                                    className="bi bi-star-fill text-xs text-yellow-400"
                                                ></i>
                                            ))}
                                        </div>
                                    </div>

                                    <span className="text-xs text-gray-400">
                                        {new Date(review.date).toLocaleDateString()}
                                    </span>

                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {review.comment}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            )}

        </section>
    );
};