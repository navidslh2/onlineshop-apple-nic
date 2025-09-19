import type { ProductsItem } from "@/lib/types";
import Image from "next/image";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import Price from "../ui/Price";
import QuantitySelector from "../ui/QuantitySelector";

interface Props {
  cartProductItem: ProductsItem;
}

const Cart = ({ cartProductItem }: Props) => {
  const {
    url,
    categoryEName,
    productName,
    capacity,
    productEName,
    capacityEName,
    price,
    stock,
    quantity,
    id,
  } = cartProductItem;
  console.log(cartProductItem);
  return (
    <>
      {stock ? (
        <div className="bg-white flex gap-2 rounded-md p-2">
          <div className="flex gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${url}`}
              width={50}
              height={50}
              alt={categoryEName}
            />
            <div className="flex flex-col">
              <TextTitle className="">{`${productName}  ${
                capacity ? ` ظرفیت ${capacity}` : ""
              }`}</TextTitle>
              <Text>{`${productEName} ${capacityEName && capacityEName}`}</Text>
            </div>
          </div>
          <div>
            <Price price={price} stock={stock} className="text-md"/>
          </div>
          <div>
            
            {quantity && <QuantitySelector quantity={quantity} id={id} stock={stock}/>}
          </div>
        </div>
      ):""}
    </>
  );
};

export default Cart;
