import React from 'react'

interface Props {
    quantity: number
}

const QuantitySelector = ({quantity}:Props) => {
    const addproduct =()=>{

    }
  return (
    <div className='flex gap-2 items-center bg-black/10 px-2 rounded-xl'>
      <button className='text-blue-800 cursor-pointer' onClick={addproduct}>+</button>
      <span className='text-gray-400 text-sm'>{quantity}</span>
      <button className='text-blue-800 cursor-pointer'>-</button>
    </div>
  )
}

export default QuantitySelector
