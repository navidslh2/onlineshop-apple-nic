"use client";
import { fetchCart } from "@/lib/api";
import type { cart } from "@/lib/types";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useReducer, useState } from "react";


interface CartContextType {
  cartItems: cart[];
  dispatch: React.Dispatch<Action>;
  loading:boolean
}

type Action = {type:'fetch', payload: cart[] } | {type:'increasequantity', payload: number } | {type:'reducequantity', payload: number } | {type:'delete', payload: number } |{type:'addToCart', payload: cart } | {type:'payment'}


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
    case "payment":
      return []
    default: 
      return state;
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);
  const [loading, setLoading] = useState(false)
  const { data } = useSession();
  const userEmail = data?.user?.email;
  useEffect(() => {
    if (!userEmail) return;
    const loadCart = async () => {
      try {
        setLoading(true)
        const data = await fetchCart(userEmail);
        dispatch({ type: "fetch", payload: data });
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    loadCart();
  }, [userEmail]);
  return (
    <CartContext.Provider value={{ cartItems, dispatch, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
