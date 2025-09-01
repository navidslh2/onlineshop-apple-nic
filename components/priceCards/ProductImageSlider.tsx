import React, { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { ProductsItem } from "@/lib/types";
import Image from "next/image";
import "./productImageSlider.scss";

interface Props {
  productItem: ProductsItem[];
  activeCard: number | null;
}

const ProductImageSlider = ({ productItem,activeCard }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const images = productItem.map( item => item.url)
  const uniqueImages = [...new Set(images) ]
  

  useEffect(()=>{
    if (activeCard && mainSwiper) {
      const activeProduct: ProductsItem | undefined = productItem?.find(item => item.id === activeCard)
      const index = uniqueImages.findIndex(item => item === activeProduct?.url)
      if (index !== -1){
        mainSwiper.slideTo(index)
      }
    }
  },[activeCard,mainSwiper,productItem])
  return (
    <div className="w-full  bg-gray-100">
      <Swiper
        onSwiper={setMainSwiper}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {uniqueImages?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-gray-100"
          >
            <div className="relative w-full h-[500px] bg-transparent">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${item}`}
                alt={item || "product"}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={uniqueImages.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {uniqueImages?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-gray-100"
          >
            <div className="relative h-20 w-20 bg-transparent">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${item}`}
                alt={item || "product"}
                fill
                className="object-contain rounded-md border border-gray-200"
                sizes="80px"
                style={{ background: "transparent" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
