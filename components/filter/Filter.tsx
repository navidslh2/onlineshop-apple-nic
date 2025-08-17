import React from 'react'

const listOrder =[
    {id:1, name:"پیش فرض"},
    {id:2, name:"ارزان ترین"},
    {id:3, name:"گران ترین"},
]


const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center'>
      <span>مرتب سازی</span>
      <div>
        <ul className='flex gap-5 text-xs'>
            {listOrder.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter
