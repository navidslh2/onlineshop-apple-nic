"use client";

import CategoriesProvider from "@/context/catgoriesContext";
import ProductProvider from "@/context/productsContext";
import ProductsItemProvider from "@/context/productsItemContext";
import RatingProvider from "@/context/ratingContext";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoriesProvider>
      <ProductProvider>
        <ProductsItemProvider>
          <RatingProvider>
            <SessionProvider>{children}</SessionProvider>
          </RatingProvider>
        </ProductsItemProvider>
      </ProductProvider>
    </CategoriesProvider>
  );
};

export default Provider;
