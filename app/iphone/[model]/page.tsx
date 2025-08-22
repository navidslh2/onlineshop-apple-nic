"use client";
import Cards from "@/components/card/Cards";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { CategoriesContext } from "@/context/catgoriesContext";
import { ProductsContext } from "@/context/productsContext";
import { Smartphone } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
  const params = useParams();
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);
  if (!categoriesContext || !productsContext) return <Loading />;
  const { categories } = categoriesContext;
  const { products, loading } = productsContext;

  if (loading) return <Loading />;
  const englishName = (params.model as string).replace(/-/g, " ");
  const category = categories.find((ca) => ca.eName === englishName);
  const filtredProducts = products.filter((pr) => pr.eName === englishName);

  return (
    <div>
      {category && (
        <TopBanner category={category} imageClassName={"h-[370px]"} />
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

export default page;
