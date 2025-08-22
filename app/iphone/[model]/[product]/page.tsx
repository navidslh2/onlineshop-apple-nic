"use client";
import Loading from "@/components/loading/Loading";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Container from "@/components/ui/Container";
import Rating from "@/components/ui/Rating";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { ProductsContext } from "@/context/productsContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import { RatingContext } from "@/context/ratingContext";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
  const contextProducts = useContext(ProductsContext);
  const contextProductsItem = useContext(ProductsItemContext);
  const contextRating = useContext(RatingContext);
  const pathName = useParams();
  if (!contextProducts || !contextProductsItem || !contextRating)
    return <Loading />;
  const { products, loading } = contextProducts;
  const { productsItem } = contextProductsItem;
  const { rating, dispatch } = contextRating;

  if (loading) return <Loading />;
  const pathCapacity = pathName.product?.slice(
    pathName.product.lastIndexOf("-") + 1
  );
  const product = products.find((pr) => pr.capacityEName === pathCapacity);
  if (product?.id) dispatch({ type: "FILTER", payload: product?.id });

  return (
    <Container className="mt-7">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5">
          {product && <BreadCrumb product={product} />}
          <TextTitle className="text-2xl">{`${product?.product_name} ظرفیت ${product?.capacity} -${product?.simcard}`}</TextTitle>
          <Text>{pathName.product}</Text>
          <Rating rating={rating} />
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default page;
