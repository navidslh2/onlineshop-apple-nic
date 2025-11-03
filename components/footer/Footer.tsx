"use client";
import React from "react";
import Container from "../ui/Container";
import FooterSection from "./FooterSection";
import {
  accessories,
  afterSalesService,
  contactInformation,
  store,
  newProduct,
} from "@/lib/data";
import AboutUs from "./AboutUs";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const hide = pathName.startsWith("/Account");
  return (
    <>
      {!hide && (
        <footer>
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b-1 border-black/9 py-9 gap-10  bg-gray-100">
              <FooterSection data={store} />
              <FooterSection data={accessories} />
              <FooterSection data={newProduct} />
              <FooterSection data={afterSalesService} />
              <FooterSection data={contactInformation} />
            </div>
            <AboutUs />
           
            <p className="text-gray-700 text-sm flexCenter p-4">
              طراحی و توسعه توسط نوید صالحی جهت انجام پروژه{" "}
            </p>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
