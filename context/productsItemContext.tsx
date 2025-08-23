import { fetchProductsItem } from "@/lib/api";
import type { ProductsItem } from "@/lib/types";
import { createContext, useEffect, useState } from "react";

interface ProductsItemContextType {
  productsItem: ProductsItem[];
  loading: boolean
}

export const ProductsItemContext =
  createContext<ProductsItemContextType | null>(null);

const ProductsItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsItem, setProductsItem] = useState<ProductsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const loadProductsItem = async () => {
      try {
        setLoading(true)
        const data = await fetchProductsItem();
        setProductsItem(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    loadProductsItem();

  }, []);

  return (
    <ProductsItemContext.Provider value={{ productsItem, loading }}>
      {children}
    </ProductsItemContext.Provider>
  );
};
export default ProductsItemProvider;
