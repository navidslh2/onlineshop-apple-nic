"use client";
import TopBanner from "@/components/topBanner/TopBanner";
import { CategoriesContext } from "@/context/catgoriesContext";
import type { Categories } from "@/lib/types";
import React, { useContext, useEffect } from "react";

const page = () => {
  const context = useContext(CategoriesContext) as
    | { categories: Categories[] }
    | undefined;

  if (!context) {
    return <div>Loading...</div>;
  }
  const { categories } = context;

  const category = categories.find((ca) => ca.eName === "iphone");

  return (
    <div>
      {category && <TopBanner category={category} />}


    </div>
  );
};

export default page;
