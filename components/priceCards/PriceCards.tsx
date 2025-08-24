import React, { useState } from "react";
import PriceCard from "./PriceCard";
import type { ProductsItem } from "@/lib/types";

interface Props {
  productItem: ProductsItem[];
}

const PriceCards = ({ productItem }: Props) => {
  const [activeCard, setActiveCard] = useState<number | null>(productItem?.length ? productItem[0].id : null)
  const activeCardHandler = (id: number) =>{
    setActiveCard(id)
  }
  return (
    <div className="grid grid-cols-2 gap-3">
      {productItem.map( item => (
        <PriceCard productItem={item} key={item.id} activeCard={activeCard} activeCardHandler={activeCardHandler} />
      ))}
    </div>
  );
};

export default PriceCards;
