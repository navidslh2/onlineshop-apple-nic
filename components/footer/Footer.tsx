import React from "react";
import Container from "../container/Container";
import FooterSection from "./FooterSection";
import {
  accessories,
  afterSalesService,
  contactInformation,
  store,
  newProduct,
} from "@/constants/data";

const Footer = () => {
  return (
    <footer>
      <Container className=" max-w-[1200px] m-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b-1 border-black/9 p-9 gap-10">
          <FooterSection data={store} />
          <FooterSection data={accessories} />
          <FooterSection data={newProduct} />
          <FooterSection data={afterSalesService} />
          <FooterSection data={contactInformation} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
