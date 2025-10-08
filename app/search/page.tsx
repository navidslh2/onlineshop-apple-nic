"use client";
import Container from "@/components/ui/Container";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Cards from "@/components/card/Cards";
import { ProductsContext } from "@/context/productsContext";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import Priceslider from "@/components/ui/Priceslider";


const SearchPage = () => {
 
  const searchParams = useSearchParams();
  const productscontext = useContext(ProductsContext);
  const products = productscontext?.products ?? [];
  const searchValueParams = searchParams?.get("product") ?? "";
  const [searchValue, setSearchValue] = useState(searchValueParams.trim());
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState({text:searchValue, toggle:toggle})
  


  const filteredProducts = useMemo(()=>products.filter(pr => pr.product_name.indexOf(searchValue) > -1),[products,searchValue])

  const toggleHandler = ()=>{
    setToggle(!toggle)
    setFilter(prev => ({...prev, toggle:!toggle}))
  }
  return (
    <div className="felx flex-col gap-10 items-center justify-center">
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-10 p-5 w-full  ">
        <h1 className="font-medium text-3xl m-auto">جستجو</h1>
        <div className="w-full md:max-w-[500px] xl:max-w-[800px] h-13 mx-5  relative">
          <input
            type="text"
            value={searchValue}
            className="bg-gray-200 rounded-sm w-full h-full pr-12 text-black/80"
            onChange={(e)=> setSearchValue(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 flex flex-col">
            <div className="flex gap-3 items-center pt-20 pb-3 border-b">
              <ToggleSwitch toggle={toggle} toggleHandler={toggleHandler} />
              <span className="text-sm">فقط کالاهای موجود</span>
            </div>
            <div>
              <Priceslider />
            </div>
          </div>
          <div className="col-span-3">
            {filteredProducts.length > 0 && <Cards product={filteredProducts} />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
