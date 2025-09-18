import Link from "next/link";
import React from "react";
import { CircleUser, ShoppingBag } from "lucide-react";
import { AnimatePresence, easeInOut, motion, scale } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

interface Props {
  isShowMenuBag: boolean;
  showMenuBagHandler: () => void;
}
const MenuBag = ({ isShowMenuBag, showMenuBagHandler }: Props) => {
  const { status } = useSession();
  console.log(status, "5");
  return (
    <AnimatePresence>
      {isShowMenuBag && (
        <motion.div
          className="absolute flex flex-col gap-8 bg-white p-5 rounded-2xl top-15  max-sm:left-0 max-sm:right-0 sm:top-11 sm:-left-2 sm:w-[300px] after:absolute after:content[''] after:bottom-full after:left-16 sm:after:left-3 after:border-8 after:border-transparent after:border-b-white origin-top z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}
        >
          <div className="bg-blue-800  hover:bg-blue-600 hoverEffect p-2 flex items-center justify-center rounded-md text-white">
            <Link href="/payment/index"  onClick={showMenuBagHandler}>تایید و ثبت سفارش</Link>
          </div>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center justify-start gap-2 font-thin text-sm text-blue-900 bored border-b  pb-5">
              <ShoppingBag size={20} strokeWidth={1} />
              <Link href="/payment/index" className="hover:underline" onClick={showMenuBagHandler}>
                <span className="/payment/index">سبد خرید</span>
                <span>(0)</span>
              </Link>
            </li>
            <li className="flex items-center justify-start gap-2 font-thin text-sm text-blue-900">
              <CircleUser size={20} strokeWidth={1} />
              {status === "authenticated" ? (
                <button className="hover:underline" onClick={() => {signOut({ redirect: false });showMenuBagHandler()}}>
                  خروج
                </button>
              ) : (
                <Link
                  href="/Account/login"
                  className="hover:underline"
                  onClick={showMenuBagHandler}
                >
                  ورود
                </Link>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuBag;
