"use client";
import Container from "@/components/ui/Container";
import Introduce from "@/components/introduce/Introduce";
import Loading from "@/components/loading/Loading";
import ProductsList from "@/components/productsList/ProductsList";
import { CategoriesContext } from "@/context/catgoriesContext";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";
import SliderCards from "@/components/card/SliderCards";

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
          <SliderCards product={iphone} category={categoryIphone} />
          <SliderCards product={ipad} category={categoriesIpad} />
        </div>
      )}
    </Container>
  );
};

export default Home;
