import { afterEach } from "node:test";
import type { Categories, Products, ProductsItem, Rating } from "./types";

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

export async function fetchRating(): Promise<Rating[]> {
  try {
    const res = await fetch("/api/rating");
    if (!res.ok) throw new Error("fail to fetch rating");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch rating", error);
    throw error;
  }
}

export async function fetchEmailCheck(email: string): Promise<any> {
  try {
    const res = await fetch("/api/emailCheck", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(email),
    });
    if (!res.ok) throw new Error("fail to fetch emailCheck");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch emailCheck", error);
    throw error;
  }
}

export async function fetchRegister(
  email: string,
  password: string
): Promise<any> {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("fail to fetchRegister");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch fetchRegister", error);
    throw error;
  }
}

export async function fechCart(id: number): Promise<any> {
  try {
    const res = await fetch("/api/cart", {
      method: "GET",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(id),
    });
    if (!res.ok) throw new Error("fail to fetchCart");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch fetchRegister", error);
    throw error;
  }
}
