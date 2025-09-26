"use client";
import Cards from "@/components/card/Cards";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { CategoriesContext } from "@/context/catgoriesContext";
import { ProductsContext } from "@/context/productsContext";
import { useParams } from "next/navigation";
import React, { useContext } from "react";


const Model = () => {
  const params = useParams()
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  const categories = categoriesContext?.categories ?? []
  const products = productsContext?.products ?? []
  const loading = productsContext?.loading ?? true
 
  const englishName = (params.model as string).replace(/-/g, " ");
  const category = categories.find((ca) => ca.eName === englishName);
  const filtredProducts = products.filter((pr) => pr.eName === englishName);
  
  if (!categoriesContext || !productsContext || loading ) return <Loading />
  return (
    <div>
      {category && (
        <TopBanner category={category} imageClassName={"h-[355px]"} />
      )}
      <Container>
        {products && category && <Cards product={filtredProducts} />}
        <div className="flex justify-center my-3">
          <Text>تعداد کل: {filtredProducts.length}</Text>
        </div>
      </Container>
    </div>
  );
};

export default Model
