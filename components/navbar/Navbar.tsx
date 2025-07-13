"use client";
import React, { useState, type FC } from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import HeaderMenu from "../headerMenu/HeaderMenu";
import SearchBar from "../ui/SearchBar";
import CartIcon from "../ui/CartIcon";
import DropDownMenu from "../ui/DropDownMenu";
import MobileMenuIcon from "../ui/MobileMenuIcon";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      <div className="w-full relative h-[60px] bg-black flex items-center lg:justify-center justify-between px-5 z-50 xl:gap-10 gap-5">
        <MobileMenuIcon
          onOpen={() => setIsMobileMenuOpen(true)}
          onClose={() => setIsMobileMenuOpen(false)}
          isOpen={isMobileMenuOpen}
        />
        <Logo />
        <HeaderMenu />
        <div className="flex items-center xl:gap-10 gap-5 xl:w-[70px] w-[50px] justify-end">
          {isMobileMenuOpen ? null : <CartIcon />}
          <SearchBar />
        </div>
      </div>
      <DropDownMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
