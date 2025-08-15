"use client"
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import { CategoriesContext } from "@/context/catgoriesContext";
import { ProductsContext } from "@/context/productsContext";
import Container from "@mui/material/Container";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useContext } from "react";
interface Props {
  params: {
    eName: string;
  };
}

const page = () => {
  const params = useParams()
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  if (!categoriesContext || !productsContext) {
    return <Loading />;
  }
  const { categories } = categoriesContext;
  const { products, loading } = productsContext ;

  if (loading) {
    return <Loading />;
  }
  const englishName = (params.eName as string).replace(/-/g,' ')
console.log(englishName)

  const category = categories.find((ca) => ca.eName === englishName);
  console.log(category)
  const categoriesTitle = categories.filter((ca) => ca.parent_id === 1);
  return (<div>
    {category && <TopBanner category={category} /> }
    <Container>
      45
    </Container>
  </div>);
};

export default page;
