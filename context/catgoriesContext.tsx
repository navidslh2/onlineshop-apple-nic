"use client";

import { fetchCategories } from "@/lib/api";
import type { Categories } from "@/lib/types";
import { data } from "framer-motion/client";
import { createContext, useEffect, useState } from "react";

interface CategoriesContextType {
  categories: Categories[];
}

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null
);

const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }      
    };
    loadCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories  }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
