import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";



const BreadCrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      <Link underline="hover" color="inherit" href="/">
        1
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        2
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
