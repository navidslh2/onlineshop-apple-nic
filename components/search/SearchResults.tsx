import type { Products } from "@/lib/types";
import React from "react";
import SearchResult from "./SearchResult";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

interface Props {
  productsearched: Products[];
  searchClickHandler:()=>void
}

const SearchResults = ({ productsearched,searchClickHandler }: Props) => {
  if(productsearched.length)
  return (
     <AnimatePresence>
      <motion.div className="bg-white origin-top max-h-[280px] overflow-y-scroll"
      initial={{scale:0}}
      animate={{scale:1}}
      exit={{scale:0}}
      transition={{duration:0.3, ease:easeInOut}}
      >
        {productsearched.map((pr) => (
          <div key={pr.id} className="flex flex-col">
            <SearchResult productsearched={pr} searchClickHandler={searchClickHandler} />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchResults;
