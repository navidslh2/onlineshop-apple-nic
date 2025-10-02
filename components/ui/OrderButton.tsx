import Link from "next/link";
import React from "react";

interface Props{
    orderButtonHandler:()=> void
}

const OrderButton = ({orderButtonHandler}:Props) => {
  return (
    <div className="bg-blue-800  hover:bg-blue-600 hoverEffect p-2 flex items-center justify-center rounded-md text-white">
      <Link href="/payment/index" onClick={orderButtonHandler}>
        تایید و ثبت سفارش
      </Link>
    </div>
  );
};

export default OrderButton;
