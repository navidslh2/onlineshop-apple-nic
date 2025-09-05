import type { Products } from "@/lib/types";
import React from "react";
import VarientSelector from "./Varientselector";

interface Props {
  product: Products;
  changeVarientHandler: (name: string, value: string) => void;
  filterVarient: { [key: string]: string };
}
const VarientSelectors = ({
  product,
  changeVarientHandler,
  filterVarient,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row border-b pb-8 gap-4 xl:gap-0 max-w-[800px]">
      {Object.entries(product) &&
        Object.entries(product)?.map((item, index) => {
          if (
            item[0] === "warranty"  && item[1] !== null ||
            item[0] === "partNumber"  && item[1] !== null  ||
            item[0] === "activeStatus"  && item[1] !== null  ||
            item[0] === "color"  && item[1] !== null 
          ) {
            return (
              <VarientSelector
                key={index}
                information={item}
                changeVarientHandler={changeVarientHandler}
                filterVarient={filterVarient}
              />
            );
          }
        })}
    </div>
  );
};

export default VarientSelectors;
