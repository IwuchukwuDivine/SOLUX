"use client"

import React from 'react'
import { Icons } from './Icons'

const Filter = () => {
  return (
    <div className='flex w-full items-center justify-between'>
      <ul className='flex items-center gap-3'>
        <li className='py-2 px-3 text-base font-semibold text-gray-700 flex items-center gap-5 rounded-sm bg-gray-50'>
          <span>Filter</span>
          <Icons.filter />
        </li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>App Shots</li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>Websites</li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>Extensions</li>
      </ul>
      <div className='flex py-2.5 basis-1/2 px-3.5 shadow-custom items-center gap-3 border border-gray-300 rounded-[32px]'>
        <Icons.search />
        <input type='text' placeholder='Search' className='flex-1 placeholder:text-gray-500' />
      </div>
    </div>
  )
}

export default Filter