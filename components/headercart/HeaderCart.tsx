import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderCart = () => {
  return (
    <div className="flex items-center gap-5">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 text-gray-300 hover:text-white hoverEffect" />
      <FontAwesomeIcon icon={faCartShopping} className="w-5 text-gray-300 hover:text-white hoverEffect" />
    </div>
  );
};

export default HeaderCart;
