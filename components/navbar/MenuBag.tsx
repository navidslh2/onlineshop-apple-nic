import Link from "next/link";
import React from "react";
import CartIcon from "../ui/CartIcon";
import { CircleUser, ShoppingBag } from "lucide-react";

interface Props {
    isShowMenuBag:boolean
}
const MenuBag = ({isShowMenuBag}: Props) => {
  return (
    <>
        {isShowMenuBag && <div className="absolute flex flex-col gap-8 bg-white p-5 rounded-2xl top-11 -left-2 w-[300px] after:absolute after:content[''] after:bottom-full after:left-3 after:border-8 after:border-transparent after:border-b-white">
      <div className="bg-blue-800  hover:bg-blue-600 hoverEffect p-2 flex items-center justify-center rounded-md text-white">
        <Link href="#">تایید و ثبت سفارش</Link>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="flex items-center justify-start gap-2 font-thin text-sm text-blue-900 bored border-b  pb-5">
          <ShoppingBag size={20} strokeWidth={1} />
          <Link href="#" className="hover:underline">
            <span className="">سبد خرید</span>
            <span>(0)</span>
          </Link>
        </li>
        <li className="flex items-center justify-start gap-2 font-thin text-sm text-blue-900 ">
          <CircleUser size={20} strokeWidth={1} />
          <Link href="#" className="hover:underline">ورود</Link>
        </li>
      </ul>
    </div>}
    </>

  );
};

export default MenuBag;
