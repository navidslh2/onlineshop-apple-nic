import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" m-auto px-3 max-w-[500px] md:max-w-[800px] md:px-10 lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1350px] ", className)}>{children}</div>;
};

export default Container;
