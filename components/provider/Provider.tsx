'use client';

import CategoriesProvider from '@/context/catgoriesContext';
import React, { Children } from 'react'

const Provider = ({children} : {children: React.ReactNode}) => {
  return (
    <CategoriesProvider>
        {children}
    </CategoriesProvider>
  )
}

export default Provider
