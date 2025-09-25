"use client";
import { fetchCart } from "@/lib/api";
import type { cart, ProductsItem } from "@/lib/types";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useReducer } from "react";
import { start } from "repl";

interface CartContextType {
  cartItems: cart[];
  dispatch: React.Dispatch<Action>;
}

type Action = {type:'fetch', payload: cart[] } | {type:'increasequantity', payload: number } | {type:'reducequantity', payload: number } | {type:'delete', payload: number } |{type:'addToCart', payload: cart }


export const CartContext = createContext<CartContextType | null>(null);

const cartItemsReducer = (state: cart[], action: Action) => {
  switch (action.type) {
    case "fetch":
     return  [...action.payload];
    case "increasequantity":
     return state.map(item => item.productId === action.payload ? {...item,quantity: item.quantity+1}: item)
    case "reducequantity":
      return state.map(item => item.productId === action.payload ? {...item, quantity: item.quantity-1}: item)
    case "delete":
      return state.filter(item => item.productId !== action.payload)
    case "addToCart":
      return [...state,action.payload]
    default: 
      return state;
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);
  const { data } = useSession();
  const userEmail = data?.user?.email;
  useEffect(() => {
    if (!userEmail) return;
    const loadCart = async () => {
      try {
        const data = await fetchCart(userEmail);
        dispatch({ type: "fetch", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    loadCart();
  }, [userEmail]);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
