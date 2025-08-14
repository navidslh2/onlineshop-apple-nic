"use client";

import CategoriesProvider from "@/context/catgoriesContext";
import ProductProvider from "@/context/productsContext";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoriesProvider>
      <ProductProvider>{children}</ProductProvider>
    </CategoriesProvider>
  );
};

export default Provider;
