import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" m-auto px-3 max-w-[500px] md:max-w-[1350px] md:px-10", className)}>{children}</div>;
};

export default Container;
