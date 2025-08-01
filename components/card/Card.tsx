import type { Products } from '@/lib/types'
import React from 'react'

const Card = ({ product_name, capacity, image}: Products) => {
  return (
    <div>
     
      <div>{product_name}</div>
      <div>{capacity}</div>
      <img src={image} alt="d" />
    </div>
  )
}

export default Card
