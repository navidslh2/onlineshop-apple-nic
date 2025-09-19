import { CartContext } from "@/context/cartContext";
import React, { useContext } from "react";
import Loading from "../loading/Loading";

interface Props {
  quantity: number;
  id: number;
  stock: number
}

const QuantitySelector = ({ quantity, id, stock }: Props) => {
  const cartContext = useContext(CartContext)
  if (!cartContext) return<Loading />
  const {dispatch} = cartContext

  const addproduct = () => {
    quantity < stock &&  dispatch({type:'increasequantity', payload:id})
  };

  const removeProduct =()=>{
    quantity !=1 && dispatch({type:'reducequantity' , payload: id})
  }
  return (
    <div className="flex gap-2 items-center bg-black/10 px-2 rounded-xl">
      <button className="text-blue-800 cursor-pointer" onClick={addproduct}>
        +
      </button>
      <span className="text-gray-400 text-sm">{quantity.toLocaleString("fa-IR")}</span>
      <button className="text-blue-800 cursor-pointer" onClick={removeProduct}>-</button>
    </div>
  );
};

export default QuantitySelector;
