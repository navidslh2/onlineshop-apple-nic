import { fetchProductsItem } from "@/lib/api";
import type { ProductsItem } from "@/lib/types";
import { createContext, useEffect, useReducer, useState } from "react";

interface ProductsItemContextType {
  productsItem: ProductsItem[];
  loading: boolean;
  dispatch: React.Dispatch<Action>
}

type Action =
  | { type: "fetch"; payload: ProductsItem[] }
  | { type: "buy"; payload: { id: number; quantity: number }[] };

export const ProductsItemContext =
  createContext<ProductsItemContextType | null>(null);

const productItemReducer = (state: ProductsItem[], action: Action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];
    case "buy":
      return state.map((item) => {
        const product = action.payload.find((pr) => pr.id === item.id);
        if(product) {
          return {...item, stock:item.stock- product.quantity}
        }
        return item
      });
  }
};

const ProductsItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsItem, dispatch] = useReducer(productItemReducer,[]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const loadProductsItem = async () => {
      try {
        setLoading(true);
        const data = await fetchProductsItem();
        dispatch({type:'fetch', payload:data})
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadProductsItem();
  }, []);

  return (
    <ProductsItemContext.Provider value={{ productsItem, loading,dispatch }}>
      {children}
    </ProductsItemContext.Provider>
  );
};
export default ProductsItemProvider;
