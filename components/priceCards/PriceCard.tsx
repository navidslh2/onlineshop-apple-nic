import type { ProductsItem } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Text from "../ui/Text";
import Price from "../ui/Price";

interface Props {
  productItem: ProductsItem;
  activeCard: number | null;
  activeCardHandler: (id: number) => void;
}

const PriceCard = ({ productItem, activeCard, activeCardHandler }: Props) => {
  const {
    id,
    url,
    productName,
    stock,
    price,
    color,
    warranty,
    partNumber,
    activeStatus,
  } = productItem;
  return (
    <div
      className={`grid grid-cols-[1fr_3fr] h-[120px] border rounded-2xl border-gray-400 group  ${
        stock === 0 ? "opacity-70 cursor-not-allowed" : " hover:border-blue-500"
      }${
        id === activeCard && stock !== 0
          ? " border-2 !border-blue-900 opacity-100"
          : ""
      }`}
      onClick={stock === 0 ? undefined : () => activeCardHandler(id)}
    >
      <div className="flex items-center justify-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${url}`}
          alt={productName}
          width={100}
          height={150}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className={`flex flex-col gap-1 justify-center opacity-70 ${
          stock === 0 ? "" : "group-hover:opacity-100 "
        } ${id === activeCard && stock !== 0 ? " !opacity-100" : ""}`}
      >
        {color && (
          <div className="flex ">
            <Text className="text-xs">رنگ:</Text>
            <Text className="text-xs text-black/70">{color}</Text>
          </div>
        )}
        {warranty && (
          <div className="flex">
            <Text className="text-xs">گارانتی:</Text>
            <Text className="text-xs">{warranty}</Text>
          </div>
        )}
        {partNumber && (
          <div className="flex">
            <Text className="text-xs">پارت نامبر:</Text>
            <Text className="text-xs">{partNumber}</Text>
          </div>
        )}
        {activeStatus && (
          <div className="flex">
            <Text className="text-xs">وضعیت اکتیو:</Text>
            <Text className="text-xs">{activeStatus}</Text>
          </div>
        )}
        <div className="ml-3">
          <Price
            stock={stock}
            price={price}
            className="text-md text-black font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
