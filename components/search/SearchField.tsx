"use client";
import { Search } from "lucide-react";

import React, { useEffect, useRef } from "react";

interface Props {
  searchValue: string;
  inputValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchEnter:(e:React.KeyboardEvent<HTMLInputElement>)=>void
}

const SearchField = ({ searchValue, inputValueHandler, searchEnter }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);



  return (
      <form className="w-full h-full flex items-center ">
        <div className="w-full h-full relative">
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={inputValueHandler}
            placeholder="جستجو در محصولات سایت..."
            className="w-full h-full rounded-xs bg-white outline-none pr-10  focus:border focus:border-lime-400 "
            onKeyDown={searchEnter}
          />
          <div className="absolute right-1.5 top-3.5">
            <Search />
          </div>
        </div>
      </form>
  );
};

export default SearchField;
