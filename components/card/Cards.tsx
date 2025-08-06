import type { Categories, Products } from "@/lib/types";
import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./cards.scss";

interface Props {
  product: Products[];
  category: Categories;
}
const Cards = ({ product, category }: Props) => {
  console.log(product)
  return (
    <div >
      <CardTitle category={category} />
      <Swiper
        
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4.4}
        breakpoints={{
          0: { slidesPerView: 1.1, navigation: { enabled: false } },
          768: { slidesPerView: 4.4, navigation: { enabled: true } },
        }}
      >
        {product.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              
              product_name={item.product_name}
              capacity={item.capacity}
              img={item.img}
              minPrice={item.minPrice}
              colors={item.colors}
              brand={item.brand}
              simcard={item.simcard}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
