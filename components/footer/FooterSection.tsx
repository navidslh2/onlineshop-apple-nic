import type { StoreItem } from "@/constants/data";
import Link from "next/link";
import React, { type FC } from "react";

interface Props {
  data: StoreItem[];
}

const FooterSection: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col text-sm gap-2.5">
      {data.map((item) => (
        <div key={item.id}>
          {item.id === 1 ? (
            <div  className="font-bold">{item.title}</div>
          ) : (
            <Link  className="text-gray-700 pr-2" href={item.href}>
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterSection;
