import React from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import HeaderMenu from "../headerMenu/HeaderMenu";
import SearchBar from "../ui/SearchBar";
import CartIcon from "../ui/CartIcon";
import MobileMenu from "../ui/MobileMenu";



const Navbar = () => {
  return (
    <header>
      <Container className="w-full h-[60px] bg-black flex items-center lg:justify-center justify-between gap-5 px-5">
        <MobileMenu />
        <Logo />
        <HeaderMenu />
        <div className="flex items-center gap-5">
          <SearchBar />
          <CartIcon />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
