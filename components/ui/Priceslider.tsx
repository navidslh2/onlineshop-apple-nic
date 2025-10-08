import Slider from "@mui/material/Slider";
import React from "react";

const Priceslider = () => {
  return (
    <div>
      <Slider
        getAriaLabel={() => "price range"}
        valueLabelDisplay="auto"
        defaultValue={[20, 50]} 
        min={0}
        max={100}
      />
    </div>
  );
};

export default Priceslider;
