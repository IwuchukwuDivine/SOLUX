"use client"

import React, { useState } from 'react'
import { Icons } from './Icons'
import Search from './Search'
import FilterBy from './Dropdowns/FilterBy'
import { useRouter } from 'next/navigation'

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false)
  const router = useRouter()

  const openCard = () => {
    if (!showFilter) {
      setShowFilter(true)
    }
  }

  return (
    <div className='flex w-full items-center justify-between'>
      <ul className='flex items-center gap-3'>
        <li className='py-2 px-3 relative cursor-pointer text-base font-semibold text-gray-700  rounded-sm bg-gray-50'>
          <div onClick={() => openCard()} className='flex items-center gap-5'>
            <span>Filter</span>
            <Icons.filter />
          </div>
          {showFilter && <FilterBy closeCard={() => setShowFilter(false)} />}
        </li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>App Shots</li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>Websites</li>
        <li className='py-2 px-3 text-base font-semibold text-gray-700'>Extensions</li>
        <li onClick={() => router.push('/waitlist')} className='py-2 px-3 text-base font-semibold text-gray-700 cursor-pointer'>Waitlist</li>
      </ul>
      <Search otherStyles={'basis-1/2'} />
    </div>
  )
}

export default Filter