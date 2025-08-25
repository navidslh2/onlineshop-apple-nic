import React, { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { ProductsItem } from "@/lib/types";
import Image from "next/image";

interface Props {
  productItem: ProductsItem[];
}

const ProductImageSlider = ({ productItem }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full  bg-gray-100">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {productItem?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-gray-100"
          >
            <div className="relative w-full h-[500px] bg-transparent">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${item.url}`}
                alt={item.productName}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {productItem?.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center  bg-gray-100">
            <div className="relative h-20 w-20 bg-transparent">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${item.url}`}
                alt={item.productName}
                fill
                className="object-contain rounded-md border border-gray-200"
                sizes="80px"
                style={{background:"transparent"}}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
