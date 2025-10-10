'use client'
import type { ModalProperty, Products, Rating as RatingType } from "@/lib/types";
import { Star } from "lucide-react";
import React, { useContext, useState } from "react";
import Text from "./Text";
import { useSession } from "next-auth/react";
import Modal from "./Modal";
import { fetchRating } from "@/lib/api";
interface Props {
  rating?: RatingType;
  product: Products;
}
const Rating = ({ rating, product }: Props) => {
  const {category_id} = product
  const [modalProperty, setModalProperty] = useState<ModalProperty>({});
  const ratingNumber = Math.ceil(rating?.avgRating ?? 0);
  const count = rating?.count ?? 0
  const user = useSession()
  const email = user?.data?.user?.email ?? ''



  const  ratingHandler =async (index:number)=>{
    const rating = index+1
    if(user.status === 'unauthenticated' ){
      setModalProperty({isOpen:true, text:'برای امتیاز دهی وارد حساب کاربری خود شوید', color:'red'})
    }else{ 
      const res = await fetchRating(email, category_id, rating)
      console.log(res)
      if(res.success) {
          setModalProperty({isOpen:true, text:'امتیاز شما با موفقیت ثبت شد', color:'green'})
      }
    }
  }
  return (
    <div className="flex gap-3">
      <Text className="font-bold">امتیاز:</Text>
      <div className="flex cursor-pointer">
        {[...Array(5)].map((_, index) => (
          <Star
            size={15}
            key={index}
            className={`${
              index < ratingNumber
                ? "fill-blue-600 text-blue-600"
                : "fill-gray-300  text-gray-300"
            }`}
            onClick={()=>ratingHandler(index)}
          />
        ))}
      </div>
      <div>
        <Text className="text-xs" >{Number(Number(rating?.avgRating ?? 0).toFixed(1)).toLocaleString("fa-IR")} از  {Number(count).toLocaleString("fa-IR")}</Text>
      </div>
      <Modal modalProperty={modalProperty} onClose={()=> setModalProperty({})}/>
    </div>
  );
};

export default Rating;
