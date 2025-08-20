import type { Products } from "@/lib/types";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import Logo from "../logo/Logo";
import Typography from "@mui/material/Typography";

interface Props {
  product: Products;
}

const BreadCrumb = ({ product }: Props) => {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
  useEffect(() => {
    const category = product.product_name.slice(
      0,
      product.product_name.indexOf(" ")
    );
    setBreadcrumb([category, product.product_name]);
  }, [product]);

  console.log(breadcrumb);
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<Typography sx={{fontSize:"30px"}}>›</Typography>}>
      <Link underline="hover" color="inherit" href="/" >
          <img src="/logo.png" alt="logo" className="w-6" />
        </Link>
      
      {breadcrumb.map((item, index) => (
        <Link underline="hover" color="inherit" href="/" key={index} sx={{fontFamily:"vazir"}}>
          {item}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
