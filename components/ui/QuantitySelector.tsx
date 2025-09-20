import { CartContext } from "@/context/cartContext";
import React, { useContext, useState } from "react";
import Loading from "../loading/Loading";
import Modal from "./Modal";

interface Props {
  quantity: number;
  id: number;
  stock: number
}

interface ModalProperty{
  isOpen?: boolean
  text?:string
  color?:string
}

const QuantitySelector = ({ quantity, id, stock }: Props) => {
  const cartContext = useContext(CartContext)
  const dispatch = cartContext?.dispatch ?? (()=>{})
  const [modalProperty, setModalProperty] = useState<ModalProperty>({})

  const addproduct = () => {
    quantity < stock ?  dispatch({type:'increasequantity', payload:id}) : setModalProperty({isOpen: true,text:`تعداد ${stock}از این محصول موجود میباشد`, color: "red"})
  };

  const removeProduct =()=>{
    quantity !=1 ? dispatch({type:'reducequantity' , payload: id}) : setModalProperty({isOpen: true,text:'تعداد سفارش نمیتواند کنتر از یک باشد' ,color: "red"})
  }
  return (
    <div className="flex gap-2 items-center bg-black/10 px-2 rounded-xl">
      <button className="text-blue-800 cursor-pointer" onClick={addproduct}>
        +
      </button>
      <span className="text-gray-400 text-sm">{quantity.toLocaleString("fa-IR")}</span>
      <button className="text-blue-800 cursor-pointer" onClick={removeProduct}>-</button>
      <Modal modalProperty={modalProperty} onClose={()=>setModalProperty({})}/>
    </div>
  );
};

export default QuantitySelector;
