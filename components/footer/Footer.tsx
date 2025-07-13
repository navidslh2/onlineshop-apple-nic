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
import AboutUs from "./AboutUs";
import Certificate from "./Certificate";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b-1 border-black/9 py-9 gap-10">
          <FooterSection data={store} />
          <FooterSection data={accessories} />
          <FooterSection data={newProduct} />
          <FooterSection data={afterSalesService} />
          <FooterSection data={contactInformation} />
        </div>
        <AboutUs />
        <Certificate />
        <p className="text-gray-700 text-sm flexCenter p-4">طراحی و توسعه توسط نوید صالحی جهت انجام پروژه </p>
      </Container>
    </footer>
  );
};

export default Footer;
