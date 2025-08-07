"use client";

import Cards from "@/components/card/Cards";
import Container from "@/components/container/Container";
import Introduce from "@/components/introduce/Introduce";
import ProductsList from "@/components/productsList/ProductsList";
import { fetchCategories, fetchProducts } from "@/lib/api";
import type { Categories, Products } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log((error as Error).message);
      }
    }
    async function loadCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("fail to fetch catrgories", error);
      }
    }
    loadProducts();
    loadCategories();
  }, []);
  useEffect(()=>{
    console.log(products)
  },[products])
  const iphone = products.filter((p) => p.parentId === 1);
  const categoryIphone = categories[0]
  return (
    <Container>
      <Introduce />
      <ProductsList />
      <Cards product={iphone} category={categoryIphone}/>
    </Container>
  );
};

export default Home;
