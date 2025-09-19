"use client";
import Carts from "@/components/cart/Carts";
import Loading from "@/components/loading/Loading";
import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import { CartContext } from "@/context/cartContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import type { ProductsItem } from "@/lib/types";
import React, { useContext, useEffect, useState } from "react";

const IndexPayment = () => {
  const cartContext = useContext(CartContext);
  const productItemContext = useContext(ProductsItemContext);
  if (!cartContext || !productItemContext) return <Loading />;
  const { cartItems } = cartContext;
  const { productsItem, loading } = productItemContext;
  const [cartProductsItem, setCartProductsItem] = useState<ProductsItem[]>([])
  useEffect(() => {
    const ProductItem = productsItem.filter((pr) =>
      cartItems.some((item) => item.productId === pr.id)
    );
    const hjhj = (ProductItem.map((pr) => {
      const cartItem = cartItems.find((item) => item.productId === pr.id);
      return { ...pr, quantity: cartItem?.quantity };
    }));
    setCartProductsItem(hjhj)
  }, [cartItems]);
  return (
    <Container>
      <TextTitle className="border-b text-xl font-medium flex justify-center py-5 mt-8">
        سبد خرید
      </TextTitle>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <Carts cartProductsItem={cartProductsItem} />
        </div>
        <div className="col-span-4"></div>
      </div>
    </Container>
  );
};

export default IndexPayment;
