import type { Products } from "@/lib/types";
import Image from "next/image";
import React from "react";
import TextTitle from "../ui/TextTitle";
import Link from "next/link";

interface props {
  productsearched: Products;
  searchClickHandler:()=> void
}

const SearchResult = ({ productsearched , searchClickHandler}: props) => {
  const { img, product_name, monitorSize, capacity, simcard, slug, productEName, capacityEName, categoryEName} = productsearched;
  const catEName = categoryEName?.replace(/\s+/g ,'-')
  return (
    <Link href={`/${slug}/${catEName}/${productEName}${capacityEName ? `-${capacityEName}`: ""}`} className="bg-white w-full h-[70px] flex items-center justify-start p-3 gap-2" onClick={searchClickHandler}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${img}`}
        alt="image"
        width={60}
        height={60}
        className="object-contain "
        sizes="(min-width: 1280px) 75vw, 100vw"
      />

      <TextTitle>
        {`${product_name} ${monitorSize ? monitorSize : ""} ${
          capacity ? capacity : ""
        } ${simcard ? simcard : ""}`}
      </TextTitle>
    </Link>
  );
};

export default SearchResult;
