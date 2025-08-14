"use client";
import CardTitle from "@/components/card/CardTitle";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import { CategoriesContext } from "@/context/catgoriesContext";
import type { Categories } from "@/lib/types";
import React, { useContext } from "react";

const page = () => {
  const context = useContext(CategoriesContext) as
    | { categories: Categories[] }
    | undefined;

  if (!context) {
    return <Loading />;
  }
  const { categories } = context;

  const category = categories.find((ca) => ca.id === 1);
  const product = categories.filter((ca) => ca.parent_id === 1);
  return (
    <div>
      {category && <TopBanner category={category} />}
        <Container>
          {product &&
          product.map((item) => (
            <div key={item.id}>
              <CardTitle category={item} />
            </div>
          ))}
        </Container>
        

    </div>
  );
};

export default page;
