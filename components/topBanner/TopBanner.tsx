import type { Categories } from "@/lib/types";
import React from "react";
import Container from "../container/Container";
import Text from "../ui/Text";
import Image from "next/image";

interface Props {
  category: Categories;
}
const TopBanner = ({ category }: Props) => {
  const { name, eName, description, img } = category;
  return (
    <div className="bg-gray-200 h-[318px]">
      <Container>
        <div className="flex items-center  gap-8">
          <div className="flex flex-col justify-center  max-w-xl">
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
          <div className="relative w-[500px] h-[350px] flex-shrink-0 hidden md:flex">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
              alt="image"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
