import type { Categories } from "@/lib/types";
import React from "react";
import Container from "../ui/Container";
import Text from "../ui/Text";
import Image from "next/image";
import { cn } from "@/lib/utils";


interface Props {
  category: Categories;
  imageClassName?:string
}
const TopBanner = ({ category ,imageClassName}: Props) => {
  const { name, eName, description, img } = category;
  return (
    <div className="bg-gray-200 h-[318px]">
      <Container>
        <div className="flex items-center  xl:gap-8">
          <div className="!flex flex-col justify-center h-[318px] max-w-xl">
            {name && eName && (
              <p className="font-medium text-xl">
                <span>{name}</span> |{" "}
                <span className="text-black/60">{eName}</span>
              </p>
            )}
            {description && (
              <Text className="text-justify mt-2">{description}</Text>
            )}
          </div>
          <div className={cn("relative  flex-shrink-0 hidden md:flex",imageClassName)}>
            {img && (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
                alt="image"
                width={500}
                height={350}
                className="object-contain "
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
