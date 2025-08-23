"use client";
import Loading from "@/components/loading/Loading";
import PriceCards from "@/components/priceCards/PriceCards";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Container from "@/components/ui/Container";
import Rating from "@/components/ui/Rating";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { ProductsContext } from "@/context/productsContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import { RatingContext } from "@/context/ratingContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";

const page = () => {
  const contextProducts = useContext(ProductsContext);
  const contextProductsItem = useContext(ProductsItemContext);
  const contextRating = useContext(RatingContext);
  const pathName = useParams();
  if (!contextProducts || !contextProductsItem || !contextRating)
    return <Loading />;
  const { products, loading: productsLoading } = contextProducts;
  const { productsItem, loading: productsItemLoading } = contextProductsItem;
  const { rating, dispatch, loading: ratingLoading } = contextRating;

  if (productsLoading || productsItemLoading || ratingLoading)
    return <Loading />;
  const pathCapacity = pathName.product?.slice(
    pathName.product.lastIndexOf("-") + 1
  );
  const product = products.find((pr) => pr.capacityEName === pathCapacity);
  

  useEffect(() => {
    if (product?.id && rating.length > 0)
      dispatch({ type: "FILTER", payload: product?.id });
  }, [product?.id, dispatch]);
  return (
    <Container className="mt-7">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5">
          {product && <BreadCrumb product={product} />}
          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <Image
                src="/story-play-icon.webp"
                alt="image"
                width={80}
                height={80}
              />
            </div>
            <div>
              <TextTitle className="text-2xl">{`${product?.product_name} ظرفیت ${product?.capacity} -${product?.simcard}`}</TextTitle>
              <Text>{pathName.product}</Text>
            </div>
          </div>
          <div className="flex justify-between border-b pb-8">
            <Rating rating={rating} />
            <div className="flex">
              <Text className="font-bold">برند:</Text>
              <Text>{product?.brand}</Text>
            </div>
            <div className="flex">
              <Text className="font-bold">دسته بندی:</Text>
              <Text>{product?.categoriesName}</Text>
            </div>
          </div>
          <PriceCards />
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default page;
