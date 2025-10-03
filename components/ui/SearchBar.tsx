import { Search } from 'lucide-react'
import React from 'react'

interface Props{
  activeSearchbarHandler:()=>void
}

const SearchBar = ({activeSearchbarHandler}:Props) => {
  return (
    <div>
      <Search  className="w-5 text-gray-300 hover:text-white hoverEffect hover:cursor-pointer" onClick={activeSearchbarHandler}/>
    </div>
  )
}

export default SearchBar
