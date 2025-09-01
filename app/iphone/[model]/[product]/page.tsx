"use client";
import Loading from "@/components/loading/Loading";
import PriceCards from "@/components/priceCards/PriceCards";
import ProductImageSlider from "@/components/priceCards/ProductImageSlider";
import VarientSelectors from "@/components/priceCards/VarientSelectors";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Container from "@/components/ui/Container";
import Rating from "@/components/ui/Rating";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { ProductsContext } from "@/context/productsContext";
import { ProductsItemContext } from "@/context/productsItemContext";
import { RatingContext } from "@/context/ratingContext";
import type { Products, ProductsItem } from "@/lib/types";
import { Filter } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const productItemFilter = (
  productItem: ProductsItem[],
  filterVarient: { [key: string]: string }
) => {
  const filterVarientArray = Object.entries(filterVarient).filter(
    (item) => item[1] != "all"
  );

  return productItem.filter((pr) =>
    filterVarientArray.every(
      ([key, value]) => pr[key as keyof ProductsItem] === value
    )
  );
};

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

  const pathModel = (pathName?.model as string)?.replace(/-/g, " ");
  const product = products.find(
    (pr) => pr.capacityEName === pathCapacity && pr.categoryEName === pathModel
  );

  useEffect(() => {
    if (product?.id && rating.length > 0)
      dispatch({ type: "FILTER", payload: product?.id });
  }, [product?.id, dispatch]);

  const productsItemFiltered = productsItem.filter(
        (pr) =>
          pr.capacityEName === pathCapacity && pr.categoryEName === pathModel
      )
  const [productItem, setProductItem] = useState<ProductsItem[]>(productsItemFiltered);

  const [filterVarient, setFilterVarient] = useState({
    warranty: "all",
    partNumber: "all",
  });

  const changeVarientHandler = (name: string, value: string) => {
    console.log(filterVarient,'1')
    setFilterVarient((prev) => ({ ...prev, [name]: value }));
    setProductItem(productsItemFiltered)
  };

  useEffect(() => {
    console.log(productItem, "1");
    const newProductItem = productItemFilter(productItem, filterVarient);
    console.log(newProductItem, "2");
    setProductItem(newProductItem);
  }, [filterVarient]);

  const [activeCard, setActiveCard] = useState<number | null>(
    productItem?.length ? productItem[0].id : null
  );
  const activeCardHandler = (id: number) => {
    setActiveCard(id);
  };
  console.log(filterVarient,'2')
  return (
    <Container className="my-7">
      {product && <BreadCrumb product={product} />}
      <div className="flex flex-col-reverse xl:grid xl:grid-cols-12 gap-5 mt-7 ">
        <div className="flex flex-col gap-5 col-span-7">
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
          {product && (
            <VarientSelectors
              product={product}
              changeVarientHandler={changeVarientHandler}
              filterVarient={filterVarient}
            />
          )}

          <PriceCards
            productItem={productItem}
            activeCard={activeCard}
            activeCardHandler={activeCardHandler}
          />
        </div>
        <div className="col-span-5">
          <ProductImageSlider
            productItem={productItem}
            activeCard={activeCard}
          />
        </div>
      </div>
    </Container>
  );
};

export default React.memo(page);
