import { headerData } from '@/constants/data'
import Link from 'next/link'

import React from 'react'

const HeaderMenu = () => {
  return (
    <div className='hidden lg:flex text-gray-300 text-[13px] gap-5 '>
      {headerData.map(item =>(
        <Link href={item.href} key={item.id} className='hover:text-white hoverEffect'>
            {item.title}
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
