import React from 'react'
import { Icons } from '../Icons'

const FilterBtn = () => {
  return (
    <div className='flex items-center gap-5 py-2 px-3 cursor-pointer text-base font-semibold text-gray-700  rounded-2xl bg-gray-50'>
      <span>Filter</span>
      <Icons.filter />
    </div>
  )
}

export default FilterBtn
