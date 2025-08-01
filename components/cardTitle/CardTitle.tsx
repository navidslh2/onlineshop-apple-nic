import type { Categories } from "@/lib/types";
import Link from "next/link";
import React from "react";

interface Props {
  category: Categories;
}

const CardTitle = ({ category }: Props) => {
  return (
    <div className="flex justify-between border-b-1 border-dashed border-gray-300 h-8 ">
      <div className="border-b-2 border-black h-full leading-[100%] px-2.5">
        <p className="text-sm">
          {category?.name} | {category?.e_name}
        </p>
      </div>
      <Link href="" className="font-bold text-sm text-blue-800 px-2.5">
        مشاهده سایر&gt;
      </Link>
    </div>
  );
};

export default CardTitle;
