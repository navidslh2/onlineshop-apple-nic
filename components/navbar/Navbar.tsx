"use client";
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
} from "react";
import Logo from "../logo/Logo";
import HeaderMenu from "../headerMenu/HeaderMenu";
import SearchBar from "../ui/SearchBar";
import CartIcon from "../ui/CartIcon";
import DropDownMenu from "../ui/DropDownMenu";
import MobileMenuIcon from "../ui/MobileMenuIcon";
import MenuBag from "./MenuBag";
import Backdrop from "../ui/Backdrop";
import { CartContext } from "@/context/cartContext";
import SearchField from "../search/SearchField";
import SearchResults from "../search/SearchResults";
import { ProductsContext } from "@/context/productsContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowMenuBag, setIsShowMenuBag] = useState<boolean>(false);
  const cartContext = useContext(CartContext);
  const cartItemCount = cartContext?.cartItems?.length ?? 0;
  const [activeSearchbar, setActiveSearchbar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const productsContext = useContext(ProductsContext);
  const products = productsContext?.products ?? [];
  const route = useRouter()
  const productsearched =  products.filter((pr) => pr.product_name.indexOf(searchValue) > -1) 


  const closeDropDown = () => {
    setIsMobileMenuOpen(false);
  };
  const showMenuBagHandler = () => {
    setIsShowMenuBag(!isShowMenuBag);
    setShowBackdrop(!showBackdrop);
  };

  const backdropHandler = () => {
    setIsShowMenuBag(false);
    setShowBackdrop(!showBackdrop);
    setActiveSearchbar(false);
 
  };

  const activeSearchbarHandler = () => {
    setSearchValue("");
    setActiveSearchbar(true);
    setShowBackdrop(true);
  };

  const searchEnter = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === "Enter"){
      e.preventDefault()
      route.push(`/search?product=${encodeURIComponent(searchValue)}`)
      setShowBackdrop(false)
      setActiveSearchbar(false)
    }
  }

  return (
    <header className="relative">
      <Backdrop isShow={showBackdrop} backdropHandler={backdropHandler} />
      <div className="w-full fixed top-0 h-[60px] bg-black flex items-center lg:justify-center justify-between px-5 z-30 xl:gap-10 gap-5">
        {!activeSearchbar ? (
          <div className="w-full flex items-center lg:justify-center justify-between px-5 xl:gap-10 gap-5">
            <MobileMenuIcon
              onOpen={() => setIsMobileMenuOpen(true)}
              onClose={() => setIsMobileMenuOpen(false)}
              isOpen={isMobileMenuOpen}
            />

            <Logo mobileMenuHandler={() => setIsMobileMenuOpen(false)} />

            <HeaderMenu />

            <div className="flex items-center xl:gap-10 gap-5 xl:w-[70px] w-[50px] justify-end">
              <div className="sm:relative">
                {isMobileMenuOpen ? null : (
                  <CartIcon
                    showMenuBagHandler={showMenuBagHandler}
                    cartItemCount={cartItemCount}
                  />
                )}
                <MenuBag
                  isShowMenuBag={isShowMenuBag}
                  showMenuBagHandler={showMenuBagHandler}
                  cartItemCount={cartItemCount}
                />
              </div>
              <SearchBar activeSearchbarHandler={activeSearchbarHandler} />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <div className="relative w-full md:w-[70%] h-[80%] ">
              <SearchField
                searchValue={searchValue}
                inputValueHandler={(e) => setSearchValue(e.target.value.trim())}
                searchEnter={searchEnter}
              />
              {searchValue && <div className="absolute  right-0 left-0  top-[120%] ">
                <SearchResults productsearched={productsearched} searchClickHandler={backdropHandler} />
              </div>}
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <DropDownMenu isOpen={isMobileMenuOpen} closeDropDown={closeDropDown} />
      </div>
    </header>
  );
};

export default Navbar;
