import React from 'react'
import { Icons } from './Icons'

const Chip = ({title, isActive, width=9, containerStyle, handleClick, size="text-sm"}) => {
  return (
    <div onClick={handleClick} className={`rounded-2xl ${containerStyle} cursor-pointer flex items-center justify-center gap-2 py-1 pl-2.5 pr-3 ${isActive ? 'bg-gray-300' : ' border border-black-100'}`}>
      <Icons.dot size={width} />
      <span className={`text-gray-700 whitespace-nowrap font-medium ${size}`}>{title}</span>
    </div>
  )
}

export default Chip
