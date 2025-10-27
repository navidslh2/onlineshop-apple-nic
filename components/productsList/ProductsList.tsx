import { headerData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <section className="flex gap-7 flex-wrap items-center justify-evenly my-10">
      {headerData.map((item) =>
        item.img ? (
          <Link key={item.id} href={item.href} className="flex flex-col items-center justify-center gap-2">
            <Image src={item.img} alt={item.title} width={80} height={80} />
            <p className="text-xs textColor ">{item.title}</p>
          </Link>
        ) : null
      )}
    </section>
  );
};

export default ProductsList;
