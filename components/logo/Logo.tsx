
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link className='group flex items-center font-bold gap-3' href={"/"} >
        <img src="logo.png" alt="logo" className='w-10' />
        <span className='bg-gradient-to-l from-[#818f30] via-[#7aa596] to-[#80858a] bg-clip-text text-transparent group-hover:text-[#818f30] hoverEffect'>نوید صالحی</span>
    </Link>
    

  )
}

export default Logo
