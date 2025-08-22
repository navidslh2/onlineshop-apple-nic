"use client";
import Loading from "@/components/loading/Loading";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { ProductsContext } from "@/context/productsContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import { useParams } from "next/navigation";
import React, { use, useContext, useState } from "react";

const page = () => {
  const contextProducts = useContext(ProductsContext);
  const contextProductsItem = useContext(ProductsItemContext);
  const pathName = useParams();
  if (!contextProducts || !contextProductsItem) return <Loading />;
  const { products, loading } = contextProducts;
  const { productsItem } = contextProductsItem;
  console.log(productsItem)
  if (loading) return <Loading />;

  const pathCapacity = pathName.product?.slice(
    pathName.product.lastIndexOf("-") + 1
  );
  const product = products.find((pr) => pr.capacityEName === pathCapacity);

  console.log(product);
  return (
    <Container className="mt-7">
      {product && <BreadCrumb product={product} />}
      <TextTitle className="text-2xl">{`${product?.product_name} ظرفیت ${product?.capacity} -${product?.simcard}`}</TextTitle>
      <Text>{pathName.product}</Text>
    </Container>
  );
};

export default page;
