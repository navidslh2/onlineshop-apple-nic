"use client";
import TopBanner from '@/components/topBanner/TopBanner'
import { CategoriesContext } from '@/context/catgoriesContext'

import React, { useContext } from 'react'

const page = () => {
  const {categories} = useContext(CategoriesContext)
  console.log(categories)
  return (
    <div>
      <TopBanner />
      {categories.map(item =>(
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  )
}

export default page

