import React, { type FC } from "react";
import { headerData } from "@/lib/data";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  isOpen: boolean;
  closeDropDown: () => void;
}

const DropDownMenu = ({ isOpen, closeDropDown }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bg-black w-screen h-screen top-[60px] origin-top z-20"
          initial={{ translateY: "-120%" }}
          animate={{ translateY: 0 }}
          exit={{ translateY: "-120%"}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <ul className="py-4 px-5">
            {headerData.map((item) => (
              <li key={item.id}>
                <Link
                  className="group flex items-center gap-4 border-b border-b-gray-500 pb-3 mb-3"
                  href={item.href}
                  onClick={closeDropDown}
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.tooltip}
                      className="w-6 h-6 "
                    />
                  ) : null}
                  <p className="text-gray-300 text-sm group-hover:text-white group-hover:cursor-pointer">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDownMenu;
