import { cn } from '@/lib/utils';
import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode;
  className?: string;
}

const TextTitle = ({ children, className }: Props) => {
  return (
  <div className={cn("text-black/80 text-sm font-bold ", className)}>{children}</div>
  )
}

export default TextTitle
