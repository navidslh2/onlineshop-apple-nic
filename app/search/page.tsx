"use client";
import Container from "@/components/ui/Container";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Cards from "@/components/card/Cards";
import { ProductsContext } from "@/context/productsContext";
import type { Products } from "@/lib/types";
import SearchFilter from "@/components/ui/SearchFilter";

const filterProducts = (
  products: Products[],
  filter: { text: string; toggle: boolean; price: number[] }
) => {
  return products.filter((pr) => {
    const text = pr.product_name.indexOf(filter.text) > -1;
    const stock = filter.toggle === false || pr.stock > 0;
    const price =
      pr.minPrice >= filter.price[0] && pr.minPrice <= filter.price[1];

    return text && stock && price;
  });
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const productscontext = useContext(ProductsContext);
  const products = productscontext?.products ?? [];
  const searchValueParams = searchParams?.get("product") ?? "";
  const [filter, setFilter] = useState({
    text: searchValueParams.trim(),
    toggle: false,
    price: [0, Infinity],
  });

  const toggleHandler = () => {
    setFilter((prev) => ({ ...prev, toggle: !prev.toggle }));
  };

  const filteredProducts = useMemo(
    () => filterProducts(products, filter),
    [products, filter]
  );

  const maxPrice = filteredProducts.reduce(
    (max, pr) => (pr.minPrice > max ? pr.minPrice : max),
    0
  );
  const [priceValue, setPriceValue] = useState<number[]>([0, maxPrice]);
  const priceChangeHandler = (e: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
    setFilter((prev) => ({ ...prev, price: newValue as number[] }));
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-10 p-5 w-full  ">
        <h1 className="font-medium text-3xl m-auto">جستجو</h1>
        <div className="w-full md:max-w-[500px] xl:max-w-[800px] h-13 mx-5  relative">
          <input
            type="text"
            value={filter.text}
            className="bg-gray-200 rounded-sm w-full h-full pr-12 text-black/80 focus:outline-none"
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, text: e.target.value }))
            }
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-1 flex flex-col">
            <SearchFilter
              filter={filter}
              toggleHandler={toggleHandler}
              maxPrice={maxPrice}
              priceValue={priceValue}
              priceChangeHandler={priceChangeHandler}
            />
          </div>
          {/* <div className="flex gap-4 md:hidden">
            <AlignCenterIcon onClick={setIsOpenFilter(!isOpenFilter)} />
            <h3>فیلترها</h3>
            <SearchFilter
              filter={filter}
              toggleHandler={toggleHandler}
              maxPrice={maxPrice}
              priceValue={priceValue}
              priceChangeHandler={priceChangeHandler}
            />
          </div> */}
          <div className="col-span-3">
            {filteredProducts.length > 0 && (
              <Cards product={filteredProducts} classNames="md:grid-cols-3" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
