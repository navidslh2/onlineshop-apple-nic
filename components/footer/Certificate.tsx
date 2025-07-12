import { certificate } from '@/constants/data'
import React from 'react'

const Certificate = () => {
  return (
    <ul className='flex flex-wrap px-10 gap-5 border-b-1 border-black/9 pb-9'>
        {certificate.map(item =>(
            <li  key={item.id} className=' border border-gray-300 rounded-lg shadow-inner shadow-gray-300'>
                <img src={item.href} alt={item.alt} className='w-[125px] h-[145px] object-cover p-3' />
            </li>
            
        ))}
    </ul>
  )
}

export default Certificate
