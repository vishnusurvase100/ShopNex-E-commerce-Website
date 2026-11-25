const BASE_URL = "https://fakestoreapi.com/products";

// Get all products
export const getAllProducts = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();

    return data.products;
};

// Get Electronics
export const getElectronics = async () => {
    const response = await fetch(`${BASE_URL}/category/smartphones`);
    const data = await response.json();

    return data.products;
};

// Get Clothes
export const getClothes = async () => {
    const response = await fetch(`${BASE_URL}/category/mens-shirts`);
    const data = await response.json();

    return data.products;
};

// Get Home-Decoration
export const getHomeProducts = async () => {
    const response = await fetch(`${BASE_URL}/category/home-decoration`);
    const data = await response.json();

    return data.products;
};

// Get Cosmetics
export const getCosmetics = async () => {
    const response = await fetch(`${BASE_URL}/category/beauty`);
    const data = await response.json();

    return data.products;
};

// Get all categories
export const getProductCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();

    return data;
};

// Get single product
export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    const data = await response.json();

    return data;
};