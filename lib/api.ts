import type { Categories, Products } from "./types";

export async function fetchProducts(): Promise<Products[]> {
  try {
    const res = await fetch("api/products");
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
