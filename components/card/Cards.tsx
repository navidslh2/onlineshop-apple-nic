import type { Categories, Products } from "@/lib/types";
import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./cards.scss"

interface Props {
  product: Products[];
  category: Categories;
}
const Cards = ({ product, category }: Props) => {
  return (
    <div className="overflow-visible">
      <CardTitle category={category} />
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4}
  
      >
        {product.map((item, index) => (
          <SwiperSlide>
            <Card
              key={index}
              product_name={item.product_name}
              capacity={item.capacity}
              img={item.img}
              minPrice={item.minPrice}
              colors={item.colors}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
