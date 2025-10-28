
import type { cart, Categories, Products, ProductsItem, Rating } from "./types";


export async function fetchProducts(): Promise<Products[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productsItem`);
    if (!res.ok) throw new Error("fail to fetch productsItem");
    const data: ProductsItem[] = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch productsItem", error);
    throw error;
  }
}

export async function fetchgetRating(): Promise<Rating[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getRating`);
    if (!res.ok) throw new Error("fail to fetch rating");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetch rating", error);
    throw error;
  }
}

export async function fetchEmailCheck(email: string): Promise<{result:boolean, email:string}> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/emailCheck`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
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
): Promise<{success: boolean}> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
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

export async function fetchCart(email: string): Promise<cart[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error("fail to fetchCart");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to fetchCart", error);
    throw error;
  }
}

export async function fetchChangeQuentity(
  action: number,
  email: string,
  productId: number
) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/changeQuentity`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ action, email, productId }),
    });
  } catch (error) {
    console.log("fail to fetchChange", error);
    throw error;
  }
}

export async function fetchDeletecartProduct(email: string, productId: number) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteCartProduct`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, productId }),
    });
  } catch (error) {
    console.log("fail to deletecartProduct", error);
    throw error;
  }
}

export async function fetchPayment(cartId: number) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payment`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ cartId }),
    });
  } catch (error) {
    console.log("fail to payment", error);
    throw error;
  }
}

export async function fetchAddToCart(
  email: string,
  productItemId: number,
  quentity: number
) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/addtocart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, productItemId, quentity }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to add to cart", error);
    throw error;
  }
}

export async function fetchRating(
  email: string,
  categoryId: number,
  rating: number
) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rating`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, categoryId, rating }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fail to rating", error);
    throw error;
  }
}
