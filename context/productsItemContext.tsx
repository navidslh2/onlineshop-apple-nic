import { fetchProductsItem } from "@/lib/api";
import type { ProductsItem } from "@/lib/types";
import { createContext, useEffect, useState } from "react";

interface ProductsItemContextType {
  productsItem: ProductsItem[];
}

export const ProductsItemContext =
  createContext<ProductsItemContextType | null>(null);

const ProductsItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsItem, setProductsItem] = useState<ProductsItem[]>([]);
  useEffect(() => {
    const loadProductsItem = async () => {
      try {
        const data = await fetchProductsItem();
        setProductsItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProductsItem();

  }, []);

  return (
    <ProductsItemContext.Provider value={{ productsItem }}>
      {children}
    </ProductsItemContext.Provider>
  );
};
export default ProductsItemProvider;
