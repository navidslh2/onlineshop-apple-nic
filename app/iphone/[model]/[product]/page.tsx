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
import type { ProductsItem } from "@/lib/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const sortProduct = (
  productsItem: ProductsItem[],
  capacityPath: string | string[] | undefined,
  productPath: string  | string[] | undefined,
  pathNameProduct?: string[] | string
) => {
  const stockSort = [...productsItem].sort((a, b) => {
    if (a.stock === 0 && b.stock > 0) return 1;
    if (b.stock === 0 && a.stock > 0) return -1;
    return 0;
  });
  return stockSort.filter((pr) => {
    if (!pr.capacity) {
      return pr.productEName.trim() === pathNameProduct;
    }
    return pr.capacityEName === capacityPath && pr.productEName.trim() === productPath;
  });
};

const varientFilter = (
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

const Product = () => {
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
  const capacityPath = pathName.product?.slice(
    pathName.product.lastIndexOf("-") + 1
  );
  const productPath = pathName.product?.slice(
    0,
    pathName.product?.lastIndexOf("-")
  );
  const pathNameProduct = pathName.product

  const product = products.find((pr) => {
    if (!pr.capacity) {
      return pr.productEName.trim() === pathName.product;
    }
    return pr.capacityEName === capacityPath && pr.productEName.trim() === productPath;

  });
  
  useEffect(() => {
    if (product?.id && rating.length > 0)
      dispatch({ type: "FILTER", payload: product?.id });
  }, [product?.id, dispatch]);

  const productsItemFiltered = sortProduct(
    productsItem,
    capacityPath,
    productPath,
    pathNameProduct
  );
  const [productItem, setProductItem] =
    useState<ProductsItem[]>(productsItemFiltered);
  const [filterVarient, setFilterVarient] = useState({
    warranty: "all",
    partNumber: "all",
    activeStatus: "all",
    color: "all",
  });

  const changeVarientHandler = (name: string, value: string) => {
    setFilterVarient((prev) => ({ ...prev, [name]: value }));
    setProductItem(productsItemFiltered);
  };

  useEffect(() => {
    const newProductItem = varientFilter(productItem, filterVarient);
    setProductItem(newProductItem);
  }, [filterVarient]);

  const [activeCard, setActiveCard] = useState<number | null>(
    productItem?.length ? productItem[0].id : null
  );
  const activeCardHandler = (id: number) => {
    setActiveCard(id);
  };
  console.log(product,'1')
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
              <TextTitle className="text-2xl">{`${product?.product_name}  ${product?.capacity ?  ` ظرفیت ${product?.capacity}`: ""} ${product?.simcard ? ` - ${product?.simcard}` : ""}`}</TextTitle>
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

export default React.memo(Product);
