import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="group flex items-center font-bold gap-3 relative" href={"/"}>
      <img src="logo.png" alt="logo" className="w-10" />
      <span className="bg-gradient-to-l from-[#818f30] via-[#7aa596] to-[#80858a] bg-clip-text text-transparent group-hover:text-[#818f30] hoverEffect">
        نوید صالحی
      </span>
      <span className="hidden group-hover:block absolute bottom-[-30px] left-1/2 bg-white text-black p-1 whitespace-nowrap font-thin text-sm rounded-xs">صفحه اصلی</span>
    </Link>
  );
};

export default Logo;
