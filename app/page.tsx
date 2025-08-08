"use client";

import Cards from "@/components/card/Cards";
import Container from "@/components/container/Container";
import Introduce from "@/components/introduce/Introduce";
import ProductsList from "@/components/productsList/ProductsList";
import { fetchCategories, fetchProducts } from "@/lib/api";
import type { Categories, Products } from "@/lib/types";
import { Loader} from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
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
  useEffect(() => {
    console.log(products);
  }, [products]);
  const iphone = products.filter((p) => p.parentId === 1);
  const categoryIphone = categories[0];
  const ipad = products.filter((p) => p.parentId === 14);
  const categoriesIpad = categories[1];
  return (
    <Container>
      <Introduce />
      <ProductsList />

      {loading ? (
        <div className="flex gap-5 m-auto justify-center text-xl">
          <Loader className="animate-spin"/>
          <span>در حال بارگذاری محصولات</span>
        </div>
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
