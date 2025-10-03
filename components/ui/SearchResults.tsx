import type { ProductsItem } from '@/lib/types'
import React from 'react'

interface Props {
    productsearched:ProductsItem[]
}

const SearchResults = ({productsearched}:Props) => {
  return (
    <div className='w-full h-full bg-white rounded-sm'>
        {productsearched.map(pr =>
            <div key={pr.id}>{pr.productName}</div>
        )}
    </div>
  )
}

export default SearchResults
