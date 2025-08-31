import { ProductsContext } from "@/context/productsContext";
import type { Products } from "@/lib/types";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const useProductPage = () => {
  const contextProducts = useContext(ProductsContext);
  const pathName = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  const pathModel = (pathName?.model as string)?.replace(/-/g, " ");
  const pathCapacity = pathName.product?.slice(pathName.product.lastIndexOf("-") + 1
  );
  

  useEffect(() => {
    if (!contextProducts) return;

    const { products, loading: productsLoading } = contextProducts;
    const productsFind = products.find((pr) => pr.capacityEName === pathCapacity && pr.categoryEName === pathModel)
    if(productsFind) setProduct(productsFind);
  }, [contextProducts,pathModel,pathCapacity ]);
  return {product}
};
