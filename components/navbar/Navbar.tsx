"use client";
import React, { useContext, useEffect, useState, type FC } from "react";
import Logo from "../logo/Logo";
import HeaderMenu from "../headerMenu/HeaderMenu";
import SearchBar from "../ui/SearchBar";
import CartIcon from "../ui/CartIcon";
import DropDownMenu from "../ui/DropDownMenu";
import MobileMenuIcon from "../ui/MobileMenuIcon";
import MenuBag from "./MenuBag";
import Backdrop from "../ui/Backdrop";
import { CartContext } from "@/context/cartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowMenuBag, setIsShowMenuBag] = useState<boolean>(false);
  const cartContext = useContext(CartContext)
  const cartItemCount = cartContext?.cartItems?.length ?? 0

  const closeDropDown = () => {
    setIsMobileMenuOpen(false);
  };
  const showMenuBagHandler = () => {
    setIsShowMenuBag(!isShowMenuBag);
  };
  return (
    <header className="relative">
      <Backdrop
        isShow={isShowMenuBag}
        showMenuBagHandler={showMenuBagHandler}
      />
      <div className="w-full fixed top-0 h-[60px] bg-black flex items-center lg:justify-center justify-between px-5 z-30 xl:gap-10 gap-5">
        <MobileMenuIcon
          onOpen={() => setIsMobileMenuOpen(true)}
          onClose={() => setIsMobileMenuOpen(false)}
          isOpen={isMobileMenuOpen}
        />
        <Logo mobileMenuHandler={()=>setIsMobileMenuOpen(false)}/>
        <HeaderMenu />
        <div className="flex items-center xl:gap-10 gap-5 xl:w-[70px] w-[50px] justify-end">
          <div className="sm:relative">
            {isMobileMenuOpen ? null : (
              <CartIcon showMenuBagHandler={showMenuBagHandler} cartItemCount={cartItemCount}/>
            )}
            <MenuBag
              isShowMenuBag={isShowMenuBag}
              showMenuBagHandler={showMenuBagHandler}
              cartItemCount={cartItemCount}
            />
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="relative">
        <DropDownMenu isOpen={isMobileMenuOpen} closeDropDown={closeDropDown} />
      </div>
    </header>
  );
};

export default Navbar;
