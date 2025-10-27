"use client";
import Container from "@/components/ui/Container";
import Modal from "@/components/ui/Modal";
import { CartContext } from "@/context/cartContext";
import { fetchPayment } from "@/lib/api";
import type { ModalProperty } from "@/lib/types";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";

const Pay = () => {
  const route = useRouter();
  const cartContext = useContext(CartContext);
  const cartId = cartContext?.cartItems[0]?.cartId ?? 0;
  const dispatch = cartContext?.dispatch ?? (() => {});
  const [modalProperty, setModalProperty] = useState<ModalProperty>({});

  const successPaymentHandler = async () => {
    setModalProperty({
      isOpen: true,
      text: "خرید شما با موفقیت انجام شد",
      color: "green",
    });
    await fetchPayment(cartId);
    dispatch({ type: "payment" });
    setTimeout(() => {
      route.push("/");
    },2000);
  };
  return (
    <Container>
      <div className="flex items-center justify-center gap-5 py-15">
        <button
          className="bg-blue-600  hover:bg-blue-400 hoverEffect p-2 flex items-center justify-center rounded-md text-white cursor-pointer"
          onClick={successPaymentHandler}
        >
          پرداخت موفق
        </button>
        <button
          className="bg-red-600  hover:bg-red-400 hoverEffect p-2 flex items-center justify-center rounded-md text-white cursor-pointer"
          onClick={() => route.push("/payment/index")}
        >
          پرداخت ناموفق
        </button>
      </div>
      <Modal
        modalProperty={modalProperty}
        onClose={() => setModalProperty({})}
      />
    </Container>
  );
};

export default Pay;
