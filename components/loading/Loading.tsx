import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-5   justify-center items-center text-xl">
      <Loader className="animate-spin" />
      <span>در حال بارگذاری محصولات...</span>
    </div>
  );
};

export default Loading;
