"use client"
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const HeaderMenu = () => {
  const pathName = usePathname()
  return (
    <div className="hidden lg:flex text-gray-300 text-[13px] gap-5  ">
      {headerData.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="group hover:text-white hoverEffect relative "
        >
          {item.title}
          <span className="hidden group-hover:block absolute bottom-[-30px] left-1/2 bg-white text-black p-1 whitespace-nowrap capitalize hoverEffect rounded-xs">
            {item.tooltip}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
