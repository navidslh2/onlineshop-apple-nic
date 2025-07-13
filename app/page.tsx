import Container from "@/components/container/Container";
import Introduce from "@/components/introduce/Introduce";
import ProductsList from "@/components/productsList/ProductsList";
import React from "react";

const Home = () => {
  return (
    <main>
      <Container>
        <Introduce />
        <ProductsList />
      </Container>
    </main>
  );
};

export default Home;
