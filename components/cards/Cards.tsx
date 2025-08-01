import type { Categories, Products } from "@/lib/types";
import React from "react";
import Card from "../card/Card";
import CardTitle from "../cardTitle/CardTitle";

interface Props {
  product: Products[];
  category: Categories;
}
const Cards = ({ product, category }: Props) => {
  
  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <CardTitle category={category} />
      <div className="flex gap-4">
        {product.map((item, index) => (
          <Card
            key={index}
            product_name={item.product_name}
            capacity={item.capacity}
            img={item.img}
            minPrice={item.minPrice}
            colors={item.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
