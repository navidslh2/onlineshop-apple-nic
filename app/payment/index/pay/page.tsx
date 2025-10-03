"use client"
import Container from "@/components/ui/Container";
import { CartContext } from "@/context/cartContext";
import { fetchPayment } from "@/lib/api";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";

const Pay = () => {
    const route = useRouter()
    const cartContext = useContext(CartContext)
    const cartId = cartContext?.cartItems[0]?.cartId ?? 0
    const dispatch = cartContext?.dispatch ?? (()=>{})
  

    const successPaymentHandler= async()=>{
      await fetchPayment(cartId)
      dispatch({type:'payment'})
      route.push("/")
    }
  return (
    <Container>
      <div className="flex items-center justify-center gap-5 py-15">
        <button className="bg-blue-600  hover:bg-blue-400 hoverEffect p-2 flex items-center justify-center rounded-md text-white cursor-pointer" onClick={successPaymentHandler}>
          پرداخت موفق
        </button>
        <button className="bg-red-600  hover:bg-red-400 hoverEffect p-2 flex items-center justify-center rounded-md text-white cursor-pointer" onClick={()=> route.push('/payment/index')}>
          پرداخت ناموفق
        </button>
      </div>
    </Container>
  );
};

export default Pay;
