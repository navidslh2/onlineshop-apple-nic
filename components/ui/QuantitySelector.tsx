import { CartContext } from "@/context/cartContext";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { fetchChangeQuentity } from "@/lib/api";
import { useSession } from "next-auth/react";
import type { ModalProperty } from "@/lib/types";

interface Props {
  quantity: number;
  productId: number;
  stock: number;
}


const QuantitySelector = ({ quantity, productId, stock }: Props) => {
  const cartContext = useContext(CartContext);
  const dispatch = cartContext?.dispatch ?? (() => {});
  const [modalProperty, setModalProperty] = useState<ModalProperty>({});
  const { data } = useSession();
  const email = data?.user?.email ?? "";

  const addproduct = () => {
    if (quantity < stock) {
      dispatch({ type: "increasequantity", payload: productId });
      fetchChangeQuentity(quantity + 1, email, productId);
      return
    }
    const newModal = {isOpen: true, text: `تعداد ${stock} از این محصول موجود میباشد`, color: "red" as const,
  };

  if (modalProperty.isOpen) {
    setTimeout(() => setModalProperty(newModal), 300);
  } else {
    setModalProperty(newModal);
  }
  };

  const removeProduct = () => {
    if (quantity != 1) {
      dispatch({ type: "reducequantity", payload: productId });
      fetchChangeQuentity(quantity-1, email, productId);
    } else {
      setModalProperty({
        isOpen: true,
        text: "تعداد سفارش نمیتواند کمتر از یک باشد",
        color: "red",
      });
    }
  };
  return (
    <div className="flex gap-2 w-[80px] md:w-full items-center justify-between bg-black/10 px-2 rounded-xl">
      <button className="text-blue-800 cursor-pointer" onClick={addproduct}>
        +
      </button>
      <span className="text-gray-400 text-sm">
        {quantity.toLocaleString("fa-IR")}
      </span>
      <button className="text-blue-800 cursor-pointer" onClick={removeProduct}>
        -
      </button>
      <Modal
        modalProperty={modalProperty}
        onClose={() => setModalProperty({})}
      />
    </div>
  );
};

export default QuantitySelector;
