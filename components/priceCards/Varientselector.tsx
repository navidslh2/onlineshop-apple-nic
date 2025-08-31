import { Braces } from 'lucide-react'
import React, { useState } from 'react'

interface Props {
  information: string[]
  changeVarientHandler:(name: string, value: string) => void
   filter: { [key:string]: string}
}

const VarientSelector = ({information, changeVarientHandler , filter}: Props) => {
  let label: string | null = null
  let varient: string[] | null = null
  switch (information[0]){
    case "warranty":
      label="گارانتی :"
      varient = information[1].split(",")
      break
    case "partNumber":
      label="پارت نامبر :"
      varient = information[1].split(",")
      break
  }
  
  return (
    <div>
      <label htmlFor={information[0]}>{label}</label>
      <select name={information[0]} id={information[0]} value={filter[information[0]] || 'all'} onChange={(e) =>changeVarientHandler(information[0], e.target.value)}>
        <option value="all">همه موارد</option>
        {varient?.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default VarientSelector
