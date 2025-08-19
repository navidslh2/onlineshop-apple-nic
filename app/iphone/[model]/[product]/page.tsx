"use client";
import Loading from "@/components/loading/Loading";
import Product from "@/components/product/product";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Container from "@/components/ui/Container";
import { ProductsContext } from "@/context/productsContext";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
  const context = useContext(ProductsContext);
  const pathName = useParams()
  if (!context) return <Loading />;
  console.log(pathName)
  const { products, loading } = context;
  if (loading) return <Loading />;
  console.log(products)
  const pathCapacity = pathName.product 
  // const product = products.find(pr => pr.capacityEName === pathName.model &&  )
  return (
      <Container>
        <BreadCrumb />
      </Container>
  );
};

export default page;
