'use client'
import type { ModalProperty, Rating as RatingType } from "@/lib/types";
import { Star } from "lucide-react";
import React, { useState } from "react";
import Text from "./Text";
import { useSession } from "next-auth/react";
import Modal from "./Modal";
import { fetchRating } from "@/lib/api";

interface Props {
  rating: RatingType[];
}
const Rating = ({ rating }: Props) => {
  const [modalProperty, setModalProperty] = useState<ModalProperty>({});
  const ratingNumber = Math.ceil(rating[0]?.avgRating ?? 0);
  const count = rating[0]?.count ?? 0
  const user = useSession()
  console.log(user.data)

  const  ratingHandler =async (index:number)=>{
    if(user.status === 'unauthenticated' ){
      setModalProperty({isOpen:true, text:'برای امتیاز دهی وارد حساب کاربری خود شوید', color:'red'})
    }else{
      // const res = await fetchRating()
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
        <Text className="text-xs" >{Number(Number(rating[0]?.avgRating ?? 0).toFixed(1)).toLocaleString("fa-IR")} از  {Number(count).toLocaleString("fa-IR")}</Text>
      </div>
      <Modal modalProperty={modalProperty} onClose={()=> setModalProperty({})}/>
    </div>
  );
};

export default Rating;
