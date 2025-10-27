
import { ShoppingBag } from "lucide-react";
import React  from "react";


interface Props {
  showMenuBagHandler: () => void;
  cartItemCount:number
}
const CartIcon = ({showMenuBagHandler, cartItemCount}:Props) => {

  return (
    <div className="relative" onClick={(showMenuBagHandler)}>
      <ShoppingBag className="w-5 text-gray-300 hover:text-white hoverEffect hover:cursor-pointer" />
      <span className="bg-gray-300 absolute w-[15px] h-[15px] text-xs flex justify-center items-center rounded-full -right-1 -bottom-1">
        {cartItemCount}
      </span>
    </div>
  );
};

export default CartIcon;
