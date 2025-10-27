"use client";
import type { Products } from "@/lib/types";
import React, { useMemo, useState } from "react";
import Card from "./Card";
import Filter from "../filter/Filter";
import { cn } from "@/lib/utils";

interface Props {
  product: Products[];
  classNames?: string
}

const sortProduct = (product:Products[],filter: string) =>{
  return [...product].sort((a,b)=>{
    if (a.stock === 0 && b.stock >0) return 1
    if (b.stock ===0 && a.stock>0) return -1
    switch (filter){
      case "priceAsc":
        return a.minPrice - b.minPrice
      case  "priceDsc":
        return b.minPrice - a.minPrice
      default:
        return 0
    }
  })
}


const Cards = ({ product,classNames }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("default");

  const filterSelectHandler = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filterProduct =useMemo(()=> sortProduct(product,selectedFilter),[product,selectedFilter])

  return (
    <div className="flex flex-col gap-10 mt-12">
      <Filter
        onFilterSelect={filterSelectHandler}
        selectedFilter={selectedFilter}
      />
      <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mb-5", classNames)}>
        {filterProduct.map((item, index) => (
          <Card product={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Cards;
