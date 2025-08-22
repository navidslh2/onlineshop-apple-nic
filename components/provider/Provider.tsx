"use client";

import CategoriesProvider from "@/context/catgoriesContext";
import ProductProvider from "@/context/productsContext";
import ProductsItemProvider from "@/context/productsItemContext";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoriesProvider>
      <ProductProvider>
        <ProductsItemProvider>{children}</ProductsItemProvider>
      </ProductProvider>
    </CategoriesProvider>
  );
};

export default Provider;
