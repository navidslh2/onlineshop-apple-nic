import React from 'react'
import Cart from './Cart'
import type { cart, ProductsItem } from '@/lib/types'
import TextTitle from '../ui/TextTitle'

interface Props {
  cartProductsItem:ProductsItem[]
}

const Carts = ({cartProductsItem}:Props) => {
  return (
    <div className='py-6 flex flex-col gap-2'>
      <TextTitle className='text-black/60'>محصولات</TextTitle>
      {cartProductsItem.map(pr=>
        <Cart  cartProductItem={pr} key={pr.id}/>
      )}
    </div>
  )
}

export default Carts