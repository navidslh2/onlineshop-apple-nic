import type { Products } from "@/lib/types";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Product from "../product/Product";

interface BreadCrumbItem {
  fa:string
  en:string
}

interface Props {
  product: Products;
}
const BreadCrumb = ({ product }: Props) => {
  const [breadcrumb, setBreadcrumb] = useState<BreadCrumbItem[]>([]);
  useEffect(() => {
    const category = product.product_name.slice(
      0,
      product.product_name.indexOf(" ")
    );
    setBreadcrumb([{fa:category, en:product?.slug}, {fa:product?.product_name,en:product?.eName}]);
  }, [product]);
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<Typography sx={{fontSize:"30px"}}>›</Typography>}>
      <Link underline="hover" color="inherit" href="/" >
          <img src="/logo.png" alt="logo" className="w-6" />
        </Link>
      
      {breadcrumb.map((item, index) => (
        <Link underline="hover" color="inherit" href={`/${item.en}`} key={index} sx={{fontFamily:"vazir","&:hover": {color: "black"}}}>
          {item.fa}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
