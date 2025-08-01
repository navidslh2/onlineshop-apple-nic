import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return <div className={cn("text-black/70 text-sm ", className)}>{children}</div>;
};

export default Text;
