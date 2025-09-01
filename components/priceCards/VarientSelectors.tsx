import type { Products } from "@/lib/types";
import React from "react";
import VarientSelector from "./Varientselector";

interface Props {
  product: Products;
  changeVarientHandler:(name:string , value:string)=> void
  filterVarient: { [key:string]: string}
}
const VarientSelectors = ({
  product,
  changeVarientHandler , filterVarient
}: Props) => {
  // const { colors, warranty } = product;
  // const colorArray = colors.split(",")

  return (
    <div className="border-b pb-8">
      {/* {colors && (
        <div>
          <label htmlFor="color">رنگ :</label>
          <select value={selectedColor} id="color" onChange={colorChangeHandler}>
            <option value='' disabled>همه موارد</option>
             {colorArray.map((pr, index) =>(
                <option key={index} className="relative">
                    <span className="after:absolute after:content-[''] after:w-4 after:h-4 after:rounded-full w-4 h-4 rounded-full" style={{backgroundColor: pr}}>a</span>
                </option>              
             ))}

          </select>
        </div>
      )} */}
      {Object.entries(product) &&
        Object.entries(product)?.map((item, index) => {
          if (item[0] === "warranty" || item[0] === "partNumber"){
            return <VarientSelector key={index} information={item} changeVarientHandler={changeVarientHandler} filterVarient={filterVarient}/>;
          }
          return null
            
        })}
    </div>
  );
};

export default VarientSelectors;
