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
import Link from "next/link";

interface cartProductsItem extends ProductsItem{
  quantity?:number
}

interface Props {
  cartProductItem: cartProductsItem;
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
    id,
    quantity,
    slug,
    discount
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
      
        <div  className="w-full h-[230px] pb-5 flex flex-col md:flex-row md:h-[150px] bg-white  justify-between gap-1 rounded-md p-2 shadow-md">
          <Link href={`/${slug}/${productEName}/${productEName}${capacityEName ? `-${capacityEName}`: ""}`} className="flex w-[380px] md:w-[240px] md:gap-0 lg:w-[320px] items-center gap-2">
            <div className="relative  w-full md:w-[120px] h-[130px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${url}`}
                fill
                alt={categoryEName}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col md:w-[130px] lg:w-[200px]">
              <TextTitle className="max-md:truncate md:line-clamp-4" >{`${productName}  ${
                capacity ? ` ظرفیت ${capacity}` : ""
              }`}</TextTitle>
              <Text className="line-clamp-3">{`${productEName} ${capacityEName && capacityEName}`}</Text>
            </div>
          </Link>
          <div className="flex items-center justify-end">
            <Price price={price} stock={stock} quantity={quantity} discount={discount} className="text-md md:flex-col lg:flex-row " />
          </div>
          <div className="flex gap-10 md:gap-2 lg:pl-5 lg:gap-8 xl:gap-10 items-center justify-center">
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
