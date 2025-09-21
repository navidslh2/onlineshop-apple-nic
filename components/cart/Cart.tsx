import type { ProductsItem } from "@/lib/types";
import Image from "next/image";
import React, { useContext } from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import Price from "../ui/Price";
import QuantitySelector from "../ui/QuantitySelector";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { CartContext } from "@/context/cartContext";
import { fetchDeletecartProduct } from "@/lib/api";

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
  const cartContext = useContext(CartContext);
  const dispatch = cartContext?.dispatch ?? (() => {});
  const { data } = useSession();
  const email = data?.user?.email ?? "";

  const deleteProductHandler = () => {
    dispatch({ type: "delete", payload: id });
    fetchDeletecartProduct(email, id);
  };

  return (
      
        <div className="w-full h-[230px] pb-5 flex flex-col md:flex-row xl:h-[150px] bg-white  justify-between gap-2 rounded-md p-2">
          <div className="flex w-[380px] md:w-[220px] items-center gap-2">
            <div className="relative  w-full md:w-[200px] h-[130px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${url}`}
                fill
                alt={categoryEName}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <TextTitle className="truncate md:line-clamp-2" >{`${productName}  ${
                capacity ? ` ظرفیت ${capacity}` : ""
              }`}</TextTitle>
              <Text className="md:line-clamp-2">{`${productEName} ${capacityEName && capacityEName}`}</Text>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Price price={price} stock={stock} className="text-md md:flex-col" />
          </div>
          <div className="flex gap-10 md:gap-1 items-center justify-center">
            {quantity && (
              <QuantitySelector
                quantity={quantity}
                productId={id}
                stock={stock}
              />
            )}
            <div className="cursor-pointer">
              <Trash2 size={15} className="text-red-800" onClick={deleteProductHandler} />
            </div>
          </div>
        </div>
     );
};

export default Cart;
