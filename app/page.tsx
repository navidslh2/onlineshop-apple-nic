import Container from "@/components/container/Container";
import Introduce from "@/components/introduce/Introduce";
import ProductsList from "@/components/productsList/ProductsList";
import Test from "@/components/test/Test";
import React from "react";

const Home = () => {
  return (

      <Container>
        <Introduce />
        <ProductsList />
        <Test />
      </Container>
  );
};

export default Home;
