import type { Products } from "@/lib/types";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import Colors from "./Colors";

const Card = ({ product_name, capacity, img, minPrice, colors }: Products) => {
  console.log(colors)
  return (
    <div className="bg-white rounded-xl px-2 py-5 lg:px-4 flex flex-col overflow-hidden justify-between gap-3 ">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
        alt="image"
        className="object-cover"
      />
      <Colors  colors={colors}/>
      <Text className="whitespace-nowrap">{product_name}</Text>
      <TextTitle className="whitespace-nowrap">
        {product_name + capacity}
      </TextTitle>
      <div className="flex justify-end textColor text-sm">
        <span>{minPrice?.toLocaleString("fa-IR")}</span>
        <span className="mr-1">تومان</span>
      </div>
    </div>
  );
};

export default Card;

