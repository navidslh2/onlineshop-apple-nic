"use client";
import SliderCards from "@/components/card/SliderCards";
import Cards from "@/components/card/SliderCards";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import { CategoriesContext } from "@/context/catgoriesContext";
import { ProductsContext } from "@/context/productsContext";
import React, { useContext } from "react";

const page = () => {
  const categoriesContext = useContext(CategoriesContext)
    const prouductsContext = useContext(ProductsContext)
  if (!categoriesContext || !prouductsContext) {
    return <Loading />;
  }
  const { categories } = categoriesContext;
   const {products, loading } = prouductsContext

  if(loading){
    return <Loading />;
  }
  const category = categories.find((ca) => ca.id === 14);
  const categoriesTitle = categories.filter((ca) => ca.parent_id === 14);
  return (
    <div>
      {category && <TopBanner category={category} />}
        <Container>
          {categoriesTitle &&
          categoriesTitle.map((ca) => (
            <div key={ca.id}>
              <SliderCards product={products.filter(pr=> pr.category_id === ca.id)} category={ca} />
            </div>
          ))}
        </Container>
        

    </div>
  );
};

export default page;
