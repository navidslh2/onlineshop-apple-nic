import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduce = () => {
  return (
    <section className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
      <p className="text-2xl text-gray-500">
        <span className="font-bold text-black">اپل ان آی سی، </span>
        مرجع تخصصی فروش و خدمات محصولات اپل
      </p>
      <div className="flex gap-5 mt-3">
        <Image src="/support.webp" alt="support" width={30} height={30} className="rounded-full object-cover" />
        <div className="text-xs flex flex-col gap-1 items-start justify-center">
          <p className="text-gray-500  font-bold">در خرید خود نیاز به پشتیبانی یا مشاوره دارید؟!</p>
          <Link href="/" className="text-blue-800">تماس با پشتیبانی</Link>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
