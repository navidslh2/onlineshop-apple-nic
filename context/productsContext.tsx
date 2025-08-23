
import { fetchProducts } from "@/lib/api";
import type { Products } from "@/lib/types";
import { createContext, useEffect, useState } from "react";

interface ProductsContextType {
  products: Products[];
  loading: boolean;
}

export const ProductsContext = createContext<ProductsContextType | null>(null);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => { 
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
      
    };
    loadProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
