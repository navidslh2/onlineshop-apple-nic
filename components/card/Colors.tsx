import React from "react";
interface Props{
    colors: string
}

const Colors = ({colors}:Props) => {
  const colorCods = colors?.split(",");
  return (
    <div className="flex justify-center gap-2">
      {colorCods?.map((item) => (
        <span
          key={item}
          className="relative after:content-[''] after:block after:w-2.5 after:h-2.5 after:rounded-full "
        >
          <span
            className="absolute w-2.5 h-2.5 rounded-full shadow-inner shadow-black/40"
            style={{ backgroundColor: item }}
          ></span>
        </span>
      ))}
    </div>
  );
};

export default Colors;
