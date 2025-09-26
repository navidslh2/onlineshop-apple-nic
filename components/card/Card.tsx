import type { Products } from "@/lib/types";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import Colors from "./Colors";
import Link from "next/link";
import Image from "next/image";
import Price from "../ui/Price";

interface Props {
  product: Products;
}

const Card = ({ product }: Props) => {
  const {
    product_name,
    brand,
    capacity,
    simcard,
    minPrice,
    img,
    colors,
    stock,
    slug,
    categoryEName,
    capacityEName,
    productEName,
    discount
  } = product;
  const catEName = categoryEName?.replace(/\s+/g ,'-')
  return (
    <div>
      <Link href={`/${slug}/${catEName}/${productEName}${capacityEName ? `-${capacityEName}`: ""}`}>
        <div className="bg-white h-[200px] max-w-[500px] rounded-xl px-2 pb-5 grid grid-cols-2 md:flex md:flex-col md:px-4 md:h-[300px]  lg:h-[350px]  lg:px-4 lg:pb-3 lg:max-w-[250px] 2xl:max-w-[300px] gap-4">
          <div className="flex flex-col gap-1">
            <div className="mx-auto w-full h-full md:aspect-[1/1] relative xl:w-[75%]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
                alt="image"
                fill
                className="object-contain "
                sizes="(min-width: 1280px) 75vw, 100vw"
              />
            </div>
            <Colors colors={colors} />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <Text className="md:truncate ">
              {product_name} | {brand}
            </Text>
            <TextTitle className="md:line-clamp-2">
              {`${product_name + capacity}`} - {simcard}
            </TextTitle>
            <Price stock={stock} price={minPrice} discount={discount}/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
