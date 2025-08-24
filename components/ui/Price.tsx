import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  price: number;
  stock: number;
  className?: string
}
const Price = ({ price, stock, className }: Props) => {
  const priceNmber = price.toLocaleString("fa-IR");
  return (
    <div>
      {stock ? (
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
