"use client";
import type { Categories, Products } from "@/lib/types";
import React, { useState } from "react";
import Card from "./Card";
import Filter from "../filter/Filter";

interface Props {
  product: Products[];
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

const Cards = ({ product }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [filterProduct, setFilterProduct] = useState<Products[]>(product);

  const filterSelectHandler = (filter: string) => {
    setSelectedFilter(filter);
    setFilterProduct(sortProduct(product,filter))
  };
  return (
    <div className="flex flex-col gap-10 mt-12">
      <Filter
        onFilterSelect={filterSelectHandler}
        selectedFilter={selectedFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        {filterProduct.map((item, index) => (
          <Card product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
