import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  price: number;
  stock: number;
  className?: string
  quantity?: number
}
const Price = ({ price, stock, className, quantity }: Props) => {
  const priceNmber = price.toLocaleString("fa-IR");
  let isInStock
  if (quantity){
    isInStock = quantity <= stock
  }else{
    isInStock = true
  } 

  return (
    <div >
      {stock && isInStock ? (
        <div className={cn("flex justify-end textColor text-[13px] gap-1 font-bold", className)}>
          <span>{priceNmber}</span>
          <span>تومان</span>
        </div>
      ) : (
        <div className="flex justify-end text-blue-800 text-[15px]">
          <span className={cn("",className)}>ناموجود</span>
        </div>
      )}
    </div>
  );
};

export default Price;
