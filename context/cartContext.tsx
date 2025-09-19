"use client";
import { fetchCart } from "@/lib/api";
import type { cart } from "@/lib/types";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useReducer } from "react";

interface CartContextType {
  cartItems: cart[];
  dispatch: React.Dispatch<Action>;
}

interface Action {
  type: string;
  payload: cart[];
}

export const CartContext = createContext<CartContextType | null>(null);

const cartItemsReducer = (state: cart[], action: Action) => {
  switch (action.type) {
    case "fetch":
      state = [...action.payload];
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
