import type { Categories, Products, ProductsItem } from "./types";

export async function fetchProducts(): Promise<Products[]> {
  try {
    const res = await fetch("/api/products");
    if (!res.ok) throw new Error("fail to fetch products");
    const data: Products[] = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch products", error);
    throw error;
  }
}

export async function fetchCategories(): Promise<Categories[]> {
  try {
    const res = await fetch("/api/categories");
    if (!res.ok) throw new Error("fail to fetch categories");
    const data: Categories[] = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch categories", error);
    throw error;
  }
}

export async function fetchProductsItem(): Promise<ProductsItem[]> {
  try {
    const res = await fetch("/api/productsItem");
    if (!res.ok) throw new Error("fail to fetch productsItem");
    const data: ProductsItem[] = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch productsItem", error);
    throw error;
  }
}
