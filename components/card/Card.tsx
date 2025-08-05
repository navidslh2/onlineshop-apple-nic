import type { Products } from "@/lib/types";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import Colors from "./Colors";
import Link from "next/link";
import "./cards.scss";
import Image from "next/image";

const Card = ({
  product_name,
  capacity,
  img,
  minPrice,
  colors,
  brand,
  simcard,
}: Products) => {
  return (
    <div>
      <Link href="/">
        <div className="bg-white h-[200px] rounded-xl px-2 pb-5 grid grid-cols-2 gap-4 md:hidden max-w-[500px] ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-full h-full relative ">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
                alt="image"
                fill
                className="object-contain"
              />
            </div>
            <Colors colors={colors} />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Text>
              {product_name} | {brand}
            </Text>
            <TextTitle>
              {`${product_name + capacity}`} - {simcard}
            </TextTitle>
            <div className="flex justify-end textColor text-sm">
              <span>{minPrice?.toLocaleString("fa-IR")}</span>
              <span className="mr-1">تومان</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="bg-white hidden md:flex flex-col md:px-4 md:h-[300px] rounded-xl px-2 gap-4 lg:px-4 overflow-hidden justify-center">
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-[100%] aspect-[1/1] relative ">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
                alt="image"
                fill
                className="object-contain "
              />
            </div>
            <Colors colors={colors} />
          </div>
          <div className="flex flex-col gap-4">
            <Text className="truncate ">
              {product_name} | {brand}
            </Text>
            <TextTitle className="line-clamp-2">
              {`${product_name + capacity}`} - {simcard}
            </TextTitle>
            <div className="flex justify-end textColor text-[13px]">
              <span>{minPrice?.toLocaleString("fa-IR")}</span>
              <span className="mr-1">تومان</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
