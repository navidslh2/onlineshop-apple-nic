import type { Products } from "@/lib/types";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import { cn } from "@/lib/utils";
import { span } from "framer-motion/client";

const Card = ({ product_name, capacity, img, minPrice, colors }: Products) => {
  const colorCods = colors?.split(",")
  return (
    <div className="bg-white rounded-xl px-2 py-5 lg:px-4 flex flex-col justify-between gap-3 w-[150px]">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
        alt="image"
        className="object-cover"
      />
      <div className="flex justify-center gap-2">
        {colorCods?.map(item =>(
         <span
          key={item}
          className="relative after:content-[''] after:block after:w-2.5 after:h-2.5 after:rounded-full "
        >
          <span
            className="absolute w-2.5 h-2.5 rounded-full shadow-inner shadow-black/40"
            style={{ backgroundColor: item }}
          ></span>
        </span>
  ))}
      
      </div>
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

// className={`relative after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:rounded-full  after:bg-amber-700`}