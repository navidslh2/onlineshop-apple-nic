import React, { useState } from "react";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import type { ModalProperty, Products, ProductsItem } from "@/lib/types";
import Price from "../ui/Price";
import { useRouter } from "next/navigation";
import Modal from "../ui/Modal";

interface cartProductsItem extends ProductsItem{
  quantity:number
}

interface Props {
  cartProductsItem: cartProductsItem[];
}

const Invoice = ({ cartProductsItem }: Props) => {
    const [modalProperty, setModalProperty] = useState<ModalProperty>({});
  
  const router = useRouter()
  let totalprice = 0;
  let totalDiscount = 0
  cartProductsItem?.forEach(
    (item) =>{
      totalprice = totalprice + (item.stock ? item.price * (item.quantity ?? 0) : 0)
      totalDiscount = totalDiscount + (item.discount ? item.price - item.discount : 0)
});

  const paymentOrderHandler =()=>{
    const isinStock = cartProductsItem.every(item => item.quantity <= item.stock)
    if(isinStock){
      router.push("/payment/index/pay")
    }else{
      setModalProperty({isOpen:true,text:"در سبد خرید کالایی وجد دارد که در انبار موحود نیست",color:"red"})
    }}

  return (
    <div className="flex flex-col gap-4 py-6 ">
      <Text className="border-b pb-5">صورتحساب</Text>
      <div >
        <div className="flex items-center gap-2 border-b pb-5">
        <Text>قیمت کل:</Text>
        <Price price={totalprice} stock={1} />
        </div>
        <div className="flex items-center gap-2 border-b pb-5">
        <Text> تخفیف:</Text>
        <Price price={totalDiscount} stock={1} />
        </div>

      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2 ">
        <TextTitle className="font-bold text-lg">جمع سبد خرید:</TextTitle>
        <Price price={totalprice - totalDiscount} stock={1} className="text-lg text-black/80" />
      </div>
      <button className="bg-blue-800  hover:bg-blue-600 hoverEffect p-2 flex items-center justify-center rounded-md text-white" onClick={paymentOrderHandler}>تایید و ثبت سفارش</button>
     <Modal
        modalProperty={modalProperty}
        onClose={() => setModalProperty({})}
      />
    </div>
  );
};

export default Invoice;
