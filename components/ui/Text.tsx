import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return <h3 className={cn("text-black/60 text-sm ", className)}>{children}</h3>;
};

export default Text;
