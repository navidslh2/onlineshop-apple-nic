import React from "react";

const listOrder = [
  { id: 1, name: "پیش فرض" , eName:"default" },
  { id: 2, name: "ارزان ترین",eName:"priceAsc" },
  { id: 3, name: "گران ترین", eName:"priceDsc" },
];
interface Props {
  onFilterSelect: (filter:string) => void;
  selectedFilter:string
}

const Filter = ({onFilterSelect, selectedFilter}:Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      <span>مرتب سازی</span>
      <div>
        <ul className="flex gap-5 text-xs">
          {listOrder.map((item) => (
            <li
              key={item.id}
              className={`p-1.5 rounded-xl hover:bg-gray-700/60 ${item.eName == selectedFilter && 'bg-gray-700/60'} `}
              onClick={()=>onFilterSelect(item.eName)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
