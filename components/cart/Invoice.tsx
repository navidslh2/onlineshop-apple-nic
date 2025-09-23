import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import type { Products, ProductsItem } from "@/lib/types";
import Price from "../ui/Price";

interface Props {
  cartProductsItem: ProductsItem[];
}

const Invoice = ({ cartProductsItem }: Props) => {
  let totalprice = 0;
  console.log(cartProductsItem);
  cartProductsItem?.forEach(
    (item) =>
      (totalprice =
        totalprice + (item.stock ? item.price * (item.quantity ?? 0) : 0))
  );
  return (
    <div className="flex flex-col gap-4 py-6 ">
      <Text className="border-b pb-5">صورتحساب</Text>
      <div className="flex items-center gap-2 border-b pb-5">
        <Text>قیمت کل:</Text>
        <Price price={totalprice} stock={1} />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2 ">
        <TextTitle className="font-bold text-lg">جمع سبد خرید:</TextTitle>
        <Price price={totalprice} stock={1} className="text-lg text-black/80" />
      </div>
      <button className="bg-blue-800  hover:bg-blue-600 hoverEffect p-2 flex items-center justify-center rounded-md text-white">تایید و ثبت سفارش</button>
    </div>
  );
};

export default Invoice;
