import { headerData } from "@/constants/data";
import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <section className="flex gap-7 flex-wrap items-center justify-evenly my-10">
      {headerData.map((item) =>
        item.img ? (
          <Link key={item.id} href={item.href} className="flex flex-col items-center justify-center gap-2">
            <img src={item.img} alt={item.title} />
            <p className="text-xs textColor ">{item.title}</p>
          </Link>
        ) : null
      )}
    </section>
  );
};

export default ProductsList;
