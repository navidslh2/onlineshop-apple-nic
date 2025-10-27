import { certificate } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const Certificate = () => {
  return (
    <ul className='flex flex-wrap px-10 gap-5 border-b-1 border-black/9 pb-9'>
        {certificate.map(item =>(
            <li  key={item.id} className=' border border-gray-300 rounded-lg shadow-inner shadow-gray-300'>
                <Image src={item.href} alt={item.alt} width={125} height={145} className='object-cover p-3' />
            </li>
            
        ))}
    </ul>
  )
}

export default Certificate
