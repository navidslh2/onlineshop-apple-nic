import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  price: number;
  stock: number;
  className?: string
  quantity?: number
  discount?: number
}
const Price = ({ price, stock, className, quantity, discount }: Props) => {
  const priceNmber = price.toLocaleString("fa-IR");
  const discountPrice = discount?.toLocaleString("fa-IR")
  let isInStock
  if (quantity){
    isInStock = quantity <= stock
  }else{
    isInStock = true
  } 
  return (
    <div className="pb-2">
      {stock && isInStock ? (
        <div>
          <div className={cn(`flex justify-end textColor text-[13px] gap-1 ${discount && discount >0 && "line-through"} font-bold`, className)}>
            <span>{priceNmber}</span>
            <span>تومان</span>
          </div>
          {discount && discount > 0 ? <div className={cn("flex justify-end text-red-600 text-[14px] gap-1 font-bold", className)}>
            <span>{discountPrice}</span>
            <span>تومان</span>
          </div> : ""}
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
