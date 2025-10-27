"use client";
import Cards from "@/components/card/Cards";
import Loading from "@/components/loading/Loading";
import TopBanner from "@/components/topBanner/TopBanner";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { ProductsContext } from "@/context/productsContext";
import React, { useContext } from "react";


const OnSales = () => {
  const productsContext = useContext(ProductsContext);
  if (!productsContext ) return <Loading />;
  const { products, loading } = productsContext;

  if (loading) return <Loading />;
  const filtredProducts = products.filter((pr) => pr.discount !==0);
  const category = {name:"فروش ویژه", eName:"on sale",description: "خرید محصولات اپل و لوازم جانبی با تخفیف ویژه با بهترین قیمت", img:"nic-takhfif.webp"}
  return (
    <div>
      {category && (
        <TopBanner category={category} imageClassName={"h-[370px]"} />
      )}
      <Container>
        {products && <Cards product={filtredProducts} />}
        <div className="flex justify-center my-3">
          <Text>تعداد کل: {filtredProducts.length}</Text>
        </div>
      </Container>
    </div>
  );
};

export default OnSales
