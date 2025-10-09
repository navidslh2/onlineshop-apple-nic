"use client";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Priceslider from "./Priceslider";
import { AlignCenterIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  filter: { text: string; toggle: boolean; price: number[] };
  toggleHandler: () => void;
  maxPrice: number;
  priceValue: number[];
  priceChangeHandler: (e: Event, newValue: number | number[]) => void;
}

const SearchFilter = ({
  filter,
  toggleHandler,
  maxPrice,
  priceValue,
  priceChangeHandler,
}: Props) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  return (
    <>
      <div className="flex gap-4 md:hidden">
        <AnimatePresence>
        <AlignCenterIcon onClick={() => setIsOpenFilter(!isOpenFilter)} />
        <h3>فیلترها</h3>
        {isOpenFilter &&
        <motion.div className="w-screen origin-top"
        initial={{ scaleY:0}}
        animate={{ scaleY:1}}
        exit={{ scaleY:0}}
        transition={{duration:0.5}}
        >
          <div className="flex gap-8 items-center pt-20 pb-3 border-b">
            <ToggleSwitch
              toggle={filter.toggle}
              toggleHandler={toggleHandler}
            />
            <span className="text-sm">فقط کالاهای موجود</span>
          </div>
          <div className=" flex flex-col gap-7 py-4 border-b px-3">
            <h2 className="font-bold text-sm">بازه قیمت (تومان)</h2>
            <Priceslider
              maxPrice={maxPrice}
              priceValue={priceValue}
              priceChangeHandler={priceChangeHandler}
            />
          </div>
        </motion.div>}
        </AnimatePresence>
        
      </div>
      <div className="hidden md:flex gap-3 items-center pt-20 pb-3 border-b">
        <ToggleSwitch toggle={filter.toggle} toggleHandler={toggleHandler} />
        <span className="text-sm">فقط کالاهای موجود</span>
      </div>
      <div className="hidden md:flex flex-col gap-7 py-4 border-b px-3">
        <h2 className="font-bold text-sm">بازه قیمت (تومان)</h2>
        <Priceslider
          maxPrice={maxPrice}
          priceValue={priceValue}
          priceChangeHandler={priceChangeHandler}
        />
      </div>
    </>
  );
};

export default SearchFilter;
