import type { Categories, Products } from '@/lib/types'
import React from 'react'
import Card from './Card'
import Filter from '../filter/Filter'

interface Props{
    product: Products[]
    category:Categories
}

const Cards = ({product, category}:Props) => {
  return (
    <div className='flex flex-col gap-10 mt-12'>
        <Filter />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {product.map((item,index) =>(
            <Card product={item} key={index}/>
        ))}
        </div>

    </div>
  )
}

export default Cards
