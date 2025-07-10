"use client";
import { AlignCenterIcon } from "lucide-react";
import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
        <AlignCenterIcon className="w-5 text-gray-300 hover:text-white hover:cursor-pointer hoverEffect  " />
      </button>
      <DropDownMenu onClose={()=> setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen}/> 
    </>
  );
};

export default MobileMenu;
