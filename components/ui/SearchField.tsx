'use client'
import { Search } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface Props {
  searchValue: string;
}

const SearchField = ({ searchValue }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()
  },[])

  return (
    <div className="w-full md:w-[70%] h-[80%] m-auto">
      <form className="w-full h-full flex items-center">
        <div className="w-full h-full relative">
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            placeholder="جستجو در محصولات سایت..."
            className="w-full h-full rounded-xs bg-white outline-none pr-10  focus:border focus:border-lime-400  "
          />
          <div className="absolute right-1.5 top-3.5">
          <Search />
        </div>
        </div>

        
      </form>
    </div>
  );
};

export default SearchField;
