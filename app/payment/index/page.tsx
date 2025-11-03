"use client";
import Carts from "@/components/cart/Carts";
import Invoice from "@/components/cart/Invoice";
import Loading from "@/components/loading/Loading";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { CartContext } from "@/context/cartContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import { fetchVisit } from "@/lib/api";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useMemo } from "react";

const IndexPayment = () => {
  const cartContext = useContext(CartContext);
  const productItemContext = useContext(ProductsItemContext);
  const pathname = usePathname()
  const cartItems = useMemo(
    () => cartContext?.cartItems ?? [],
    [cartContext?.cartItems]
  );
  const productsItem = useMemo(
    () => productItemContext?.productsItem ?? [],
    [productItemContext?.productsItem]
  );

  const cartProducts = useMemo(() => {
    return productsItem
      .filter((pr) => cartItems.some((item) => item.productId === pr.id))
      .map((pr) => {
        const cartItem = cartItems.find((item) => item.productId === pr.id);
        return { ...pr, quantity: cartItem?.quantity ?? 0 };
      });
  }, [cartItems, productsItem]);
    
  
    useEffect(() => {
    fetchVisit(pathname)
  }, []);

  if (cartContext?.loading) return <Loading />;
  return (
    <Container>
      <TextTitle className="border-b text-xl font-medium flex justify-center py-5 mt-8">
        سبد خرید
      </TextTitle>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          {cartContext?.cartItems.length ? (
            <Carts cartProductsItem={cartProducts} />
          ) : (
            <Text className="flex items-center justify-center h-full">
              سبد خرید شما خالی است
            </Text>
          )}
        </div>
        <div className="md:col-span-4">
          <Invoice cartProductsItem={cartProducts} />
        </div>
      </div>
    </Container>
  );
};

export default IndexPayment;
