import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  information: string[];
  changeVarientHandler: (name: string, value: string) => void;
  filterVarient: { [key: string]: string };
}

const VarientSelector = ({
  information,
  changeVarientHandler,
  filterVarient,
}: Props) => {
  let label: string | null = null;
  let varient: string[] | null = null;
  const colorVarient: {[key: string]: string} = ({});
  switch (information[0]) {
    case "warranty":
      label = "گارانتی :";
      varient = information[1].split(",");
      break;
    case "partNumber":
      label = "پارت نامبر :";
      varient = information[1].split(",");
      break;
    case "activeStatus":
      label = "وضعیت اکتیو :";
      varient = information[1].split(",");
      break;
    case "color":
      label = "رنگ :";
      information[1].split(",").forEach(item => {
        const [name,code] = item.split(":")
       colorVarient[name]= code
      } )
      varient = Object.keys(colorVarient) 
      break;
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownaRef = useRef<HTMLDivElement>(null);

  const getButtonText = () => {
    if (filterVarient[information[0]] === "all" && information[0] === 'color')
      return (
        <div className="pr-8">
          <span
            className="absolute right-1 w-6 h-6 rounded-full shadow-inner shadow-black/40"
            style={{ backgroundColor: "white" }}
          />
          همه موارد
        </div>
      );
    else if (filterVarient[information[0]] === "all") return " همه موارد";
    else if (colorVarient && filterVarient[information[0]] !== "all")
      return (
        <div className="pr-8">
          {colorVarient && (
            <span
              className="absolute right-1 w-6 h-6 rounded-full shadow-inner shadow-black/40"
              style={{ backgroundColor: colorVarient[filterVarient[information[0]]] }}
            />
          )}

          {filterVarient[information[0]]}
        </div>
      );
    return filterVarient[information[0]];
  };

  useEffect(() => {
    function handelClickOutside(event: MouseEvent) {
      if (
        dropdownaRef.current &&
        !dropdownaRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handelClickOutside);
    return () => document.removeEventListener("click", handelClickOutside);
  }, []);

  return (
    <div
      className=" flex items-center justify-start w-full xl:max-w-[200px]  whitespace-nowrap"
      ref={dropdownaRef}
    >
      <label>{label}</label>
      <div className="w-full relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="overflow-hidden xl:max-w-[150px] flex items-center justify-between text-black/50 text-sm "
        >
          {getButtonText()}

          <ChevronDown />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute flex flex-col text-sm z-50 bg-[#fbf7f7] w-full border border-gray-400/60 rounded-md right-0 left-5 top-5 min-w-[250px] origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <li
                onClick={() => {
                  changeVarientHandler(information[0], "all");
                  setIsOpen(false);
                }}
                className={`hover:bg-black/90 hover:text-white flex items-center p-3 relative ${
                  colorVarient && "pr-11"
                }`}
              >
                {!colorVarient && (
                  <span
                    className="absolute right-3 w-6 h-6 rounded-full shadow-inner shadow-black/40"
                    style={{ backgroundColor: "white" }}
                  />
                )}
                همه موارد
              </li>
              {varient?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    changeVarientHandler(information[0], item);
                    setIsOpen(false);
                  }}
                  className={`hover:bg-black/90 hover:text-white flex items-center p-3 ${
                    colorVarient && "pr-11"
                  }`}
                >
                  {colorVarient && (
                    <span
                      className="absolute right-3 w-6 h-6 rounded-full shadow-inner shadow-black/40"
                      style={{ backgroundColor: colorVarient[item] }}
                    />
                  )}

                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VarientSelector;
