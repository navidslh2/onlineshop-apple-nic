"use client";

import Cards from "@/components/card/Cards";
import Container from "@/components/container/Container";
import Introduce from "@/components/introduce/Introduce";
import Loading from "@/components/loading/Loading";
import ProductsList from "@/components/productsList/ProductsList";
import { CategoriesContext } from "@/context/catgoriesContext";
import { fetchProducts } from "@/lib/api";
import type { Products } from "@/lib/types";
import React, { useContext, useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const context = useContext(CategoriesContext)
  const {categories} = context
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log((error as Error).message);
      }
      setLoading(false);
    }
    loadProducts();
  }, []);
  const iphone = products.filter((p) => p.parentId === 1);
  const categoryIphone = categories[0];
  const ipad = products.filter((p) => p.parentId === 14);
  const categoriesIpad = categories[1];
  return (
    <Container>
      <Introduce />
      <ProductsList />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Cards product={iphone} category={categoryIphone} />
          <Cards product={ipad} category={categoriesIpad} />
        </div>
      )}
    </Container>
  );
};

export default Home;
