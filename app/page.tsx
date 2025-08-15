"use client";

import Cards from "@/components/card/Cards";
import Container from "@/components/ui/Container";
import Introduce from "@/components/introduce/Introduce";
import Loading from "@/components/loading/Loading";
import ProductsList from "@/components/productsList/ProductsList";
import { CategoriesContext } from "@/context/catgoriesContext";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";

const Home = () => {
  const categoriesContext = useContext(CategoriesContext)
  if(!categoriesContext){
    return <div>...loading</div>
  }
  const {categories} = categoriesContext
  const productsContext = useContext(ProductsContext)
  if(!productsContext) {
    return <div>...loading</div>
  }
  const {products, loading} = productsContext
 
  

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
