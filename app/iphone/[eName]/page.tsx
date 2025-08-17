"use client";
import Cards from "@/components/card/Cards";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import { CategoriesContext } from "@/context/catgoriesContext";
import { ProductsContext } from "@/context/productsContext";
import { useParams } from "next/navigation";
import React, { useContext } from "react";
interface Props {
  params: {
    eName: string;
  };
}

const page = () => {
  const params = useParams();
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  if (!categoriesContext || !productsContext) {
    return <Loading />;
  }
  const { categories } = categoriesContext;
  const { products, loading } = productsContext;

  if (loading) {
    return <Loading />;
  }
  const englishName = (params.eName as string).replace(/-/g, " ");
  const category = categories.find((ca) => ca.eName === englishName);

  return (
    <div>
      {category && (
        <TopBanner category={category} imageClassName={"h-[370px]"} />
      )}
      <Container>
        {products && category &&  <Cards product={products} category={category} />}
       
      </Container>
    </div>
  );
};

export default page;
