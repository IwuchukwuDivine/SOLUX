import React from 'react'
import { Icons } from './Icons'
const Search = ({otherStyles}) => {
  return (
    <div className={`flex py-2.5 px-3.5 shadow-custom items-center gap-3 border border-gray-300 rounded-[32px] ${otherStyles}`}>
      <Icons.search />
      <input type='text' placeholder='Search' className='flex-1 outline-none placeholder:text-gray-500' />
    </div>
  )
}

export default Search