"use client";
import { AlignCenterIcon, X } from "lucide-react";
import React, { useState, type FC } from "react";
import DropDownMenu from "./DropDownMenu";
interface Props {
  onOpen?: () => void;
  onClose?: () => void;
  isOpen: boolean;
}

const MobileMenuIcon: FC<Props> = ({ onOpen, onClose, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <button onClick={onClose}>
          <X className="w-5 text-gray-300 hover:text-white hoverEffect hover:cursor-pointer" />
        </button>
      ) : (
        <button className="lg:hidden" onClick={onOpen}>
          <AlignCenterIcon className="w-5 text-gray-300 hover:text-white hover:cursor-pointer hoverEffect  " />
        </button>
      )}
    </>
  );
};

export default MobileMenuIcon;
