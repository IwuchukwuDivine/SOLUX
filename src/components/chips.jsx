import React from 'react'
import { Icons } from './Icons'

const Chip = ({title, isActive}) => {
  return (
    <div className={`rounded-2xl cursor-pointer flex items-center justify-center gap-2 py-1 pl-2.5 pr-3 ${isActive ? 'bg-gray-300' : ' border border-black-100'}`}>
      <Icons.dot />
      <span className='text-gray-700 whitespace-nowrap text-sm font-medium'>{title}</span>
    </div>
  )
}

export default Chip
