"use client";
import Container from "@/components/ui/Container";
import React, { useContext, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Cards from "@/components/card/Cards";
import { ProductsContext } from "@/context/productsContext";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const productscontext = useContext(ProductsContext)
  const products = productscontext?.products ?? []
  

  const searchValueParams = searchParams?.get("product");
  useEffect(() => {
    searchValueParams && setSearchValue(searchValueParams);
  }, []);
  return (
    <div className="felx flex-col gap-10 items-center justify-center">
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-10 p-5 w-full  ">
        <h1 className="font-medium text-3xl m-auto">جستجو</h1>
        <div className="w-full md:max-w-[500px] xl:max-w-[800px] h-13 mx-5  relative">
          <input type="text" value={searchValue} className="bg-gray-200 rounded-sm w-full h-full pr-12 text-black/80" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <Container>
        {products && <Cards product={products} />}
      </Container>
    </div>
  );
};

export default SearchPage;
