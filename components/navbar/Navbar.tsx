import React from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import HeaderMenu from "../headerMenu/HeaderMenu";
import HeaderCart from "../headercart/HeaderCart";


const Navbar = () => {
  return (
    <header>
      <Container className="w-full h-[60px] bg-black flex items-center justify-center gap-5">
        <Logo />
        <HeaderMenu />
        <HeaderCart />
      </Container>
    </header>
  );
};

export default Navbar;
