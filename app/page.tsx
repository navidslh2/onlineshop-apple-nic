"use client";
import Container from "@/components/ui/Container";
import Introduce from "@/components/introduce/Introduce";
import Loading from "@/components/loading/Loading";
import ProductsList from "@/components/productsList/ProductsList";
import { CategoriesContext } from "@/context/catgoriesContext";
import React, { useContext, useEffect, useMemo } from "react";
import { ProductsContext } from "@/context/productsContext";
import SliderCards from "@/components/card/SliderCards";

const Home = () => {
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);

  if (!categoriesContext || !productsContext) {
    return <Loading />;
  }

  const { categories } = categoriesContext;
  const { products, loading,loadProducts } = productsContext;

  useEffect(() => {
    loadProducts();
  }, []);

  const iphone = products.filter((p) => p.parentId === 1);
  const categoryIphone = categories[0];
  const ipad = products.filter((p) => p.parentId === 14);
  const categoriesIpad = categories[1];
  const specialSale = products.filter((p) => p.discount !== 0);
  return (
    <Container>
      <Introduce />
      <ProductsList />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <SliderCards product={specialSale} />
          <SliderCards product={iphone} category={categoryIphone} />
          <SliderCards product={ipad} category={categoriesIpad} />
        </div>
      )}
    </Container>
  );
};

export default Home;
