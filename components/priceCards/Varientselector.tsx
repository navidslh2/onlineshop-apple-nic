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
      varient = information[1].split(",");
      break;
  }
  console.log(filterVarient);
  console.log(information[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownaRef = useRef<HTMLDivElement>(null);

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
          onClick={(e) => {
            setIsOpen(!isOpen);
            e.stopPropagation();
          }}
          className="overflow-hidden xl:max-w-[150px] flex items-center justify-between text-black/50 text-sm "
        >
          <span>
            {filterVarient[information[0]] === "all"
              ? "همه موارد"
              : filterVarient[information[0]]}
          </span>
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
                onClick={(e) => {
                  changeVarientHandler(information[0], "all");
                  setIsOpen(false);
                  e.stopPropagation();
                }}
                className="hover:bg-black/90 hover:text-white flex items-center p-3"
              >
                همه موارد
              </li>
              {varient?.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => {
                    changeVarientHandler(information[0], item);
                    setIsOpen(false);
                    e.stopPropagation();
                  }}
                  className="hover:bg-black/90 hover:text-white flex items-center p-3"
                >
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
