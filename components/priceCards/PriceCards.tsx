import React, { useState } from "react";
import PriceCard from "./PriceCard";
import type { ProductsItem } from "@/lib/types";

interface Props {
  productItem: ProductsItem[];
  activeCard:number | null
  activeCardHandler: (id : number)=> void

}

const PriceCards = ({ productItem, activeCard, activeCardHandler }: Props) => {

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
      {productItem.map( item => (
        <PriceCard productItem={item} key={item.id} activeCard={activeCard} activeCardHandler={activeCardHandler} />
      ))}
    </div>
  );
};

export default PriceCards;
