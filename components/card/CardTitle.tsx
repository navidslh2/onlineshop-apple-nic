import type { Categories } from "@/lib/types";
import Link from "next/link";
import React from "react";
import DynamicIcon from "../ui/DynamicIcon";

interface Props {
  category: Categories;
}


const CardTitle = ({ category }: Props) => {
  const slug = category?.eName?.replace(/\s+/g,'-')
  return (
    <div className="flex justify-between border-b border-dashed border-gray-300 h-8 mb-4 mt-10 ">
      <div className="border-b-2 border-black h-full leading-[100%] px-2.5 flex gap-2">
        {category?.icon && <DynamicIcon icon={category.icon} className="text-black/60"  />}
        <p className="text-sm">
          <span>{category?.name}</span>{" "}
          {category?.eName && !category?.parent_id && <span>| {category?.eName}</span>}
        </p>
      </div>
      {category?.slug && category?.eName && (
        <Link
          href={`/${category?.slug}/${slug}`}
          className="font-bold text-sm text-blue-800 px-2.5"
        >
          مشاهده سایر&gt;
        </Link>
      )}
    </div>
  );
};

export default CardTitle;
