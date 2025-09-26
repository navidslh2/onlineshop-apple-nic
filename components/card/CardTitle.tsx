import type { Categories } from "@/lib/types";
import Link from "next/link";
import React from "react";
import DynamicIcon from "../ui/DynamicIcon";
import { BadgePercent } from "lucide-react";

interface Props {
  category?: Categories;
}

const CardTitle = ({ category }: Props) => {
  const slug = category?.eName?.replace(/\s+/g, "-");
  const path = slug?.indexOf("-")
  return (
    <div className="flex justify-between border-b border-dashed border-gray-300 h-8 mb-4 mt-10 ">
      <div className="border-b-2 border-black h-full leading-[100%] px-2.5 flex gap-2">
        {category?.icon ? (
          <DynamicIcon icon={category.icon} className="text-black/60" />
        ) : <BadgePercent /> }
        <p className="text-sm">
          <span>{category?.name ? category?.name : "فروش ویژه"}</span>{" "}
       
          <span>| {category?.eName ? category.eName : "special sale"}</span>
          
        </p>
      </div>
      {category?.slug ? (
        <Link
          href={`/${category?.slug}/${path && path >0 ? slug : ""}`}
          className="font-bold text-sm text-blue-800 px-2.5"
        >
          مشاهده سایر&gt;
        </Link>
      ): (<Link
          href="/onsales"
          className="font-bold text-sm text-blue-800 px-2.5"
        >
          مشاهده سایر&gt;
        </Link>)}
    </div>
  );
};

export default CardTitle;
