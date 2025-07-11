import React, { type FC } from "react";
import { headerData } from "@/constants/data";
import Link from "next/link";
interface Props {
  isOpen: boolean;
}

const DropDownMenu: FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={`bg-black absolute top-[30px] inset-x-0 bottom-0 p-4 lg:hidden z-40 transition-all duration-700 ease-in-out ${
        isOpen ? "translate-y-0 visible" : "-translate-y-[120%] invisible"
      } `}
    >
      <ul className="py-10 px-5">
        {headerData.map((item) => (
          <li key={item.id}>
            <Link
              className="group flex items-center gap-4 border-b border-b-gray-500 pb-3 mb-3"
              href={item.href}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.tooltip} className="w-6 h-6 " />
              ) : null}
              <p className="text-gray-300 text-sm group-hover:text-white group-hover:cursor-pointer">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
