"use client";
import Slider from "@mui/material/Slider";
import React from "react";

interface Props {
  maxPrice: number;
  priceValue: number | number[]
  priceChangeHandler:(e: Event, newValue: number | number[])=> void
}

const Priceslider = ({ maxPrice, priceValue, priceChangeHandler}: Props) => {
  ;
  const formatPrice = (value: number) => {
    return value.toLocaleString("fa-IR");
  };


  return (
    <div>
      <Slider
        getAriaLabel={() => "price range"}
        valueLabelDisplay="on"
        defaultValue={[0, maxPrice]}
        value={priceValue}
        onChange={priceChangeHandler}
        min={0}
        max={maxPrice}
        valueLabelFormat={formatPrice}
        sx={{
          color: "#2c2c2c",
          height: 6,
          "& .MuiSlider-thumb": {
            height: 20,
            width: 20,
            backgroundColor: "#fff",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
            "&:focus": {
              backgroundColor: "red",
            },
          },
          "& .MuiSlider-rail": {
            backgroundColor: "white",
            border: "0.5px solid #191919",
          },
          "& .MuiSlider-track": {
            boxShadow: "none",
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "transparent",
            color: "black",
            boxShadow: "none",
            right: "-30px",
            top: "0",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};

export default Priceslider;
