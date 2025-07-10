import { X } from "lucide-react";
import React, { type FC } from "react";
import Logo from "../logo/Logo";
import SearchBar from "./SearchBar";
import { headerData } from "@/constants/data";
interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const DropDownMenu: FC<Props> = ({ onClose, isOpen }) => {
  return (
    <div className={`bg-black  fixed inset-0 p-4 lg:hidden z-50   transition-all duration-700 ease-in-out ${isOpen? "translate-y-0": "-translate-y-full"} `}>
      <div className="flex items-center justify-between">
        <button onClick={onClose}>
          <X className="w-5 text-gray-300 hover:text-white hoverEffect hover:cursor-pointer" />
        </button>
        <Logo />
        <SearchBar />
      </div>
      <div className="py-10 px-5">
        {headerData.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 border-b border-b-gray-500 pb-3 mb-3"
          >
            {item.logo ? (
              <img src={item.logo} alt={item.tooltip} className="w-6 h-6 " />
            ) : null}
            <p className="text-gray-300 text-sm group-hover:text-white group-hover:cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
