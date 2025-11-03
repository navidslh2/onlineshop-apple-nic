"use client";
import Container from "@/components/ui/Container";
import Introduce from "@/components/introduce/Introduce";
import Loading from "@/components/loading/Loading";
import ProductsList from "@/components/productsList/ProductsList";
import { CategoriesContext } from "@/context/catgoriesContext";
import React, { useContext, useEffect } from "react";
import { ProductsContext } from "@/context/productsContext";
import SliderCards from "@/components/card/SliderCards";
import { usePathname } from "next/navigation";
import { fetchVisit } from "@/lib/api";

const Home = () => {
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  const categories = categoriesContext?.categories?? [];
  const loading = productsContext?.loading?? false;
  const products = productsContext?.products?? []
  const loadProducts = productsContext?.loadProducts?? (()=>{})
  const pathname = usePathname()

  useEffect(() => {
  loadProducts();
  fetchVisit(pathname)
}, []);

  if (!categoriesContext || !productsContext) {
    return <Loading />;
  }
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
